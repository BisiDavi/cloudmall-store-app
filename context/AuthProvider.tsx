import React, { PropsWithChildren, useState, useMemo, useEffect } from "react";
import useAuthReducer from "@hooks/useAuthReducer";
import AuthContext from "./AuthContext";
import { getAuthtoken, saveAuthtoken, signupUser, loginUser } from "@utils/.";
import checkExistingStore from "@utils/checkExistingStore";
import { setClientToken } from "@network/axiosInstance";

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
      loginIn: async (email: string, password: string, navigation: any) => {
        dispatch({ type: "LOADING" });
        const loginInToken = await loginUser(email, password);
        await saveAuthtoken(loginInToken);
        dispatch({ type: "SIGN_IN", token: loginInToken });
        console.log("loginInToken authContext", loginInToken);
        setClientToken(loginInToken);
        checkExistingStore(navigation, email);
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (email: string, password: string) => {
        dispatch({ type: "LOADING" });
        const signUpToken = await signupUser(email, password);
        await saveAuthtoken(signUpToken);
        dispatch({ type: "SIGN_UP", token: signUpToken });
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
