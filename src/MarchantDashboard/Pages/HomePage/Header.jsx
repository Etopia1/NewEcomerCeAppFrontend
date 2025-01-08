import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { FiHome, FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import { clearUser } from "../../../components/Global/Slice";
import { FiLogIn, FiUserPlus } from "react-icons/fi";


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hello, setHello] = useState(false);
    const [cartItems, setCartItems] = useState([]);
  
  // const [token, setToken] = useState(false);
  const token = useSelector((state)=> state.token)
  const dispatch = useDispatch()
  // const CartNav =() =>{
  //   // if(token){
  //     // Nav("/userlogin")
  //   // } else{
  //     Nav("/cartpage")
  //   // }
  // }
       
  useEffect(() => {

    axios
      .get("http://localhost:1900/api/v1/viewcart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("hello", response);
        setCartItems(response.data.data.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const Nav = useNavigate()
  const logout =()=> {
    dispatch(clearUser())
  }


  return (
    <header className="bg-white shadow  top-0 bottom-0 w-[100%] h-[10%] sticky z-[999999999999999999999999999999999999]">
      {/* Top Bar */}
      {/* <div className="bg-gray-100 text-sm text-gray-700 py-2 px-4 flex justify-between items-center">
        <p>Summer Sale: Up to 50% off | Free Express Delivery</p>
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer">English</span>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Exclusive</div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <p  onClick={
            () => Nav("/")
          }  className="hover:text-blue-600">
            Home
          </p>
          <p onClick={
            () => Nav("/contact")
          }  className="hover:text-blue-600">
            Contact
          </p>
          <a onClick={
            () => Nav("/aboutus")
          }  className="hover:text-blue-600">
            About
          </a>
          <a href="/signup" className="hover:text-blue-600">
          
          </a>
        </nav>

        {/* Icons & Search */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          {/* <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden">
            {/* <input
              type="text"
              placeholder="What are you looking for?"
              className="px-4 py-2 w-64 focus:outline-none"
            /> */}
           
          {/* </div> */} 

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <FaUser onMouseEnter={()=> setHello(true)} className="text-gray-700 relative hover:text-blue-600 text-xl cursor-pointer" />
           {
            !token ? <>
              {
              hello ?             <div onMouseLeave={()=> setHello(false)} data-aos="fade-down" className=" md:w-[15%] md:h-[150%] absolute w-[30%] top-[60px] right-[10px] rounded-lg z-[999999999999999999999] h-[20%] bg-[#b8b5b5af] ">
                  <div className="py-1 items-center justify-center gap-[20px] flex  w-[100%]  flex-col">
            <p 
            onClick={()=> Nav("/userlogin")}
              className="flex w-[100%] items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FiLogIn className="mr-3" />
              Login
            </p>
            
          </div>
              </div> :null

            }
            </> :  <>
            
            {
              hello ?             <div onMouseLeave={()=> setHello(false)} data-aos="fade-down" className=" md:w-[10%] md:h-[40vh] absolute w-[40%] top-[60px] right-[10px] rounded-lg z-[999999999999999999999] h-[40vh] bg-[#c5c3c3a1] ">
                  <div className="py-1 items-center justify-center gap-[20px] flex  w-[100%]  flex-col ">
            <p
            onClick={()=> Nav("/")}
              className="flex items-center px-4 py-2 w-[100%] text-sm text-gray-700 hover:bg-gray-100"
            >
              <FiHome className="mr-3" />
              Home
            </p>
            <p
              href="/profile"
              className="flex items-center px-4 w-[100%]  py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FiUser className="mr-3" />
              Profile
            </p>
            <p
              href="/settings"
              className="flex items-center px-4 w-[100%]  py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FiSettings className="mr-3" />
              Settings
            </p>
          
            <p
               onClick={logout}
              className="flex items-center w-[100%]  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              
              <FiLogOut className="mr-3" />
              Logout
            </p>
          </div>
              </div> :null

            }
            </>
           }
           
           
            <FaShoppingCart className="text-gray-700 relative hover:text-blue-600 text-xl cursor-pointer" onClick={()=> Nav("/cartPage")} />
        
              
              <div className="  right-[40px] md:right-[22px] absolute flex items-center justify-center text-[15px] text-[white] top-[11px] h-[20px] w-[20px] rounded-[100%] bg-[red] "> {cartItems.length} </div> 
           
              
            {/* Hamburger Menu */}
            <FaBars
              className="text-gray-700 md:hidden text-xl cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <div className="text-2xl font-bold text-gray-800">Exclusive</div>
          <FaTimes
            className="text-gray-700 text-xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
        <p  onClick={
            () => Nav("/")
          }  className="hover:text-blue-600">
            Home
          </p>
          <p onClick={
            () => Nav("/contact")
          }  className="hover:text-blue-600">
            Contact
          </p>
          <a onClick={
            () => Nav("/aboutus")
          }  className="hover:text-blue-600">
            About
          </a>
          <a href="/signup" className="hover:text-blue-600">
          
          </a>
        </nav>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Header;
