import axios from "axios"
import { ADD_TO_CART } from "./cartTypes";

export const addToCart = (data) => async(dispatch) =>{
   
    try {
        let res = await axios.post(`http://localhost:5000/addtocart`,data)
       
        dispatch({type:ADD_TO_CART,payload:res.data})
    } catch (error) {
        console.log(error);
    }
}