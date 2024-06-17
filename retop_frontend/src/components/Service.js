import React from 'react';
import CardService from './CardService';

const Service = () => {
  return (
    <div className="bg-slate-800 my-8 py-12 w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-6">Our Services</h1>
      <p className="text-lg text-gray-300 mb-8">What we offer</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Add your CardService components here */}
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </div>
    </div>
  );
};

export default Service;
