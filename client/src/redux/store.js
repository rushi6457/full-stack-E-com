import { loginReducer, signupReducer } from "./auth/reducer";
import { compose,legacy_createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cartReducer";
import { productReducer } from "./product/productReducer";

const rootReducer = combineReducers({
    login:loginReducer,
    signup:signupReducer,
    cart:cartReducer,
    product:productReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
  );