import axios from "axios"
import { ADD_TO_CART, PRODUCT_ADD_FAIL, PRODUCT_ADD_REQUEST, PRODUCT_ADD_SUCCESS } from "./productTypes";

export const addProduct = (data) => async(dispatch) =>{
    dispatch({type:PRODUCT_ADD_REQUEST})
    try {
        let res = await axios.post(`https://e-com-78xd.onrender.com/admin/newproduct`,data)
        console.log(res.data);
        dispatch({type:PRODUCT_ADD_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:PRODUCT_ADD_FAIL})
    }
}

export const editProduct = (data,id) =>async(dispatch) =>{
    try{

    }
    catch(err){
        
    }
}