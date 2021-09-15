import { GET_USER_COORDINATES } from "../constant";

type actionType = {
    payload: {
        latitude: number;
        longitude: number;
    };
    type: "GET_USER_COORDINATES";
};

type stateType = {
    latitude: number;
    longitude: number;
    landmark: string | null;
};

export default function UserCoordinateReducer(
    state: stateType = {
        latitude: 0,
        longitude: 0,
        landmark: null,
    },
    action: actionType,
) {
    console.log("UserCoordinateReducer", state);
    const { type, payload } = action;
    switch (type) {
        case GET_USER_COORDINATES: {
            return {
                ...state,
                latitude: payload.latitude,
                longitude: payload.longitude,
            };
        }
        default:
            return state;
    }
}
