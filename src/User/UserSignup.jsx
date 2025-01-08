import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const UserSignup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !password  || !address || !phoneNumber ) {
      setError('Please fill in all the fields and upload a profile image.');
      return;
    }

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('address', address);
    formData.append('phoneNumber', phoneNumber);
    formData.append('profileImage', profileImage);

    try {
      const response = await axios.post('https://newecomerceappbackend.onrender.com/api/v1/user-signUp', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSuccessMessage('Signup successful. Please check your email for verification.');
      setError('');
      console.log(response.data.token)
      navigate(`/userverifyone/${response.data.token}`);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Something went wrong. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
      <div className="bg-white h-[90%] p-8 rounded-lg shadow-md w-[90%] max-w-lg">
        <div className="flex justify-center mb-6">
          <label htmlFor="profileImage" className="cursor-pointer">
            <div
              className={`w-24 h-24 ${imagePreview ? 'border-2 border-indigo-600' : 'border-2 border-gray-300'} rounded-full overflow-hidden`}
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Profile Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-300 text-center flex items-center justify-center text-gray-500">
                  Click to Upload
                </div>
              )}
            </div>
            <input
              type="file"
              id="profileImage"
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}

        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">User Sign Up</h2>

        <div  className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="example@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
              required
            />
          </div>

         

          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Address   </label>
            <input
              type="text"
              id="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Address "
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="(123) 456-7890"
              required
            />
          </div>

          <button
          onClick={handleSubmit}
          disabled={loading || !email}
          className={`w-full py-3 px-6 rounded text-white font-medium ${
            loading
              ? 'bg-gray-500'
              : 'bg-indigo-600 hover:bg-indigo-700 focus:ring focus:ring-indigo-300'
          }`}
        >
          {loading ? <BeatLoader color="#ffffff" size={12} /> : 'Sign Up'}
        </button>
        </div>

      
        <div className="mt-2 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/Userlogin" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
