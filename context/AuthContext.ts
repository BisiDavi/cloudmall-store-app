import  { createContext } from "react";

const AuthContext: any = createContext({
  state: {
    isLoading: false,
    isSignout: false,
    userToken: null,
  },
});

export default AuthContext;
