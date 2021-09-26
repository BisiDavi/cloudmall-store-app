import { createContext } from "react";

const AuthContext: authContextType | any = createContext({
    authContext: null,
    state: {
        isLoading: false,
        isSignout: false,
        userToken: null,
        hasAccount: false,
    },
});

export default AuthContext;

type authContextType = React.Context<{
    authContext: any;
    state: {
        isLoading: boolean;
        isSignout: boolean;
        userToken: null;
        hasAccount: boolean;
    };
}>;
