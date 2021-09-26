import { useReducer } from "react";

export default function useAuthReducer() {
    const [state, dispatch] = useReducer(
        (prevState: any, action: any) => {
            const { type, token, ownsAccount } = action;
            switch (type) {
                case "SIGN_IN":
                    return {
                        ...prevState,
                        isSignout: false,
                        isLoading: false,
                        userToken: token,
                    };
                case "SIGN_OUT":
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                        isLoading: false,
                    };
                case "SIGN_UP":
                    return {
                        ...prevState,
                        isSignout: false,
                        isLoading: false,
                        userToken: token,
                    };
                case "LOADING":
                    return {
                        ...prevState,
                        isLoading: true,
                    };
                case "APP_LOAD":
                    return {
                        ...prevState,
                        isLoading: false,
                        userToken: token,
                    };
                case "HAS_ACCOUNT":
                    return {
                        ...prevState,
                        isLoading: false,
                        hasAccount: ownsAccount,
                    };
                case "STOP_LOADING": {
                    return {
                        ...prevState,
                        isLoading: false,
                    };
                }
            }
        },
        {
            isLoading: false,
            isSignout: false,
            userToken: null,
            hasAccount: false,
        },
    );
    return { state, dispatch };
}

type actionType = {
    type:
        | "SIGN_IN"
        | "SIGN_OUT"
        | "SIGN_UP"
        | "LOADING"
        | "APP_LOAD"
        | "STOP_LOADING"
        | "HAS_ACCOUNT";
    token?: string;
    ownsAccount?: boolean;
};

export type contextStateType = {
    isLoading: boolean;
    isSignout: boolean;
    userToken: any;
    hasAccount: boolean;
};
