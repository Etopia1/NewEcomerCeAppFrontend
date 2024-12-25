// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useSelector } from 'react-redux';

// // const OrderConfirmation = () => {
// //   // Define individual state for each input
// //   const [customerFirstName, setCustomerFirstName] = useState('');
// //   const [customerLastName, setCustomerLastName] = useState('');
// //   const [customerAddress, setCustomerAddress] = useState('');
// //   const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
// //   const [city, setCity] = useState('');
// //   const [country, setCountry] = useState('Nigeria');
// //   const [cartItems, setCartItems] = useState([]);
// //   const [totalPrice, setTotalPrice] = useState(0);
// //   const [loading, setLoading] = useState(false);
// //   const [orderResponse, setOrderResponse] = useState(null);
// //   const [error, setError] = useState(null);
  // const token = useSelector((state) => state.token);

// //   // Fetch cart items on component mount
  // useEffect(() => {
  //   setLoading(true);

  //   axios
  //     .get("http://localhost:1900/api/v1/viewcart", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       setCartItems(response.data.data.data.items);
  //       setTotalPrice(response.data.data.data.totalPrice);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError("Failed to fetch cart items.");
  //       setLoading(false);
  //     });
  // }, [token]);

// //   // Handle form input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === "customerFirstName") setCustomerFirstName(value);
// //     if (name === "customerLastName") setCustomerLastName(value);
// //     if (name === "customerAddress") setCustomerAddress(value);
// //     if (name === "customerPhoneNumber") setCustomerPhoneNumber(value);
// //     if (name === "city") setCity(value);
// //     if (name === "country") setCountry(value);
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await axios.post(
// //         'http://localhost:5000/api/v1/confirmOrder',
// //         {
// //           customerFirstName,
// //           customerLastName,
// //           customerAddress,
// //           customerPhoneNumber,
// //           city,
// //           country,
// //         },
// //         {
// //           headers: {
// //             'Content-Type': 'application/json',
// //             Authorization: `Bearer ${localStorage.getItem('token')}`,
// //           },
// //         }
// //       );

// //       setOrderResponse(response.data);
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Something went wrong');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
// //       <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
// //         {/* Left Column (Order Form) */}
// //         <div className="w-1/2 pr-4">
// //           <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Confirm Your Order</h1>

// //           {error && <div className="text-red-500 text-center mb-4">{error}</div>}

// //           {/* Order Form */}
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             {/* First Name */}
// //             <div className="flex flex-col">
// //               <label htmlFor="customerFirstName" className="text-gray-600 mb-2">First Name</label>
// //               <input
// //                 type="text"
// //                 name="customerFirstName"
// //                 id="customerFirstName"
// //                 value={customerFirstName}
// //                 onChange={handleChange}
// //                 className="p-3 border rounded-lg border-gray-300"
// //                 required
// //               />
// //             </div>

// //             {/* Last Name */}
// //             <div className="flex flex-col">
// //               <label htmlFor="customerLastName" className="text-gray-600 mb-2">Last Name</label>
// //               <input
// //                 type="text"
// //                 name="customerLastName"
// //                 id="customerLastName"
// //                 value={customerLastName}
// //                 onChange={handleChange}
// //                 className="p-3 border rounded-lg border-gray-300"
// //                 required
// //               />
// //             </div>

// //             {/* Address */}
// //             <div className="flex flex-col">
// //               <label htmlFor="customerAddress" className="text-gray-600 mb-2">Address</label>
// //               <input
// //                 type="text"
// //                 name="customerAddress"
// //                 id="customerAddress"
// //                 value={customerAddress}
// //                 onChange={handleChange}
// //                 className="p-3 border rounded-lg border-gray-300"
// //                 required
// //               />
// //             </div>

// //             {/* Phone Number */}
// //             <div className="flex flex-col">
// //               <label htmlFor="customerPhoneNumber" className="text-gray-600 mb-2">Phone Number</label>
// //               <input
// //                 type="text"
// //                 name="customerPhoneNumber"
// //                 id="customerPhoneNumber"
// //                 value={customerPhoneNumber}
// //                 onChange={handleChange}
// //                 className="p-3 border rounded-lg border-gray-300"
// //                 required
// //               />
// //             </div>

// //             {/* City */}
// //             <div className="flex flex-col">
// //               <label htmlFor="city" className="text-gray-600 mb-2">City</label>
// //               <input
// //                 type="text"
// //                 name="city"
// //                 id="city"
// //                 value={city}
// //                 onChange={handleChange}
// //                 className="p-3 border rounded-lg border-gray-300"
// //                 required
// //               />
// //             </div>

// //             {/* Country */}
// //             <div className="flex flex-col">
// //               <label htmlFor="country" className="text-gray-600 mb-2">Country</label>
// //               <input
// //                 type="text"
// //                 name="country"
// //                 id="country"
// //                 value={country}
// //                 onChange={handleChange}
// //                 className="p-3 border rounded-lg border-gray-300"
// //                 required
// //               />
// //             </div>

// //             {/* Submit Button */}
// //             <div className="flex justify-center">
// //               <button
// //                 type="submit"
// //                 className="bg-green-500 text-white py-3 px-8 rounded-md text-lg hover:bg-green-600 transition duration-300"
// //                 disabled={loading}
// //               >
// //                 {loading ? 'Processing...' : 'Confirm Order'}
// //               </button>
// //             </div>
// //           </form>

// //           {/* Show Order Response */}
// //           {orderResponse && (
// //             <div className="mt-8 bg-green-100 p-6 rounded-md">
// //               <h3 className="text-2xl font-semibold text-gray-800">Order Confirmed</h3>
// //               <p className="text-lg text-gray-700 mt-2">Your order has been placed successfully!</p>
// //               <p className="mt-4"><strong>Order ID:</strong> {orderResponse.order._id}</p>
// //               <p className="mt-2"><strong>Total Amount:</strong> {orderResponse.order.totalAmount}</p>
// //               <p className="mt-2"><strong>Status:</strong> {orderResponse.order.orderStatus}</p>
// //             </div>
// //           )}
// //         </div>

// //         {/* Right Column (Cart Items) */}
// //         <div className="w-1/2 pl-4">
// //           <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Cart</h2>
// //           {cartItems.length > 0 ? (
// //             <div className="space-y-4">
// //               {cartItems.map((item) => (
// //                 <div key={item.productId} className="flex justify-between border-b pb-2">
// //                   <span>{item.productName}</span>
// //                   <span>{item.quantity} x {item.price}</span>
// //                 </div>
// //               ))}
// //               <div className="flex justify-between font-semibold mt-4">
// //                 <span>Total</span>
// //                 <span>{totalPrice}</span>
// //               </div>
// //             </div>
// //           ) : (
// //             <div>No items in the cart</div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderConfirmation;

// import React, { useState } from "react";

// const OrderConfirmation = () => {
//   const [billingDetails, setBillingDetails] = useState({
//     firstName: "",
//     companyName: "",
//     streetAddress: "",
//     apartment: "",
//     city: "",
//     phone: "",
//     email: "",
//   });

//   const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery"); // Default payment method
//   const [cartItems] = useState([
//     { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "https://via.placeholder.com/50" },
//     { id: 2, name: "Hi Gamepad", price: 100, quantity: 2, image: "https://via.placeholder.com/50" },
//   ]);

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const totalPrice = subtotal;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBillingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handlePlaceOrder = async () => {
//     if (paymentMethod === "Bank") {
//       payKorapay(); // Call Korapay integration
//     } else {
//       // Handle Cash on Delivery
//       try {
//         const response = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             billingDetails,
//             cartItems,
//             totalPrice,
//             paymentMethod: "Cash on Delivery",
//           }),
//         });
//         const data = await response.json();
//         if (data.success) {
//           alert("Order placed successfully!");
//         } else {
//           alert("Order failed. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error placing order:", error);
//       }
//     }
//   };

//   const payKorapay = () => {
//     window.Korapay.initialize({
//       key: "pk_test_htjJVR9pkM4NVDhx39vB8meFVyYJzxvP345Vsrpk",
//       reference: `004${Date.now()}`,
//       amount: totalPrice,
//       currency: "NGN",
//       customer: {
//         name: "etopia",
//         email: "jolaetopia@gmail.com",
//       },
//       onSuccess: async (response) => {
//         console.log("Payment Successful", response);
//         // Post payment details to the backend
//         try {
//           const res = await fetch("http://localhost:5000/api/orders", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               billingDetails,
//               cartItems,
//               totalPrice,
//               paymentMethod: "Bank Transfer",
//               paymentDetails: response,
//             }),
//           });
//           const data = await res.json();
//           if (data.success) {
//             alert("Order placed successfully!");
//           } else {
//             alert("Order failed. Please try again.");
//           }
//         } catch (error) {
//           console.error("Error saving order:", error);
//         }
//       },
//       onFailure: (response) => {
//         console.error("Payment Failed", response);
//       },
//     });
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col items-center">
//       <div className="w-full max-w-3xl bg-white p-6 rounded-md shadow-md">
//         <h1 className="text-2xl font-bold mb-6">Checkout</h1>

//         {/* Billing Details Form */}
//         <div className="mb-6">
//           <h2 className="text-lg font-bold mb-4">Billing Details</h2>
//           <div className="grid grid-cols-1 gap-4">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               className="border border-gray-300 rounded-md p-3"
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="streetAddress"
//               placeholder="Street Address"
//               className="border border-gray-300 rounded-md p-3"
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="city"
//               placeholder="Town/City"
//               className="border border-gray-300 rounded-md p-3"
//               onChange={handleInputChange}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               className="border border-gray-300 rounded-md p-3"
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="mb-6">
//           <h2 className="text-lg font-bold mb-4">Order Summary</h2>
//           <div>
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex justify-between items-center mb-4">
//                 <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
//                 <span className="flex-1 ml-4">{item.name}</span>
//                 <span className="font-bold">${item.price * item.quantity}</span>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-between font-bold text-lg">
//             <span>Total:</span>
//             <span>${totalPrice}</span>
//           </div>
//         </div>

//         {/* Payment Method */}
//         <div className="mb-6">
//           <h2 className="text-lg font-bold mb-4">Payment Method</h2>
//           <div className="space-y-2">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Cash on Delivery"
//                 checked={paymentMethod === "Cash on Delivery"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="mr-2"
//               />
//               Cash on Delivery
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Bank"
//                 checked={paymentMethod === "Bank"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="mr-2"
//               />
//               Pay with Bank (Korapay)
//             </label>
//           </div>
//         </div>

//         {/* Place Order Button */}
//         <button
//           onClick={handlePlaceOrder}
//           className="w-full bg-blue-600 text-white py-3 rounded-md font-bold"
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmation;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../MarchantDashboard/Header/Header";
import { useNavigate } from "react-router-dom";
 

const OrderConfirmation = () => {
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [paymentDetails, setPaymentDetails] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const email = useSelector((state) => state.userData.email);
  const username = useSelector((state) => state.userData.fullName);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzY1OGUzNTY2NTM0NjlmZTRhNzM3MzEiLCJlbWFpbCI6ImpvbGFldG9waWE4MUBnbWFpbC5jb20iLCJpYXQiOjE3MzUwMzIwNzMsImV4cCI6MTczNTYzNjg3M30.wD5FM53fk6mSQQG2kMyhLmlmi313jzDa9HlqEcy9eLU"
  const [totalPrice, setTotalPrice] = useState(0);
  const token = useSelector((state) => state.token);
  // const [cartItems] = useState([
  //   { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "https://via.placeholder.com/50" },
  //   { id: 2, name: "Hi Gamepad", price: 100, quantity: 2, image: "https://via.placeholder.com/50" },
  // ]);
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // const totalPrice = subtotal + 1050; // Including delivery charge
  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:1900/api/v1/viewcart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCartItems(response.data.data.data.items);
        setTotalPrice(response.data.data.data.totalPrice);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to fetch cart items.");
        setLoading(false);
      });
  }, [token]);
  
  const confirmOrder = async () => {
    const orderDetails = {
        customerFirstName: 'John',
        customerLastName: 'Doe',
        customerAddress: '123 Main Street',
        customerPhoneNumber: '123-456-7890',
        city: 'New York',
        country: 'USA',
        paymentDetails: {
            orderId: '12345',  // This should be dynamically created or fetched
            totalAmount: 1200, // Example: amount from your cart
        },
        paymentMethod: 'Credit Card',  // Example payment method
    };

    // Assuming the JWT is stored in localStorage

    try {
        const response = await fetch('http://localhost:1900//api/confirm-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Send the JWT token
            },
            body: JSON.stringify(orderDetails),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            alert(errorData.message);  // Show error message to user
            return;
        }

        const data = await response.json();
        console.log('Order placed successfully:', data);

        // Show success message or redirect the user
        alert('Order placed successfully!');
        // Optionally, you can redirect the user to a confirmation page
      

    } catch (error) {
        console.error('Network or server error:', error);
        alert('An error occurred while placing the order.');
    }
};

