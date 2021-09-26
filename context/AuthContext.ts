import { createContext } from "react";

const AuthContext = createContext({
    state: {
        isLoading: false,
        isSignout: false,
        userToken: null,
        hasAccount: false,
    },
});

export default AuthContext;
