import React, { PropsWithChildren, useState, useMemo, useEffect } from "react";
import useAuthReducer from "@hooks/useAuthReducer";
import AuthContext from "./AuthContext";
import {
    getAuthtoken,
    saveAuthtoken,
    signupUser,
    loginUser,
    showToast,
} from "@utils/.";
import { setClientToken } from "@network/axiosInstance";
import { getStoreDetailsRequest } from "@network/getRequest";

export default function AuthProvider({ children }: PropsWithChildren<{}>) {
    const { state, dispatch } = useAuthReducer();
    const [authToken, setAuthToken] = useState<string | null>(null);

    async function storedToken() {
        const token = await getAuthtoken();
        setAuthToken(token);
    }

    useEffect(() => {
        storedToken();
        if (authToken !== null) {
            dispatch({ type: "APP_LOAD", token: authToken });
        }
    }, [authToken]);

    const authContext = useMemo(
        () => ({
            loginIn: async (
                email: string,
                password: string,
                navigation: any,
            ) => {
                dispatch({ type: "LOADING" });
                const loginInToken = await loginUser(email, password);
                await saveAuthtoken(loginInToken);
                dispatch({ type: "SIGN_IN", token: loginInToken });
                setClientToken(loginInToken);
                getStoreDetailsRequest()
                    .then((response) => {
                        console.log(
                            "response getStoreDetailsRequest",
                            response.data,
                        );
                        if (response.data.bank) {
                            showToast(`Welcome, ${response.data.name}`);
                            navigation.navigate("Orders");
                        } else {
                            navigation.navigate("StoreDetailsScreenOne");
                        }
                    })
                    .catch((error) => {
                        if (error.response) {
                            console.log(
                                "getStoreDetailsRequest error response",
                                error.response,
                            );
                            navigation.navigate("StoreDetailsScreenOne");
                        } else if (error.request) {
                            console.log(
                                "getStoreDetailsRequest error request",
                                error.request,
                            );
                            navigation.navigate("StoreDetailsScreenOne");
                        }
                    });
            },
            signOut: () => dispatch({ type: "SIGN_OUT" }),
            signUp: async (email: string, password: string) => {
                dispatch({ type: "LOADING" });
                const signUpToken = await signupUser(email, password);
                await saveAuthtoken(signUpToken);
                setClientToken(signUpToken);
                dispatch({ type: "SIGN_UP", token: signUpToken });
            },
        }),
        [],
    );

    return (
        <AuthContext.Provider value={{ authContext, state }}>
            {children}
        </AuthContext.Provider>
    );
}
