import { PRODUCT_ADD_FAIL, PRODUCT_ADD_REQUEST, PRODUCT_ADD_SUCCESS } from "./productTypes"

const initState = {
    isAddLoading:false,
    isAdded:{},
    isAddFail:false
}

export const productReducer = (state = initState,{type,payload}) =>{

    switch(type){

    case PRODUCT_ADD_REQUEST:{
        return {
            ...state,
            isAddLoading:true,
            isAdded:false,
            isAddFail:false
        }
    }
     case PRODUCT_ADD_SUCCESS:{
        return {
            ...state,
            isAddLoading:false,
            isAdded:payload,
            isAddFail:false
        }
     }
     case PRODUCT_ADD_FAIL:{
        return {
            ...state,
            isAddLoading:false,
            isAdded:false,
            isAddFail:true
        }
     }
        default:{
            return state
        }
    }
} 