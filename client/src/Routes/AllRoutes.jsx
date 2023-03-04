import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/signup';
import Cart from '../Pages/Cart';
import SingleProduct from '../Pages/SingleProduct';
import PrivateRoute from './PrivateRoute';
import Admin from '../Pages/Admin';
import Payment from '../Pages/Payment';
import AdminProducts from '../Pages/AdminProducts';
import AdminUsers from '../Pages/AdminUsers';
import AdminAddProducts from '../Pages/AdminAddProducts';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
            <Route path='/cart/:id' element={<SingleProduct/>}></Route>
            <Route path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
            <Route path='/payment/:id' element={<Payment/>}></Route>
            <Route path='/products' element={<AdminProducts/>}></Route>
            <Route path='/users' element={<AdminUsers/>}></Route>
            <Route path='/addproducts' element={<AdminAddProducts/>}></Route>
            {/* <Route path='/admin/' element={}></Route> */}
        </Routes>
    );
}

export default AllRoutes;
