import { useState,useEffect } from 'react';
import axios from "axios";
import Home from '../src/components/Home'
import Header from "../src/components/Header";
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Loader from './components/Loader';
import ProductDetails from "./components/Product/ProductDetails";
import Products from './components/Product/Products.js';
import Search from './components/Search';
import LoginAndSignUp from './components/User/LoginAndSignUp';
import store from './store';
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux';
import UserOptions from "./components/UserOptions";
import Profile from "./components/User/Profile";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment.js";
import OrderSuccess from "./components/Cart/OrderSuccess.js";
import MyOrders from "./components/Order/MyOrders.js";
import OrderDetails from "./components/Order/OrderDetails.js";
import Dashboard from "./components/Admin/Dashboard.js";
import ProductList from "./components/Admin/ProductList.js";
import ProcessOrder from "./components/Admin/ProcessOrder.js"

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import NewProduct from './components/Admin/NewProduct';
import UpdateProduct from './components/Admin/UpdateProduct.js';
import OrderList from './components/Admin/OrderList.js';
import UsersList from "./components/Admin/UsersList.js";
import UpdateUser from "./components/Admin/UpdateUser.js"
import ProductReviews from "./components/Admin/ProductReviews.js"
import NotFound from './components/NotFound/NotFound';
// import ProtectedRoute from './components/Product/ProtectedRoute';

function App(){
  const {isAuthenticated,user} = useSelector((state)=>state.user)

  const [stripeApiKey,setStripeApiKey] = useState("");

  async function getStripeApiKey(){
    const {data} = await axios.get("http://localhost:5000/api/v1/stripeapikey", { withCredentials: true });
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(()=>{
    store.dispatch(loadUser());

    getStripeApiKey();
  },[])
  return (
    <div className="App">
    {/* Hello */}
    <BrowserRouter>
    {<Header />}
    
    {isAuthenticated && <UserOptions user={user} />}
    
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product/:id" element={<ProductDetails />} />
      <Route exact path="/products" element={<Products />} />
      <Route path="/products/:keyword" element={<Products />} />
      <Route exact path="/search" element={<Search />} />
      <Route exact path="/" element={<LoginAndSignUp />} />
      {isAuthenticated && <Route exact path="/account" element={<Profile />} />}
      {isAuthenticated && <Route exact path="/me/update" element={<UpdateProfile />} />}
      {isAuthenticated && <Route exact path="/password/update" element={<UpdatePassword />} />}
      <Route exact path="/password/forgot" element={<ForgotPassword />} />
      <Route exact path="/password/reset/:token" element={<ResetPassword />} />
      <Route exact path="/cart" element={<Cart />} />
      {isAuthenticated && <Route exact path="/shipping" element={<Shipping />} />}
      {isAuthenticated && <Route exact path="/order/confirm" element={<ConfirmOrder />} />}
      {stripeApiKey && (
      <Route
      exact path="/process/payment"
      element={
      isAuthenticated && (
      <Elements stripe={loadStripe(stripeApiKey)}>
      {<Payment />}
      </Elements>)}
      />
      )}
      {isAuthenticated && <Route exact path="/success" element={<OrderSuccess />} />}
      {isAuthenticated && <Route exact path="/orders" element={<MyOrders />} />}
      {isAuthenticated && <Route exact path="/order/:id" element={<OrderDetails />} />}
      {isAuthenticated && <Route exact path="/admin/dashboard" element={<Dashboard />} />}
      {isAuthenticated && <Route exact path="/admin/products" element={<ProductList />} />}
      {isAuthenticated && <Route exact path="/admin/product" element={<NewProduct />} />}
      {isAuthenticated && <Route exact path="/admin/product/:id" element={<UpdateProduct />} />}
      {isAuthenticated && <Route exact path="/admin/orders" element={<OrderList />} />}
      {isAuthenticated && <Route exact path="/admin/order/:id" element={<ProcessOrder />} />}
      {isAuthenticated && <Route exact path="/admin/users" element={<UsersList />} />}
      {isAuthenticated && <Route exact path="/admin/user/:id" element={<UpdateUser />} />}
      {isAuthenticated && <Route exact path="/admin/reviews" element={<ProductReviews />} />}

      <Route exact path="/sad" element={<Loader />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    {<Footer />}
  </BrowserRouter>
    </div>
  );
}

export default App;
