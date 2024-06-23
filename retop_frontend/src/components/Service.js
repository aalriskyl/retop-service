import React from 'react';
import { FaLaptop, FaTools, FaVirus, FaBatteryFull, FaHdd, FaFan } from 'react-icons/fa';

const layanan = [
  {
    icon: <FaLaptop />,
    judul: 'Penggantian Layar',
    deskripsi: 'Kami mengganti layar laptop yang rusak atau pecah dengan pengganti berkualitas tinggi.',
  },
  {
    icon: <FaTools />,
    judul: 'Peningkatan Hardware',
    deskripsi: 'Tingkatkan laptop Anda dengan komponen hardware baru untuk performa yang lebih baik.',
  },
  {
    icon: <FaVirus />,
    judul: 'Penghapusan Virus',
    deskripsi: 'Hapus virus, malware, dan perangkat lunak berbahaya lainnya dari laptop Anda.',
  },
  {
    icon: <FaBatteryFull />,
    judul: 'Penggantian Baterai',
    deskripsi: 'Ganti baterai laptop Anda yang sudah lemah dengan baterai baru yang tahan lama.',
  },
  {
    icon: <FaHdd />,
    judul: 'Perbaikan Hard Drive',
    deskripsi: 'Perbaiki atau ganti hard drive yang rusak untuk menyelamatkan data Anda.',
  },
  {
    icon: <FaFan />,
    judul: 'Pembersihan Sistem Pendingin',
    deskripsi: 'Membersihkan kipas dan heatsink untuk mencegah overheat pada laptop Anda.',
  },
];

const Service = () => {
  return (
    <div className="relative my-8 py-12 w-full flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-white backdrop-blur-md rounded-lg"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl text-gray-800 font-bold mb-6">Layanan Kami</h1>
        <p className="text-lg text-gray-800 mb-8">Apa yang kami tawarkan</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {layanan.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 backdrop-blur-md rounded-lg p-6 flex flex-col items-center text-center text-white">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{service.judul}</h2>
              <p className="text-lg">{service.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
