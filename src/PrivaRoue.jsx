import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
// import TopProduct from './components/TopProducts'
import TopProduct from './components/TopProducts/TopProducts'
import CategoryPage from './components/Category/CategoryPage'
import "aos/dist/aos.css";
import Header from './MarchantDashboard/Pages/HomePage/Header';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Subscribe from './components/Subscribe/Subscribe';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import HeroPage2 from './MarchantDashboard/Pages/HomePage/HeroPage2';
import HomePage from './MarchantDashboard/Pages/HomePage/HomePage';

const PrivaRoue = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Header/>
      {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
      <HeroPage2/>
      <HomePage/>
      {/* <CategoryPage/>
      <TopProduct/>
      <Products/> */}
      <Subscribe/>
      <Banner/>
      <Testimonials/>
      <Footer/>
      
    </div>
  )
}

export default PrivaRoue