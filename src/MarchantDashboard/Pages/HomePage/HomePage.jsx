// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const HomePage = () => {

//     const [topProduCt, setTopProducts]=useState([])
//    const [categories, setcategories]=useState([])
    
  
//     const GetTop =() => {
//       axios.get("http://localhost:1900/api/v1/topproducts")
//       .then((res)=>{
//         console.log(res)
//         setTopProducts(res.data.data)
//       })
//       .catch((err)=>{
//         console.log(err)
//       })
//     }
//     useEffect(()=>(
//       GetTop()
//     ))
//   const flashSales = [
//     { id: 1, name: "Gaming Controller", price: "$49.99", image: "#" },
//     { id: 2, name: "Headphones", price: "$29.99", image: "#" },
//     { id: 3, name: "USB Drive", price: "$19.99", image: "#" },
//     { id: 4, name: "Mini Desk Chair", price: "$89.99", image: "#" },
//   ];

//   // const categories = [
//   //   { id: 1, name: "Clothing", icon: "👕" },
//   //   { id: 2, name: "Electronics", icon: "📱" },
//   //   { id: 3, name: "Furniture", icon: "🛋️" },
//   //   { id: 4, name: "Books", icon: "📚" },
//   // ];

//   const bestSelling = [
//     { id: 1, name: "Red Dress", price: "$39.99", image: "#" },
//     { id: 2, name: "Leather Handbag", price: "$89.99", image: "#" },
//     { id: 3, name: "Wooden Chair", price: "$149.99", image: "#" },
//   ];

//   const exploreProducts = [
//     { id: 1, name: "Smartphone", price: "$799.99", image: "#" },
//     { id: 2, name: "Laptop", price: "$999.99", image: "#" },
//     { id: 3, name: "Gaming Console", price: "$499.99", image: "#" },
//     { id: 4, name: "Camera", price: "$599.99", image: "#" },
//   ];

//   const newArrivals = [
//     { id: 1, name: "PlayStation 5", price: "$499.99", image: "#" },
//     { id: 2, name: "Wireless Earbuds", price: "$149.99", image: "#" },
//   ];
//   const getAllcategory = () =>{
//     axios.get('http://localhost:1900/api/v1/category')
//     .then((res)=>{
//         console.log(res.data.data)
//         setcategories(res.data.data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//   }

//    useEffect(()=>(
//     getAllcategory()
//    ))

