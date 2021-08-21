import React, { useReducer } from "react";

export default function useAuthReducer() {
  const [state, dispatch] = useReducer(
    (prevState: stateType, action: actionType) => {
      switch (action.type) {
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            isLoading: false,
            userToken: action.token,
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
            userToken: action.token,
          };
        case "LOADING":
          return {
            ...prevState,
            isLoading: true,
          };
      }
    },
    {
      isLoading: false,
      isSignout: false,
      userToken: null,
    }
  );
  return { state, dispatch };
}

type actionType = {
  type: "SIGN_IN" | "SIGN_OUT" | "SIGN_UP" | "LOADING";
  token?: string;
};

export type stateType = {
  isLoading: boolean;
  isSignout: boolean;
  userToken?: undefined | null | string;
};
