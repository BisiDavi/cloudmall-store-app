import { UPDATE_STORE_PROFILE } from "@store/constant";

export default function StoreProfileReducer(
    state = {
        storeProfile: null,
    },
    actions: StoreProfileActionsType,
) {
    const { payload, type } = actions;
    switch (type) {
        case UPDATE_STORE_PROFILE: {
            return {
                ...state,
                storeProfile: payload,
            };
        }
        default:
            return state;
    }
}

type StoreProfileActionsType = {
    payload: unknown;
    type: "UPDATE_STORE_PROFILE";
};