//   return (
//     <div className="bg-gray-100 text-gray-800 max-h-max font-sans">
//       {/* Flash Sales */}
//       <section className="py-8 px-4">
//         <h2 className="text-2xl font-bold mb-4">Flash Sales</h2>
//         <div className="flex flex-wrap justify-between gap-4">
//           {flashSales.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[23%] transform transition-transform hover:scale-105 hover:shadow-lg"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-32 object-cover"
//               />
//               <h3 className="text-lg font-semibold mt-2 text-center">
//                 {item.name}
//               </h3>
//               <p className="text-red-500 font-bold mt-1">{item.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Browse by Category */}
//       <section className="py-4 px-9  ">
//         <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
//         <div className="flex flex-wrap justify-between h-[20vh] ">
//           {categories.map((category) => (
//             <div
//               key={category.id}
//               className="bg-white hover:bg-[pink] shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[23%] transform h-[20px]transition-transform hover:scale-105 hover:shadow-lg"
//             >
//               <img className="text-4xl  " src={category.categoryImage} />
//               <h3 className="text-lg font-semibold text-center">
//                 {category.categoryName}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Best Selling Products */}
//       <section className="py-8 px-4">
//         <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
//         <div className="flex flex-wrap justify-between gap-4">
//           {bestSelling.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[30%] transform transition-transform hover:scale-105 hover:shadow-lg"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-32 object-cover"
//               />
//               <h3 className="text-lg font-semibold mt-2 text-center">
//                 {item.name}
//               </h3>
//               <p className="text-red-500 font-bold mt-1">{item.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Explore Our Products */}
//       <section className="py-8 px-4">
//         <h2 className="text-2xl font-bold mb-4">Explore Our Products</h2>
//         <div className="flex flex-wrap justify-between gap-4">
//           {exploreProducts.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[23%] transform transition-transform hover:scale-105 hover:shadow-lg"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-32 object-cover"
//               />
//               <h3 className="text-lg font-semibold mt-2 text-center">
//                 {item.name}
//               </h3>
//               <p className="text-red-500 font-bold mt-1">{item.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* New Arrivals */}
//       <section className="py-8 px-4">
//         <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
//         <div className="flex flex-wrap justify-between gap-4">
//           {topProduCt.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[30%] transform transition-transform hover:scale-105 hover:shadow-lg"
//             >
//               <img
//                 src={item.productImage}
//                 alt={item.productName
//                 }
//                 className="w-full h-32 object-cover"
//               />
//               <h3 className="text-lg font-semibold mt-2 text-center">
//                 {item.productName
//                 }
//               </h3>
//               <p className="text-red-500 font-bold mt-1">${item.productPrice
//               }</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
      const [topProduCt, setTopProducts]=useState([])
   const [categories, setcategories]=useState([])
   const token = useSelector((state)=> state.token)
   const Nav = useNavigate()
    const getAllcategory = () =>{
    axios.get('http://localhost:1900/api/v1/category')
    .then((res)=>{
        // console.log(res.data.data)
        setcategories(res.data.data)
    })
    .catch((err)=>{
        // console.log(err)
    })
  }

   useEffect(()=>(
    getAllcategory()
   ))
       const GetTop =() => {
      axios.get("http://localhost:1900/api/v1/topproducts")
      .then((res)=>{
        // console.log(res)
        setTopProducts(res.data.data)
      })
      .catch((err)=>{
        // console.log(err)
      })
    }
    useEffect(()=>(
      GetTop()
    ))
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
  
    // Fetch all products from the API
    useEffect(() => {
      axios
        .get("http://localhost:1900/api/v1/allproducts")
        .then((response) => {
          const allProducts = response.data.data;
          // console.log(allProducts)
          setProducts(allProducts);
          setDisplayProducts(getRandomProducts(allProducts, 4));
          // console.log(displayProducts) // Initialize with 6 random products
        })
        .catch((error) => {
          // console.error("Error fetching products:", error);
        });
    }, []);
  
    // Randomly select products every 10 minutes
    useEffect(() => {
      const interval = setInterval(() => {
        setDisplayProducts(getRandomProducts(products, 4));
      }, 10 * 60 * 10); // 10 minutes in milliseconds
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, [products]);
  
    // Function to get random products
    const getRandomProducts = (allProducts, count) => {
      if (allProducts.length === 0) return [];
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
  

  // const categories = [
  //   { id: 1, name: "Clothing", icon: "👕" },
  //   { id: 2, name: "Electronics", icon: "📱" },
  //   { id: 3, name: "Furniture", icon: "🛋️" },
  //   { id: 4, name: "Books", icon: "📚" },
  // ];

  const addToCart = (productId, quantity) => {
  if(!token){
    Nav("/userlogin")
  }
    
  
    axios
      .post(
        "http://localhost:1900/api/v1/addtocart",
        { productId, quantity },
        {
          headers: {
            "Authorization": `Bearer ${token}`, // Send the token in the header
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        toast.success("Item added to cart!");
        console.log("Cart updated:", response.data);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Failed to add item to cart.");
        // console.log("Error adding to cart:", error);
      });
  };

  const bestSelling = [
    { id: 1, name: "Red Dress", price: "$39.99", image: "#" },
    { id: 2, name: "Leather Handbag", price: "$89.99", image: "#" },
    { id: 3, name: "Wooden Chair", price: "$149.99", image: "#" },
  ];

  const exploreProducts = [
    { id: 1, name: "Smartphone", price: "$799.99", image: "#" },
    { id: 2, name: "Laptop", price: "$999.99", image: "#" },
    { id: 3, name: "Gaming Console", price: "$499.99", image: "#" },
    { id: 4, name: "Camera", price: "$599.99", image: "#" },
  ];

  const newArrivals = [
    { id: 1, name: "PlayStation 5", price: "$499.99", image: "#" },
    { id: 2, name: "Wireless Earbuds", price: "$149.99", image: "#" },
  ];

  return (
    

<div className="bg-gray-100 text-gray-800 font-sans">
  {/* Flash Sales */}
  <section className="py-8 px-4">
    <h2 className="text-2xl font-bold mb-4">Flash Sales</h2>
    <div className="flex flex-wrap justify-between gap-4">
      {displayProducts.map((item) => (
        <div
          key={item._id}
          className="bg-white shadow rounded flex flex-col items-center w-full sm:w-[48%] md:w-[20%] transform transition-transform hover:scale-105 hover:shadow-lg"
          style={{ height: "60vh" }}
        >
          <img
            src={item.productImage}
            alt={item.productName}
            className="w-full rounded-t-[10px] max-h-[68%] h-[68%] object-cover"
          />
          <h3 className="text-lg font-semibold mt-2 text-center">
            {item.productName}
          </h3>
          <p className="text-red-500 font-bold mt-1">#{item.productPrice}</p>
          <div className="flex w-[100%] h-[30%] pl-[10px] items-center pr-[10px] justify-center gap-[30px] ">
            {/* Add to Cart Icon */}
            <div onClick={()=> addToCart(item._id, 1)}
            className="bg-[black] w-[60%] flex items-center justify-center h-[50%]   hover:bg-gray-300 cursor-pointer">
              <FaShoppingCart size={24} className="text-[white]" />
              
            </div>
            {/* View Details Icon */}
            <div onClick={() => Nav(`/productView/${item._id}`)} className=" bg-[#4593ec] w-[40%] flex items-center justify-center  h-[50%]   hover:bg-gray-300 cursor-pointer">
              <FaInfoCircle size={24} 
               onClick={() => Nav(`/productView/${item._id}`)}
              className="text-gray-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Browse by Category */}
  <section className="py-8 px-4">
    <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
    <div className="flex flex-wrap justify-between gap-4">
      {categories.map((category) => (
        <div
          key={category._id}
          onClick={()=> Nav(`/viewcategoryandProduct/${category._id}`)}
          className="bg-white hover:bg-[pink] shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[23%] transform transition-transform hover:scale-105 hover:shadow-lg"
          style={{ height: "200px" }}
        >
          <img
            className="h-[80%] w-[100%] object-contain"
            src={category.categoryImage}
          />
          <h3 className="text-lg font-semibold text-center">
            {category.categoryName}
          </h3>
        </div>
      ))}
    </div>
  </section>

  {/* Best Selling Products */}
  <section className="py-8 px-4">
    <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
    <div className="flex flex-wrap justify-between gap-4">
      {bestSelling.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[30%] transform transition-transform hover:scale-105 hover:shadow-lg"
          style={{ height: "250px" }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 object-cover"
          />
          <h3 className="text-lg font-semibold mt-2 text-center">
            {item.name}
          </h3>
          <p className="text-red-500 font-bold mt-1">{item.price}</p>
          <div className="flex gap-2 mt-2">
            <FaShoppingCart className="text-gray-600 hover:text-blue-500 cursor-pointer" title="Add to Cart" />
            <FaInfoCircle className="text-gray-600 hover:text-green-500 cursor-pointer" title="View Details" />
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Explore Our Products */}
  <section className="py-8 px-4">
    <h2 className="text-2xl font-bold mb-4">Explore Our Products</h2>
    <div className="flex flex-wrap justify-between gap-4">
      {exploreProducts.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[23%] transform transition-transform hover:scale-105 hover:shadow-lg"
          style={{ height: "250px" }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 object-cover"
          />
          <h3 className="text-lg font-semibold mt-2 text-center">
            {item.name}
          </h3>
          <p className="text-red-500 font-bold mt-1">{item.price}</p>
          <div className="flex gap-2 mt-2">
            <FaShoppingCart className="text-gray-600 hover:text-blue-500 cursor-pointer" title="Add to Cart" />
            <FaInfoCircle className="text-gray-600 hover:text-green-500 cursor-pointer" title="View Details" />
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* New Arrivals */}
  <section className="py-8 px-4">
    <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
    <div className="flex flex-wrap justify-between gap-4">
      {topProduCt.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow rounded flex flex-col items-center w-full sm:w-[48%] md:w-[20%] transform transition-transform hover:scale-105 hover:shadow-lg"
          style={{ height: "60vh" }}
        >
          <img
            src={item.productImage}
            alt={item.productName}
            className="w-full rounded-t-[10px] max-h-[68%] h-[68%] object-cover"
          />
          <h3 className="text-lg font-semibold mt-2 text-center">
            {item.productName}
          </h3>
          <p className="text-red-500 font-bold mt-1">#{item.productPrice}</p>
          <div className="flex w-[100%] h-[30%] pl-[10px] items-center pr-[10px] justify-center gap-[30px] ">
            {/* Add to Cart Icon */}
            <div className="bg-[black] w-[60%] flex items-center justify-center h-[50%]   hover:bg-gray-300 cursor-pointer">
              <FaShoppingCart size={24} className="text-[white]" />
            </div>
            {/* View Details Icon */}
            <div onClick={() => Nav(`/productView/${item._id}`)} className=" bg-[#4593ec] w-[40%] flex items-center justify-center  h-[50%]   hover:bg-gray-300 cursor-pointer">
              <FaInfoCircle size={24} 
               onClick={() => Nav(`/productView/${item._id}`)}
              className="text-gray-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>
//      <div className="bg-gray-100 text-gray-800 font-sans">
//   {/* Flash Sales */}
//   <section className="py-8 px-4">
//     <h2 className="text-2xl font-bold mb-4">Flash Sales</h2>
//     <div className="flex flex-wrap justify-between gap-4">
//       {displayProducts.map((item) => (
//         <div
//           key={item._id}
//           className="bg-white shadow rounded  flex flex-col items-center w-full sm:w-[48%] md:w-[20%] transform transition-transform hover:scale-105 hover:shadow-lg"
//           style={{ height: "63%" }}
//         >
//           <img
//             src={item.productImage}
//             alt={item.productName}
//             className="w-full rounded-t-[10px] h-[68%] object-cover"
//           />
//           <h3 className="text-lg font-semibold mt-2 text-center">
//             {item.productName}
//           </h3>
//           <p className="text-red-500 font-bold mt-1">${item.productPrice}</p>
//         </div>
//       ))}
//     </div>
//   </section>

//   {/* Browse by Category */}
//   <section className="py-8 px-4">
//     <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
//     <div className="flex flex-wrap justify-between gap-4">
//       {categories.map((category) => (
//         <div
//           key={category._id}
//           className="bg-white hover:bg-[pink] shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[23%] transform transition-transform hover:scale-105 hover:shadow-lg"
//           style={{ height: "200px" }}
//         >
//           <img className=" h-[80%] w-[100%] object-contain " src={category.categoryImage}/>
//           <h3 className="text-lg font-semibold text-center">
//             {category.categoryName}
//           </h3>
//         </div>
//       ))}
//     </div>
//   </section>

//   {/* Best Selling Products */}
//   <section className="py-8 px-4">
//     <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
//     <div className="flex flex-wrap justify-between gap-4">
//       {bestSelling.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[30%] transform transition-transform hover:scale-105 hover:shadow-lg"
//           style={{ height: "250px" }}
//         >
//           <img
//             src={item.image}
//             alt={item.name}
//             className="w-full h-32 object-cover"
//           />
//           <h3 className="text-lg font-semibold mt-2 text-center">
//             {item.name}
//           </h3>
//           <p className="text-red-500 font-bold mt-1">{item.price}</p>
//         </div>
//       ))}
//     </div>
//   </section>

//   {/* Explore Our Products */}
//   <section className="py-8 px-4">
//     <h2 className="text-2xl font-bold mb-4">Explore Our Products</h2>
//     <div className="flex flex-wrap justify-between gap-4">
//       {exploreProducts.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[23%] transform transition-transform hover:scale-105 hover:shadow-lg"
//           style={{ height: "250px" }}
//         >
//           <img
//             src={item.image}
//             alt={item.name}
//             className="w-full h-32 object-cover"
//           />
//           <h3 className="text-lg font-semibold mt-2 text-center">
//             {item.name}
//           </h3>
//           <p className="text-red-500 font-bold mt-1">{item.price}</p>
//         </div>
//       ))}
//     </div>
//   </section>

//   {/* New Arrivals */}
//   <section className="py-8 px-4">
//     <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
//     <div className="flex flex-wrap justify-between gap-4">
//       {topProduCt.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white shadow rounded p-4 flex flex-col items-center w-full sm:w-[48%] md:w-[30%] transform transition-transform hover:scale-105 hover:shadow-lg"
//           style={{ height: "250px" }}
//         >
//           <img
//             src={item.productImage}
//             alt={item.productName}
//             className="w-full h-[77%] object-contain"
//           />
//           <h3 className="text-lg font-semibold mt-2 text-center">
//             {item.productName}
//           </h3>
//           <p className="text-red-500 font-bold mt-1">${item.productPrice}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// </div>
);
};



export default HomePage;
