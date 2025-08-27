import React, { useContext } from 'react'
import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './components/Nav'
import { userDataContext } from './context/UserContext'
import About from './pages/About'
import Collections from './pages/Collections'
import Products from './pages/Products'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import { Toaster } from "react-hot-toast";  // for notification
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import NotFound from './pages/NotFound'
import Ai from './components/AiImg.jsx'

function App() {
  let {userData} = useContext(userDataContext);
  let location = useLocation()
  return (
   <>
   {userData && <Nav/>}
   <Routes>
      <Route path='/login' 
      element={userData ? (<Navigate to={location.state?.from  || "/" } />):(<Login />)} />

    <Route path='/register'
    element={userData ? (<Navigate to={location.state?.from  || "/" } />):(<Registration />)}  />

    <Route path='/' 
    element = {userData?<Home />: <Navigate to="/login" state={{from:location.pathname}}/>} />

    <Route path='/about'
    element = {userData?<About />: <Navigate to="/login" state={{from:location.pathname}}/>} />

    <Route path='/collections' 
    element = {userData?<Collections />: <Navigate to="/login" state={{from:location.pathname}}/>} />

    <Route path='/products' 
    element = {userData?<Products />: <Navigate to="/login" state={{from:location.pathname}}/>} />

     <Route path='/contact' 
     element = {userData?<Contact />: <Navigate to="/login" state={{from:location.pathname}}/>} />

     <Route path='/productdetails/:productId' 
     element = {userData?<ProductDetails />: <Navigate to="/login" state={{from:location.pathname}}/>} />

      <Route path='/cart' 
     element = {userData?<Cart />: <Navigate to="/login" state={{from:location.pathname}}/>} />

     <Route path='/placeorder' 
     element = {userData?<PlaceOrder />: <Navigate to="/login" state={{from:location.pathname}}/>} />

     <Route path='/order' 
     element = {userData?<Order />: <Navigate to="/login" state={{from:location.pathname}}/>} />

     <Route path='*' 
     element = {<NotFound />} />

   </Routes>

   {/* Ai */}
   <Ai/>

   {/* 👇 Global toaster, only once in your app */}
      <Toaster position="top-right" reverseOrder={false} />
   </>
  )
}

export default App