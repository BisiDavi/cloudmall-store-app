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

export default function RootNavigator() {
    const { state } = useContext(AuthContext);

    console.log("context state", state);

    const { completed, formPage } = useSelector(
        (storeState: RootState) => storeState.setupStore,
    );
    const navigation = useNavigation();
    const tokenExpiry = hasTokenExpired(state.userToken);

    useEffect(() => {
        if (state.userToken) {
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
            {!tokenExpiry && !state.hasAccount ? (
                <StoreDetailsNavigation />
            ) : (!tokenExpiry && completed) || state.hasAccount ? (
                <DrawerNavigation />
            ) : (
                <PublicNavigation />
            )}
        </>
    );
}
