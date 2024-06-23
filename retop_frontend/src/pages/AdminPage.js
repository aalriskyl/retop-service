import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminPage = () => {
  const [token, setToken] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check token
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    } else {
      setShowModal(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000); // Redirect after 3 seconds
    }
  }, [navigate]);

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Not Authorized</h2>
            <p className="mb-4">You are not authorized. Please log in as admin!</p>
          </div>
        </div>
      )}
      {token && (
        <div>
          <Navbar />
          <div className="max-w-6xl mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/addblog" className="bg-blue-500 hover:bg-blue-500 text-white py-4 px-6 rounded-lg block text-center">
                Add Blog
              </Link>
              <Link to="/addlocation" className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg block text-center">
                Add Location
              </Link>
              {/* You can add more links/buttons here for additional functionalities */}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
