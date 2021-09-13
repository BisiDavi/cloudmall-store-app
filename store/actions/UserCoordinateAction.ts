import { GET_USER_COORDINATES } from "@store/constant";

type payloadType = {
    latitude: number;
    longtitude: number;
};

type dispatchType = {
    type: string;
    payload: payloadType;
};

export const GetUserCoordinateAction =
    (payload: payloadType) => (dispatch: (dispatch: dispatchType) => void) => {
        dispatch({
            type: GET_USER_COORDINATES,
            payload: {
                latitude: payload.latitude,
                longtitude: payload.longtitude,
            },
        });
    };
