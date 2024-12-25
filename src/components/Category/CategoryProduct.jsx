import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { Toaster, toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const CategoryProducts = () => {
  const token = useSelector((state)=> state.token)

  const { id } = useParams(); // Get category ID from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(token)
  console.log(id);

  // Fetch products of the selected category
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:1900/api/v1/category/${id}`) // Use categoryId to fetch products
      .then((response) => {
        console.log(response.data.data.products);
        setProducts(response.data.data.products); // Set products to state
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, [id]);

  // Function to add a product to the cart
  const addToCart = (productId, quantity) => {
    // const token = localStorage.getItem("authToken"); // Retrieve the authentication token

    if (!token) {
      toast.error("You need to log in to add items to the cart.");
      return;
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
        console.log("Error adding to cart:", error);
      });
  };

  return (
    <div className="w-full h-screen bg-[red]-100 p-6">
      <h2 className="text-3xl font-bold mb-6">Products in this Category</h2>

      {/* Loading or Error Messages */}
      {loading ? (
        <div className="w-full flex justify-center">
          <BeatLoader color="#333" size={30} />
        </div>
      ) : error ? (
        <div className="w-full text-center text-red-500">{error}</div>
      ) : (
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product Cards */}
          {products.map((product) => (
            <div
              key={product._id}
              className="w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out"
            >
              <div className="h-40 bg-gray-200">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.productName}</h3>
                <p className="text-gray-500">{product.productDescription}</p>
                <p className="text-xl font-bold text-gray-700">${product.productPrice}</p>
                
                {/* Add to Cart Button */}
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => addToCart(product._id, 1)} // Add product with quantity 1
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Toaster /> {/* Toast notifications */}
    </div>
  );
};

export default CategoryProducts;
