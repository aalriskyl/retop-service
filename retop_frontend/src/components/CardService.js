import React from 'react';

const CardService = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <div className="mb-4">
        {/* You can add an icon or image here */}
        <img src="service-icon.png" alt="Service Icon" className="w-16 h-16" />
      </div>
      <h2 className="text-xl font-semibold mb-2">Service Title</h2>
      <p className="text-gray-700">Description of the service offered. This is a brief detail about what the service entails.</p>
    </div>
  );
};

export default CardService;
