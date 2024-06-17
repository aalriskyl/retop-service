// Gallery.js
import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Replace these with your actual images */}
        {Array.from({ length: 6 }, (_, index) => (
          <img 
            key={index}
            src={`https://via.placeholder.com/400`}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
