import types from "../types";
import store from "../store";

const { dispatch } = store

export const login = (data) =>{
    // console.log(data)
    dispatch({
        type: types.LOGIN,
        payload: data
    })
}

export const logout = (data) =>{
    dispatch({
        type: types.USER_LOGOUT,
        payload: data
    })
}