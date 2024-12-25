import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import CategoryPage from './components/Category/CategoryPage'
import "aos/dist/aos.css";
import Header from './MarchantDashboard/Header/Header';

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
      <Hero handleOrderPopup={handleOrderPopup} />
      <CategoryPage/>
    </div>
  )
}

export default PrivaRoue