import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./types";

const token = JSON.parse(localStorage.getItem('token'));
const initStateLogin = {
    isAuth:!!token,
    isLoading:false,
    isError:false,
    token:token
}
const initStateSignup = {
    isLoading:false,
    isError:false,
    message:''
}

export const loginReducer = (state=initStateLogin,{type,payload}) =>{

    switch(type) {

    case LOGIN_REQUEST:{
        return {
            ...state,
            isLoading:true,
            isAuth:false,
            isError:false,
            token:''
        }
    }
    case LOGIN_SUCCESS:{
        localStorage.setItem('token',JSON.stringify(token))
        return {
            ...state,
            isLoading:false,
            isAuth:true,
            token:payload,
            isError:false
        }
    }
    case LOGIN_FAIL:{
         return {
            ...state,
            isLoading:false,
            isAuth:false,
            token:'',
            isError:true
        }
    }
    case LOGOUT:{
        localStorage.removeItem('token')
        return {
            ...state,
            isAuth:false,
            isLoading:false,
            isError:false
        }
    }
        default:{
            return state
        }
    }
}

export const signupReducer = (state=initStateSignup,{type,payload}) =>{

    switch(type) {

    case SIGNUP_REQUEST:{
        return {
            ...state,
             isLoading:true,
            isError:false,
            message:''
        }
    }
    case SIGNUP_SUCCESS:{
        return {
            ...state,
            isLoading:false,
            isError:false,
            message:payload
        }
    }
    case SIGNUP_FAIL:{
         return {
            ...state,
            isLoading:false,
            isError:true,
            message:''
        }
    }
   
        default:{
            return state
        }
    }
}