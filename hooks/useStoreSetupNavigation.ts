import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/RootReducer";
import screenNavigate from "../utils/screenNavigate";

export default function useStoreSetupNavigation(navigation: any) {
  const setupStorestate = useSelector((state: RootState) => state.setupStore);

  console.log("setupStorestate", setupStorestate);

  useEffect(() => {
    if (setupStorestate.formPage !== 0) {
      screenNavigate(setupStorestate.formPage, navigation);
    }
  }, []);

  return setupStorestate;
}
