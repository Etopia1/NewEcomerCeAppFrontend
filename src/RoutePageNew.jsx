import React, { useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './Auth/Hero'
import PrivaRoue from './PrivaRoue'
import SignUp from './Auth/Signup'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Signup from './Auth/Signup'
import MarchantSignup from './MarchantAuth/MarchantSignup'
import MarchantOtp from './MarchantAuth/MarchantOtp'
import MarchatForget from './MarchantAuth/MarchantForget'
import MarchantLogin from './MarchantAuth/MarchantLogin'
import MarchantForgetpassOtp from './MarchantAuth/MarchantForgetpassOtp'
import MarchantNewPass from './MarchantAuth/MarchantNewPass'
import DashboardPrivateRoute from './DashboardPrivateRoute'
import Home from './MarchantDashboard/MainMarchantDashboard/Homepage/Home'
import Categorypage from './MarchantDashboard/Pages/Categorypage'
import AOS from "aos";
import "aos/dist/aos.css";
import CategoryView from './MarchantDashboard/Pages/CategoryView'
import ProductPage from './MarchantDashboard/Pages/ProductPage'
import ProductView from './MarchantDashboard/Pages/ProductView'
import UserSignup from './User/UserSignup'
import UserVerifyOtp from './User/UserVerifyOtp'
import UserLogin from './User/UserLogin'
import UserForgetPass from './User/UserForgetPass'
import UserVerifyOtpPass from './User/UserVerifyOtpPass'
import UserPrivateRoute from './UserPrivateRoute'
import CategoryProducts from './components/Category/CategoryProduct'
import Cart from './components/Cart/cart'
import OrderConfirmation from './components/Cart/OrderConfirmation'
import MerchantOrders from './MarchantDashboard/Pages/MerchantOrders'
import UserOrderPage from './MarchantDashboard/Pages/UserOrderPage'
import ViewOrder from './MarchantDashboard/Pages/ViewOrder'
const RoutePageNew = () => {
  useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
    
  return (
    <HashRouter>
    <Routes>
        {/* <Route path='/signup'  element={<Signup/>}/> */}
        {/* <Route path='/' element={</>}/> */}
        <Route path='/ddd' element={<UserLogin/>} />
        <Route path='/user-signup' element={<UserSignup/>}/>
        <Route path='/userverifyone/:token' element={<UserVerifyOtp/>}/>
        <Route path='/user-forgetpass' element={<UserForgetPass/>} />
        <Route path='/user-VerifyOtppass/:token'  element={<UserVerifyOtpPass/>} />
        <Route path='/home2' element={<PrivaRoue/>}/>
        <Route path='/marchantlogin' element={<MarchantLogin/>}/>
        <Route path='/marchant-signup' element={<MarchantSignup/>}/>
        <Route path='/marchant-verifyotp/:token' element={<MarchantOtp/>} />
        <Route path='/marchant-forgetpass' element={<MarchatForget/>} />
        <Route path='/marchant-forgetpassverifyotp/:token' element={<MarchantForgetpassOtp/>} />
        <Route path='/marchant-resetnewPass/:token' element={<MarchantNewPass/>} />
        <Route  element={< DashboardPrivateRoute/>} children={[

            <Route path='/home' element={< Home/>} />,
            <Route path='/marchantCategory' element={<Categorypage/>}/>,
            <Route path='/viewCategory/:id' element={<CategoryView/>}/>,
            <Route path='/product' element={<ProductPage/>}/>,
            <Route path='/viewProduct/:id' element={<ProductView/>}/>,
            <Route path='/marchantOrder' element={< MerchantOrders/>}/>

        ]}/>
        <Route element={<UserPrivateRoute/>} children={[
          <Route path='/userHome' element={      <PrivaRoue/> }/>,
        <Route path='/viewcategoryandProduct/:id' element={<CategoryProducts/>}/>,
        <Route path='cartpage' element={<Cart/>} />,
        <Route path='/confirmoreder' element={< OrderConfirmation/>}/>,
        <Route path='/getAllorder' element={< UserOrderPage/>}/>,
        <Route path='/getOneOrder/:orderId' element={< ViewOrder/>}/>,
     

        ]}/>

        {/* <Route path='/two'  element={<Calander/>}/> */}
        {/* <Route path='/one'  element={<Calendar2/>}/> */}
        {/* <Route element={<PrivaRoue/>} children={[
          <Route path='/dashboard' element={<Dashboard/>}/>
        ]}/>  */}
        
        {/* <Route path='/signup' element={<Signup/>}/> */}
    </Routes>
</HashRouter>
  )
}

export default RoutePageNew