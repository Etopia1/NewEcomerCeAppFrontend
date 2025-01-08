import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

// const categories = [
//   "Women's Fashion",
//   "Men's Fashion",
//   "Electronics",
//   "Home & Lifestyle",
//   "Medicine",
//   "Sports & Outdoor",
//   "Baby's & Toys",
//   "Groceries & Pets",
//   "Health & Beauty",
// ];

const carouselData = [
  {
    imgSrc: "https://i.pinimg.com/236x/9a/58/60/9a58604f2f408c9ce0623d6fd0a31e2a.jpg",
    title: "iPhone 14 Series",
    discount: "Up to 10% off Voucher",
    link: "/shop-now",
  },
  {
    imgSrc: "https://img.freepik.com/free-photo/child-with-jeans-white-sneakers_53876-97726.jpg?semt=ais_hybrid",
    title: "Summer Sale",
    discount: "Up to 50% off",
    link: "/shop-now",
  },
  {
    imgSrc: "https://img.freepik.com/free-photo/side-view-rich-woman-talking-phone_23-2149684323.jpg?semt=ais_hybrid",
    title: "Exclusive Offers",
    discount: "Save Big on Electronics",
    link: "/shop-now",
  },
  {
    imgSrc: "https://img.freepik.com/premium-photo/perfume-bottle-isolated-white-background_127657-23966.jpg?semt=ais_hybrid",
    title: "Exclusive Offers",
    discount: "Save Big on Electronics",
    link: "/shop-now",
  },
];

const HeroPage2 = () => {
     const [categories, setcategories]=useState([])
  
  const getAllcategory = () =>{
    axios.get('http://localhost:1900/api/v1/category')
    .then((res)=>{
        console.log(res.data.data)
        setcategories(res.data.data)
    })
    .catch((err)=>{
        // console.log(err)
    })
  }
  useEffect(()=>(
    getAllcategory()
  ))
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    
  };

  return (
    <div className="flex w-[99%] flex-col md:flex-row bg-gray-100 p-4 gap-4">
      {/* Categories Section */}
      <div className="w-full md:w-1/4">
        <ul className="bg-white shadow rounded-lg p-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="py-2 px-4 hover:bg-gray-200 rounded-lg cursor-pointer font-medium text-gray-800"
            >
              {category.categoryName}
            </li>
          ))}
        </ul>
      </div>

      {/* Carousel Section */}
      <div className="w-[100%] md:w-3/4">
        <Slider {...settings}>
          {carouselData.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full  md:h-96 object-cover [100%] rounded-lg"
              />
              <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 p-4 rounded-lg">
                <h2 className="text-2xl md:text-4xl font-bold">{item.title}</h2>
                <p className="text-lg md:text-xl mt-2">{item.discount}</p>
                <a
                  href={item.link}
                  className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Shop Now →
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroPage2;
