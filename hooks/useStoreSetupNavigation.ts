import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetupStoreScreenAction } from "@store/actions/SetupStoreAction";
import { RootState } from "@store/RootReducer";
import screenNavigate from "@utils/screenNavigate";
import { useNavigation } from "@react-navigation/core";

export default function useStoreSetupNavigation() {
    const setupStorestate: setupStorestateType = useSelector(
        (state: RootState) => state.setupStore,
    );
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        if (setupStorestate.formPage !== 0) {
            return screenNavigate(setupStorestate.formPage, navigation);
        }
    }, [setupStorestate.formPage]);

    function onBoardingNextScreen(page: number, status: boolean) {
        return dispatch(SetupStoreScreenAction(page, status));
    }

    return { setupStorestate, onBoardingNextScreen };
}

type setupStorestateType = {
    formPage: number;
};
