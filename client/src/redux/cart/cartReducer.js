import { ADD_TO_CART, CHANGE_QUANTITY } from "./cartTypes"

const initState = {
    cartItems:[],
    // cartQuantity:0
}

export const cartReducer = (state = initState,{type,payload}) =>{

    switch(type){

    case ADD_TO_CART:{
        return {
            ...state,
            cartItems:payload,
            // cartQuantity:payload
        }
    }
    // case CHANGE_QUANTITY:{
    //    return {
    //     ...state,
    //     cartItems: {
    //       items: state.cart.items.map(item =>
    //         item.id === payload.id
    //           ? { ...item, quantity: payload.quantity }
    //           : item
    //       )
    //     }
    //   };
    // }
        default:{
            return state
        }
    }
} 