import React from 'react';
import Reparasi from './assets/img/laptop-reparasi.png';

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-800 to-red-400 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto max-w-7xl px-4 lg:px-8 py-12">
        {/* Text Content */}
        <div className="flex flex-col justify-center lg:mx-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Mau Perbaiki Laptop</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Tapi Gatau Dimana?</h2>
          <p className="text-lg lg:text-xl mb-6">
            Ayo cari toko reparasi laptop di ReTop! Terpercaya dan harganya murah!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/lokasi" className=" text-lg flex justify-center items-center py-2 px-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300">
  Cari Toko Terdekat
</a>

            <div className="flex items-center gap-2">
              <a href="/blog" className="text-sm lg:text-base">
                Laptopmu rusak? Baca artikelnya yuk!
              </a>
            </div>
          </div>
        </div>
        {/* Laptop picture */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden max-w-md">
            <img src={Reparasi} alt='reparasi' className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
