import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import AuthContext from "@context/AuthContext";
import { setClientToken } from "@network/axiosInstance";
import { RootState } from "@store/RootReducer";
import {
    getsignedUserEmail,
    hasTokenExpired,
    colors,
    screenNavigate,
} from "@utils/.";
import DrawerNavigation from "./DrawerNavigation";
import PublicNavigation from "./PublicNavigation";
import StoreDetailsNavigation from "./StoreDetailsNavigation";

export default function RootNavigator() {
    const { state } = useContext(AuthContext);
    const { completed, formPage } = useSelector(
        (storeState: RootState) => storeState.setupStore,
    );
    const navigation = useNavigation();
    const isSignedIn = hasTokenExpired(state.userToken);

    useEffect(() => {
        if (state.userToken) {
            const userEmail = getsignedUserEmail(state.userToken);
            if (userEmail && !isSignedIn) {
                setClientToken(state.userToken);
                if (formPage !== 0) {
                    screenNavigate(formPage, navigation);
                }
                //checkExistingStore(navigation, userEmail);
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
            <Spinner visible={state.isLoading} color={colors.cloudOrange5} />
            {!isSignedIn && !completed ? (
                <StoreDetailsNavigation />
            ) : !isSignedIn && completed ? (
                <DrawerNavigation />
            ) : (
                <PublicNavigation />
            )}
        </>
    );
}
