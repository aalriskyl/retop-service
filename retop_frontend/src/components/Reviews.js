// Reviews.js
import React from 'react';

const Reviews = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Replace this with actual review components */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor blandit dolor, et tincidunt enim vestibulum ac. Integer vitae pharetra elit, ac luctus velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <p className="text-gray-600 mt-2">- John Doe</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor blandit dolor, et tincidunt enim vestibulum ac. Integer vitae pharetra elit, ac luctus velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <p className="text-gray-600 mt-2">- Jane Smith</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor blandit dolor, et tincidunt enim vestibulum ac. Integer vitae pharetra elit, ac luctus velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <p className="text-gray-600 mt-2">- Alex Johnson</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
