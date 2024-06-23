import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AdminPage = () => {
  const [token, setToken] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check token
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      setShowModal(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000); // Redirect after 3 seconds
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  const sidebarLinks = [
    { label: 'Add Blog', path: '/addblog' },
    { label: 'Add Location', path: '/addlocation' },
    // Add more sidebar links/buttons here as needed
  ];

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
        <div className="flex">
          {/* Sidebar */}
          <Sidebar links={sidebarLinks} handleLogout={handleLogout} />
          {/* Main Content */}
          <div className="flex-1 max-w-6xl mx-auto mt-8 px-4">
            <h2 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h2>
            {/* Main content of the dashboard can go here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
