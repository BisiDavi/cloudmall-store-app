import React, { PropsWithChildren, useMemo } from "react";
import useAuthReducer from "@hooks/useAuthReducer";
import AuthContext from "./AuthContext";
import { saveAuthtoken } from "../utils/.";
import { signupUser, loginUser } from "../utils/authRequest";

export default function AuthProvider({ children }: PropsWithChildren<{}>) {
  const { state, dispatch } = useAuthReducer();

  const authContext = useMemo(
    () => ({
      loginIn: async (email: string, password: string) => {
        dispatch({ type: "LOADING" });
        const loginInToken = await loginUser(email, password);
        console.log("loginInToken", loginInToken);
        await saveAuthtoken(loginInToken);
        dispatch({ type: "SIGN_IN", token: loginInToken });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (email: string, password: string) => {
        dispatch({ type: "LOADING" });
        const signUpToken = await signupUser(email, password);
        await saveAuthtoken(signUpToken);
        dispatch({ type: "SIGN_UP", token: signUpToken });
        console.log("state", state);
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ authContext, state }}>
      {children}
    </AuthContext.Provider>
  );
}
