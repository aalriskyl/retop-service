import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../components/AdminNav';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const AddBlog = () => {
  const [token, setToken] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [blogData, setBlogData] = useState({
    title: '',
    author: '',
    description: '',
    content: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
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

  const handleInputChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', blogData.title);
      formData.append('author', blogData.author);
      formData.append('description', blogData.description);
      formData.append('content', blogData.content);
      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      const response = await axios.post('http://localhost:3001/api/blogs', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Blog added successfully:', response.data);
      alert('Success');

      setBlogData({
        title: '',
        author: '',
        description: '',
        content: ''
      });
      setSelectedImage(null);
      setImagePreview('');

      alert('Blog added successfully!');
    } catch (error) {
      console.error('Error adding blog:', error);
      alert('Failed to add blog. Please try again.');
    }
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
            <p className="mb-4">You are not an admin. You will be redirected to the home page.</p>
          </div>
        </div>
      )}
      {token && (
        <div className="flex"> {/* Use flex container to align Sidebar and content */}
          <Sidebar links={sidebarLinks} />

          <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Add Blog</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={blogData.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={blogData.author}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="description"
                  placeholder="Description"
                  rows="3"
                  value={blogData.description}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              {imagePreview && (
                <div className="mt-4">
                  <img src={imagePreview} alt="Selected" className="max-w-full h-auto" />
                </div>
              )}
              <div>
                <textarea
                  name="content"
                  placeholder="Content"
                  rows="6"
                  value={blogData.content}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Add Blog
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
