import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="flex justify-center items-center h-screen">
             <div className="text-2xl font-semibold text-gray-500">Loading...</div>
           </div>;
  }

  return (
    <div>
    <div className="container mx-auto my-8 py-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-96 object-cover" src={`http://localhost:3001${blog.imageUrl}`} alt={blog.title} />
        <div className="p-6">
          <Link to="/blog" className="text-blue-500 hover:underline">&larr; Back to Blog</Link>
          <h1 className="text-4xl font-bold my-4 text-gray-900">{blog.title}</h1>
          <p className="text-gray-600 mb-2">by <span className="font-semibold">{blog.author}</span></p>
          <p className="text-gray-500 mb-6 italic">{blog.description}</p>
          <div className="text-gray-700 leading-relaxed space-y-6">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogDetail;
