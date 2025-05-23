import api from "@/config/api";
import { GET_ASSET_DETAILS_REQUEST, GET_ASSET_DETAILS_SUCCESS, GET_ASSET_FAILURE, GET_ASSET_REQUEST, GET_ASSET_SUCCESS, GET_USER_ASSETS_FAILURE, GET_USER_ASSETS_REQUEST, GET_USER_ASSETS_SUCCESS } from "./ActionTypes";

export const getAssetById = ({ assetId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_ASSET_REQUEST });
    try {
        const response = await api.get(`/api/asset/${assetId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({
            type: GET_ASSET_SUCCESS,
            payload: response.data,
        });
        console.log("asset success", response.data);
    } catch (error) {
        dispatch({
            type: GET_ASSET_FAILURE,
            error: error.message,
        });
    }
};

export const getAssetDetails = ({ coinId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_ASSET_DETAILS_REQUEST });
    try {
        const response = await api.get(`/api/asset/coin/${coinId}/user`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({
            type: GET_ASSET_DETAILS_SUCCESS,
            payload: response.data,
        });
        console.log("asset details", response.data);
    } catch (error) {
        dispatch({
            type: GET_ASSET_FAILURE,
            error: error.message,
        });
    }
};

export const getUserAssets = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_ASSETS_REQUEST });
    try {
        const response = await api.get("/api/assets", {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({
            type: GET_USER_ASSETS_SUCCESS,
            payload: response.data,
        });
        console.log("user assets success", response.data);
    } catch (error) {
        console.log("user assets error", error.response?.data);
        dispatch({
            type: GET_USER_ASSETS_FAILURE,
            error: error.message,
        });
    }
};
