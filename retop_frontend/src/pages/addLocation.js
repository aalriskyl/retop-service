import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNav from '../components/AdminNav';

const AddLocation = () => {
  const [token, setToken] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [tokoData, setTokoData] = useState({
    name: '',
    phone: '+62',
    image: null,
    address: '',
    latitude: '',
    longitude: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handlePhoneChange = (e) => {
    let value = e.target.value;
    
    // Ensure the value starts with +62
    if (!value.startsWith('+62')) {
      value = '+62' + value.replace(/^\+?62/, '');
    }
    setTokoData({ ...tokoData, phone: value });
  };

  useEffect(() => {
    // Check token
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    } else {
      setShowModal(true);
      setTimeout(() => {
        navigate('/');
      }, 3000); // Redirect after 3 seconds
    }
  }, [navigate]);


  
  const handleImageChange = (e) => {
    setTokoData({ ...tokoData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', tokoData.name);
    formData.append('phone', tokoData.phone);
    formData.append('image', tokoData.image);
    formData.append('address', tokoData.address);
    formData.append('latitude', tokoData.latitude);
    formData.append('longitude', tokoData.longitude);
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
  
    try {
      const response = await axios.post('http://localhost:3001/profiles', formData, config);
      console.log('Location added:', response.data);
      setTokoData({
        name: '',
        phone: '',
        image: null,
        address: '',
        latitude: '',
        longitude: '',
      });
      setError(null);
    } catch (error) {
      console.error('Error adding location:', error.response?.data || error.message);
      setError('Failed to add location. Please try again.');
    }
  };
  
  

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Not Authorized</h2>
            <p className="mb-4">You are not an admin. You will be redirected to the home page.</p>
          </div>
        </div>
      )}
      {token && (
        <div>
          <AdminNav />
          <div className="max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Add Location</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={tokoData.name}
                  onChange={(e) => setTokoData({ ...tokoData, name: e.target.value })}
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  value={tokoData.phone}
                  onChange={(e) => setTokoData({ ...tokoData, phone: e.target.value })}
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image:
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  accept="image/*" // Accept only image files
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  value={tokoData.address}
                  onChange={(e) => setTokoData({ ...tokoData, address: e.target.value })}
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">
                  Latitude:
                </label>
                <input
                  type="text"
                  id="latitude"
                  value={tokoData.latitude}
                  onChange={(e) => setTokoData({ ...tokoData, latitude: e.target.value })}
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">
                  Longitude:
                </label>
                <input
                  type="text"
                  id="longitude"
                  value={tokoData.longitude}
                  onChange={(e) => setTokoData({ ...tokoData, longitude: e.target.value })}
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Location
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddLocation;
