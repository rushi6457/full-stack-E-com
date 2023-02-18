import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/signup';
import Cart from '../Pages/Cart';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    );
}

export default AllRoutes;
