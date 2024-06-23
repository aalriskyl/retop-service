import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      text: "Pelayanan sangat memuaskan! Laptop saya yang rusak bisa diperbaiki dengan cepat dan harganya sangat terjangkau. Terima kasih banyak!",
      author: "Budi Santoso",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      text: "Saya sangat puas dengan hasil reparasi laptop saya di sini. Tim sangat profesional dan komunikatif. Sangat direkomendasikan!",
      author: "Rina Suryani",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      text: "Layanan cepat dan ramah! Laptop saya sekarang kembali berfungsi dengan baik setelah mengalami masalah hardware.",
      author: "Ahmad Fadli",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      text: "Pelayanan cepat dan ramah! Saya sangat puas dengan perbaikan laptop saya.",
      author: "Siti Aminah",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      text: "Harga sangat terjangkau untuk kualitas pelayanan yang diberikan. Sangat puas!",
      author: "Ali Usman",
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      text: "Layanan yang diberikan sangat profesional dan memuaskan.",
      author: "Dewi Kusuma",
      image: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      text: "Rekomendasi terbaik untuk perbaikan laptop di kota ini!",
      author: "Joko Priyono",
      image: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      text: "Pelayanan cepat dan hasil perbaikan sangat memuaskan.",
      author: "Lisa Kartika",
      image: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      text: "Tempat terbaik untuk perbaikan laptop dengan harga terjangkau.",
      author: "Agus Prasetyo",
      image: "https://randomuser.me/api/portraits/men/9.jpg"
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-200">
      <h1 className="text-3xl font-bold mb-8 text-center">Ulasan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto px-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img 
              src={review.image}
              alt={review.author}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-800">{review.text}</p>
            <p className="text-gray-600 mt-2 text-right">- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
