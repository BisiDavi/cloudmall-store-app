import React, { PropsWithChildren, useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
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
import getExistingStoreProfile from "@utils/getExistingStoreProfile";
import { UserOnboardingCompletedAction } from "@store/actions/SetupStoreAction";
import { saveToStorage } from "@utils/authToken";

export default function AuthProvider({ children }: PropsWithChildren<{}>) {
    const { state, dispatch } = useAuthReducer();
    const dispatchRedux = useDispatch();
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
            loginIn: async (email: string, password: string) => {
                dispatch({ type: "LOADING" });
                const loginInToken: string | null | void = await loginUser(
                    email,
                    password,
                );
                !loginInToken && dispatch({ type: "STOP_LOADING" });
                if (loginInToken) {
                    saveAuthtoken(loginInToken);
                    setClientToken(loginInToken);
                }
                console.log("loginToken", loginInToken);
                let bankStatus: boolean;
                loginInToken &&
                    getExistingStoreProfile(dispatchRedux)
                        .then((response: any) => {
                            bankStatus = response.bank;
                            saveToStorage(
                                "registrationCompleted",
                                response.bank,
                            );
                            if (response.bank) {
                                showToast(`Welcome, ${response.name}`);
                                dispatchRedux(UserOnboardingCompletedAction());
                                dispatch({
                                    type: "HAS_ACCOUNT",
                                    ownsAccount: response.bank,
                                });
                            }
                            dispatch({
                                type: "SIGN_IN",
                                token: loginInToken,
                            });
                        })
                        .catch(() => {
                            dispatch({
                                type: "SIGN_IN",
                                token: loginInToken,
                            });
                            dispatch({
                                type: "HAS_ACCOUNT",
                                ownsAccount: bankStatus,
                            });
                        });
                dispatch({ type: "STOP_LOADING" });
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
