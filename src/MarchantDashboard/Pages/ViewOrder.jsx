import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; 
import { useSelector } from "react-redux";

const ViewOrder = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state)=> state.token)

  useEffect(() => {
    const getOrderDetails = async () => {
      try {
        
        const response = await axios.get(`http://localhost:1900/api/v1/getOrderDetails/${orderId}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log(response)
        setOrder(response.data.data); 
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error)

      }
    };

    getOrderDetails();
  }, [orderId]); // Re-fetch if orderId changes
  const handledelete  = async ()=>{
    try {
        
      const response = await axios.delete(`http://localhost:1900/api/v1/userdeleteOrder/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      console.log(response)
      setOrder(response.data.data); // Assuming response has a 'data' field with the order details
      setLoading(false);
    } catch (error) {
      // setError("Error fetching order details.");
      setLoading(false);
      console.log(error)

    }
  }
    

  // Format date to a more user-friendly format
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading order details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!order) {
    return <div className="text-center text-gray-500">Order not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">Order Details</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Order #{order._id}</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Order Date:</span>
            <span>{formatDate(order.orderDate)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Customer:</span>
            <span>{order.customerFirstName} {order.customerLastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Customer Address:</span>
            <span>{order.customerAddress}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Payment Status:</span>
            <span className="text-green-500">{order.paymentStatus}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Order Status:</span>
            <span className="text-blue-500">{order.orderStatus}</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mt-6">Items</h3>
          {order.items.map((item) => (
            <div key={item._id} className="flex justify-between border-t py-3">
              <div>
                <img src={item.productImage} alt={item.productName} className="w-16 h-16 object-cover" />
              </div>
              <div>
                <p className="font-medium">{item.productName}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div>
                <p className="font-medium">₦{item.price}</p>
              </div>
              <button onClick={handledelete} >Delete Order</button>
            </div>

          ))}

          <div className="flex justify-between mt-6 font-bold text-lg">
            <span>Total Amount:</span>
            <span>₦{order.totalAmount.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
