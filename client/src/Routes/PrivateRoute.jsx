import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute ({children}){

     const store = useSelector(store=>store.login)
    console.log(store);
    let {pathName} = useLocation()
    if(store.isAuth){
        return children
    }
    else{
        return(
            <Navigate
                to={'/login'}
                state={{from:pathName}}
                replace
            />
        )
    }

}
export default PrivateRoute