import React, { useContext, useEffect, useState } from "react";
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
//import { getFromStorage } from "@utils/authToken";

export default function RootNavigator() {
    const { state } = useContext(AuthContext);
    const [accountRegistration, setAccountRegistration] = useState(false);

    console.log("context state", state);

    const { completed, formPage } = useSelector(
        (storeState: RootState) => storeState.setupStore,
    );
    console.log("completed", completed);
    const navigation = useNavigation();
    const tokenExpiry = hasTokenExpired(state.userToken);

    //async function getRegStatus() {
    //    return await getFromStorage("registrationCompleted");
    //}
    //useEffect(() => {
    //    getRegStatus().then((response) => {
    //        console.log("response getRegStatus", response);
    //        setAccountRegistration(response);
    //    });
    //}, []);

    useEffect(() => {
        if (state.userToken && !completed) {
            const userEmail = getsignedUserEmail(state.userToken);
            if (userEmail && !tokenExpiry) {
                setClientToken(state.userToken);
                if (formPage !== 0) {
                    screenNavigate(formPage, navigation);
                }
            }
        }
    }, [state]);

    useEffect(() => {
        if (!tokenExpiry) {
            setClientToken(state.userToken);
        }
    }, [tokenExpiry]);

    return (
        <>
            <Spinner visible={state.isLoading} color={colors.cloudOrange5} />
            {!tokenExpiry && !completed ? (
                <StoreDetailsNavigation />
            ) : !tokenExpiry && completed ? (
                <DrawerNavigation />
            ) : (
                <PublicNavigation />
            )}
        </>
    );
}
