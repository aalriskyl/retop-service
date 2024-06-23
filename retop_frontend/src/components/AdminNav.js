import React, { useState, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import Retop from "../components/assets/img/retop.png";

const AdminNav = () => {
  const [nav, setNav] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check for token in localStorage
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleNav = () => {
    setNav(!nav);
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  const handleCloseDropdown = () => {
    setNav(false); // Close hamburger menu
    setDropdownVisible(false); // Close dropdown
  };

  return (
    <nav className="flex w-full justify-between items-center mx-auto h-24 px-10 py-4 text-black bg-white shadow-md">
      <div className="flex items-center cursor-pointer">
        <img src={Retop} className="w-12 h-auto mr-4" alt="logo" />
        <h1 className="text-xl font-bold cursor-pointer">ReTop</h1>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="/addlocation" className="text-lg hover:text-blue-500">Tambah Lokasi</a>
        <a href="/addblog" className="text-lg hover:text-blue-500">Tambah Blog</a>
      </div>
      <div className="md:hidden">
        <button onClick={handleNav}>
          {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </button>
      </div>
      {dropdownVisible && (
        <div className="absolute top-20 right-0 w-full bg-white shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="/" className="text-lg hover:text-blue-500">Tambah Lokasi</a></li>
            <li><a href="/" className="text-lg hover:text-blue-500">Tambah Blog</a></li>
            <div className="flex flex-col items-center space-y-2">
              <button className="text-gray-600 hover:text-blue-500 text-lg">Search</button>
              <button className="text-gray-600 hover:text-blue-500 text-lg">Account</button>
            </div>
            <div className="flex justify-center space-x-4">
              <FaFacebook className="text-gray-600 hover:text-blue-500 text-lg" />
              <FaTwitter className="text-gray-600 hover:text-blue-500 text-lg" />
              <FaYoutube className="text-gray-600 hover:text-blue-500 text-lg" />
              <FaPinterest className="text-gray-600 hover:text-blue-500 text-lg" />
            </div>
          </ul>
        </div>
      )}
      {dropdownVisible && (
        <div onClick={handleCloseDropdown} className="fixed inset-0 bg-black opacity-30 z-40"></div>
      )}
    </nav>
  );
};

export default AdminNav;
