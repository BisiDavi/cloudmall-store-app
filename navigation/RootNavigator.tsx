import "react-native-gesture-handler";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import { RootStackParamList } from "@customTypes/.";
import { hasTokenExpired } from "@utils/.";
import AuthContext from "@context/AuthContext";
import { setClientToken } from "@network/axiosInstance";
import { RootState } from "@store/RootReducer";
import { getsignedUserEmail } from "@utils/hasTokenExpired";
import checkExistingStore from "@utils/checkExistingStore";
import DrawerNavigation from "./DrawerNavigation";
import PublicNavigation from "./PublicNavigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    const { state } = useContext(AuthContext);
    const { completed } = useSelector(
        (storeState: RootState) => storeState.setupStore,
    );
    const navigation = useNavigation();
    const isSignedIn = hasTokenExpired(state.userToken);

    useEffect(() => {
        if (state.userToken) {
            const userEmail = getsignedUserEmail(state.userToken);
            if (userEmail && !isSignedIn) {
                setClientToken(state.userToken);
                checkExistingStore(navigation, userEmail);
            }
        }
    }, [state]);

    useEffect(() => {
        if (!isSignedIn) {
            setClientToken(state.userToken);
        }
    }, [isSignedIn]);

    return (
        <>
            <Spinner visible={state.isLoading} color="blue" />
            {!isSignedIn && completed ? (
                <DrawerNavigation />
            ) : (
                <PublicNavigation />
            )}
        </>
    );
}
