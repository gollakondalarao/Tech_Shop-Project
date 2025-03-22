import React from 'react';
import { Routes, Route } from 'react-router';
// import useScrollRestore from '../hooks/useScrollRestore';
import Home from '../Common/Pages/Home';
import ProductDetails from '../Common/Pages/ProductDetailes';
// import AllProducts from '../pages/AllProducts';
// import Cart from '../pages/Cart';
// import Home from '../pages/Home';

// import ErrorPage from '../pages/ErrorPage';

const RouterRoute = () => {

    // useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="/cart" element={<Cart />} /> */}
                {/* <Route path="/all-products" element={<AllProducts />} /> */}
                <Route path='/{roductDetails' element={<ProductDetails/>}/>
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        </>
    );
};

export default RouterRoute;