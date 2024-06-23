import React from 'react';
import gallery1 from './assets/img/gallery-1.jpg';
import gallery2 from './assets/img/gallery-2.jpg';
import gallery3 from './assets/img/gallery-3.jpg';
import gallery4 from './assets/img/gallery-4.jpg';
import gallery5 from './assets/img/gallery-5.jpg';
import gallery6 from './assets/img/gallery-6.jpg';
import gallery7 from './assets/img/gallery-7.jpg';
import gallery8 from './assets/img/gallery-8.jpg';

// List of imported images
const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];

const Gallery = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 via-purple-800 to-red-400 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* Gallery Heading */}
        <h1 className="flex justify-center items-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gallery</h1>
        <p className="flex justify-center items-center text-lg text-gray-300 mb-8">Check out our images</p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:col-span-1 mt-auto">
          {images.map((image, index) => (
            <div key={index} className="w-full h-48 overflow-hidden rounded-lg shadow-lg mb-4">
              <img 
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover hover:transform hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
