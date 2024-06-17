import React from 'react';
import Reparasi from './assets/img/reparasi-2.jpg';

const Hero = () => {
  return (
    <div className="w-full mx-auto px-8 lg:px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Text Content */}
        <div className="col-span-2 flex flex-col justify-center lg:mx-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold py-4">Mau Perbaiki Laptop</h1>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-700 py-4">Tapi Gatau Dimana?</h1>
            <p className="py-4 my-2">
              Ayo cari toko reparasi laptop di ReTop! Terpercaya dan Harganya murah!
            </p>
            <div className="grid sm:grid-cols-2 gap-2 py-2">
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <a href="/lokasi" className="p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-dark)] text-white rounded-3xl">Cari Toko Terdekat</a>
                <div className="flex justify-center items-center lg:gap-2">
                  <p className="text-sm lg:text-base">Laptopmu rusak? Baca artikelnya yuk!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Laptop picture */}
        <div className="flex justify-center">
          <div className="border text-center">
            <img src={Reparasi} alt='reparasi' className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
