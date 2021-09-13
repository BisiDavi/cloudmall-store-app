import { GET_USER_COORDINATES } from "../constant";

type actionType = {
    payload: {
        latitude: number;
        longtitude: number;
    };
    type: "GET_USER_COORDINATES";
};

type stateType = {
    latitude: number;
    longtitude: number;
};

export default function UserCoordinateReducer(
    state: stateType = {
        latitude: 0,
        longtitude: 0,
    },
    action: actionType,
) {
    const { type, payload } = action;
    switch (type) {
        case GET_USER_COORDINATES: {
            return {
                ...state,
                latitude: payload.latitude,
                longtitude: payload.longtitude,
            };
        }
        default:
            return state;
    }
}
