import { GET_USER_LOCATION } from "../constant";

type actionType = {
    payload: {
        granted: boolean;
    };
    type: "GET_USER_LOCATION";
};

export default function UserLocationReducer(
    state = {
        granted: null,
        latitude: null,
        longtitude: null,
    },
    action: actionType,
) {
    const { type, payload } = action;
    switch (type) {
        case GET_USER_LOCATION: {
            return { ...state, granted: payload };
        }
        default:
            return state;
    }
}
