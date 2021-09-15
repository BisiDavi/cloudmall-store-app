import { GET_USER_COORDINATES } from "@store/constant";

type payloadType = {
    latitude: number;
    longitude: number;
    landmark?: string;
};

type dispatchType = {
    type: string;
    payload: payloadType;
};

export const GetUserCoordinateAction =
    (payload: payloadType) => (dispatch: (dispatch: dispatchType) => void) => {
        console.log("payload GetUserCoordinateAction", payload);
        dispatch({
            type: GET_USER_COORDINATES,
            payload: {
                latitude: payload.latitude,
                longitude: payload.longitude,
                landmark: payload?.landmark,
            },
        });
    };
