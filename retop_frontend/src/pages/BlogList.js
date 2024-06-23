import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/blogs');
        console.log(response.data);  // Log the fetched data
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="text-white bg-gradient-to-br from-blue-400 via-purple-800 to-red-400 min-h-screen pt-24">
    <Navbar />
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-8 mb-4">Artikel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.map(blog => (
          <div key={blog._id} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-blue-700">
            <Link to={`/blogs/${blog._id}`}>
              <img className="w-full h-40 object-cover" src={`http://localhost:3001${blog.imageUrl}`} alt={blog.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.title}</div>
                <span className="inline-block text-white py-2 text-sm font-semibold text-gray-700 mr-2">
                  {blog.author}
                </span>
                <p className="text-gray-300 text-base">{blog.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">

              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default BlogList;
