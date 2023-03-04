import axios from "axios"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./types"

export const login = (creds) => async(dispatch) =>{

    dispatch({type:LOGIN_REQUEST})
    try {
        let res = await axios.post(`https://e-com-78xd.onrender.com/user/login`,creds)
        console.log(res.data);
        dispatch({type:LOGIN_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:LOGIN_FAIL})
    }
}

export const logout = () => ({type:LOGOUT})
export const signup = (creds) => async(dispatch) =>{

    dispatch({type:SIGNUP_REQUEST})
    try {
        let res = await axios.post(`https://e-com-78xd.onrender.com/user/signup`,creds)
        console.log(res);
        dispatch({type:SIGNUP_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:SIGNUP_FAIL})
    }
}
