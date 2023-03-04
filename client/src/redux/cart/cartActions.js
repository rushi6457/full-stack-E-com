import axios from "axios"
import { ADD_TO_CART } from "./cartTypes";

export const addToCart = (userId,productId) => async(dispatch) =>{
   
    try {
        let res = await axios.post(`https://e-com-78xd.onrender.com/cart/addtocart`,{userId,productId})
        console.log(res);
        dispatch({type:ADD_TO_CART,payload:res.data.newCartItem
})
    } catch (error) {
        console.log(error);
    }
}