import axios from "axios"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./types"

export const login = (creds) => async(dispatch) =>{

    dispatch({type:LOGIN_REQUEST})
    try {
        let res = await axios.post(`http://localhost:5000/login`,creds)
        dispatch({type:LOGIN_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:LOGIN_FAIL})
    }
}
export const signup = (creds) => async(dispatch) =>{

    dispatch({type:SIGNUP_REQUEST})
    try {
        let res = await axios.post(`http://localhost:5000/signup`,creds)
        console.log(res);
        dispatch({type:SIGNUP_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:SIGNUP_FAIL})
    }
}
