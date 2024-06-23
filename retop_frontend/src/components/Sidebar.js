import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ links }) => {
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

  const handleLinkClick = (path) => {
    navigate(path);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };



  return (
    <div className="bg-gray-800 text-gray-300 h-screen w-64 py-8 px-4 grid grid-cols-1">
      <div className="space-y-4">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={() => handleLinkClick(link.path)}
            className="block py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <button
        onClick={handleLogout}
        className="mt-auto bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg block text-center"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
