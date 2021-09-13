import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetupStoreScreenAction } from "@store/actions/SetupStoreAction";
import { RootState } from "@store/RootReducer";
import screenNavigate from "@utils/screenNavigate";

export default function useStoreSetupNavigation(navigation: any) {
    const setupStorestate = useSelector((state: RootState) => state.setupStore);
    const dispatch = useDispatch();

    useEffect(() => {
        if (setupStorestate.formPage !== 0) {
            screenNavigate(setupStorestate.formPage, navigation);
        }
    }, [setupStorestate.formPage]);

    function onBoardingNextScreen(page: number, status: boolean) {
        dispatch(SetupStoreScreenAction(page, status));
    }

    return { setupStorestate, onBoardingNextScreen };
}
