import { ADD_TO_CART, CHANGE_QUANTITY, GET_CART } from "./cartTypes"

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
const initState = {
    cartItems:cartItems,
    // cartQuantity:0
}

export const cartReducer = (state = initState,{type,payload}) =>{

    switch(type){

    case ADD_TO_CART:{
        cartItems.push(payload);
        localStorage.setItem("cartItem",JSON.stringify(cartItems))
        return {
            ...state,
            cartItems:payload, // cartQuantity:payload
        }
    }
    
        default:{
            return state
        }
    }
} 