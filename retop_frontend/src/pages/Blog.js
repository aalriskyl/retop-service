// BlogContent.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you use React Router for routing

const Blog = () => {
  // Example blog post (replace with your actual data fetching logic)
  const { id } = useParams(); // Assuming the post id is passed as a route parameter
  const post = {
    id: 1,
    title: "First Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus auctor, fringilla purus in, tristique libero.",
    author: "John Doe",
    date: "June 1, 2024"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto flex-grow py-8 px-4">
        <article className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <p>By {post.author}</p>
            <p>{post.date}</p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Blog;