const handlePlaceOrder = async () => {
  const orderData = {
    customerFirstName,
    customerLastName,
    customerAddress,
    customerPhoneNumber,
    city,
    country,
    paymentDetails,
    paymentMethod,
    cartItems,
    totalPrice,
  };

  try {
    if (paymentMethod === "Bank") {
      await payKorapay(orderData); // Await if you're handling the payment asynchronously
    } else {
      const response = await axios.post("http://localhost:1900/api/v1/confirm-order", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Order placed successfully!");
      setLoading(false)
      console.log(response.data);
    }
  } catch (error) {
    console.error("Order failed:", error);
    setLoading(false)
    alert("Order failed. Please try again.");
  }
};

// The payment function for Korapay integration
const payKorapay = async (orderData) => {
  try {
    window.Korapay.initialize({
      key: "pk_test_htjJVR9pkM4NVDhx39vB8meFVyYJzxvP345Vsrpk",
      reference: `004${Date.now()}`,
      amount: totalPrice + 1051,
      currency: "NGN",
      customer: {
        name: username,
        email: email,
      },
      onSuccess: async (response) => {
        console.log("Payment Successful", response);

        // Explicit structure for the payment details
        const paymentDetails = {
          reference: response.reference,
          amount: response.amount,
          transactionDate: response.transaction_date,
          status: response.status,
        };

        try {
          // Send order data to the backend with payment details
          const orderResponse = await axios.post(
            "http://localhost:1900/api/v1/confirm-order",
            {
              customerFirstName,
              customerLastName,
              customerAddress,
              customerPhoneNumber,
              city,
              country,
              paymentMethod,
              totalPrice,
              cartItems,
              paymentDetails, // Include only the payment details object here
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          alert("Order placed successfully!");
          console.log(orderResponse.data);
        } catch (error) {
          console.error("Order failed:", error);
          alert("Order failed. Please try again.");
        }
      },
      onFailure: (response) => {
        console.error("Payment Failed", response);
        alert("Payment failed. Please try again.");
      },
    });
  } catch (error) {
    console.error("Payment initialization failed:", error);
    alert("An error occurred during payment initialization. Please try again.");
  }
};

  
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Top Bar */}

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500">
            Home / My Account / <span className="text-black font-bold">Checkout</span>
          </p>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Billing Details */}
          <div className="flex-1 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Billing Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Customer First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  // value={billingDetails.firstName}
                  onChange={(e)=> setCustomerFirstName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Customer Last Name*</label>
                <input
                  type="text"
                  name="companyName"
                  // value={billingDetails.companyName}
                  onChange={(e)=> setCustomerLastName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Customer Address*</label>
                <input
                  type="text"
                  name="streetAddress"
                  // value={billingDetails.streetAddress}
                  onChange={(e)=> setCustomerAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                 Customer  Phone Number
                </label>
                <input
                  type="number"
                  name="apartment"
                  // value={billingDetails.apartment}
                  onChange={(e)=> setCustomerPhoneNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City*</label>
                <input
                  type="text"
                  name="city"
                  // value={billingDetails.city}
                  onChange={(e)=> setCity(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country*</label>
                <input
                  type="text"
                  name="phone"
                  // value={billingDetails.phone}
                  onChange={(e)=> setCountry(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
             
              <div className="flex items-center">
                <input type="checkbox" id="saveInfo" className="mr-2" />
                <label htmlFor="saveInfo" className="text-sm text-gray-600">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Your Order</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.productId} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span >{item.productName} x {item.quantity}</span>
                  </div>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between items-center border-t pt-4">
                <span>Subtotal</span>
                <span className="font-semibold">{subtotal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between items-center border-t pt-4 text-lg font-bold">
                <span>Total</span>
                <span> $ {subtotal}</span>
              </div>
              /         {/* Payment Method */}
         <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Payment Method</h2>
           <div className="space-y-2">
            <label className="flex items-center">
             <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2 text-[blue] "
              />
              Cash on Delivery
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="Bank"
                checked={paymentMethod === "Bank"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Pay with Bank 
            </label>
          </div>
        </div>

              <div className="flex items-center gap-4 mt-4">
                <button
                  className="w-full bg-red-500 text-white py-3 rounded-md"
                  onClick={handlePlaceOrder}
                  disabled={loading} 
                >
                  {loading ? "Processing..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 flex flex-wrap justify-between text-sm">
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h3 className="font-bold">Exclusive</h3>
            <p>Get 10% off your first order</p>
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h3 className="font-bold">Support</h3>
            <p>exclusive@gmail.com</p>
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h3 className="font-bold">Account</h3>
            <p>Login / Register</p>
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h3 className="font-bold">Quick Link</h3>
            <p>Terms of Use</p>
          </div>
          <div className="w-full md:w-1/5">
            <h3 className="font-bold">Download App</h3>
            <img src="https://via.placeholder.com/80" alt="QR Code" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderConfirmation
