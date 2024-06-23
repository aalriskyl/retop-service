import React from 'react';

const ShopList = ({ markers, handleShopSelect, selectedShop }) => {
  return (
    <div className="w-full sm:w-1/3 lg:w-full p-4 bg-white rounded-lg shadow-lg border-r border-gray-200 overflow-y-auto max-h-[80vh]">
      <h2 className="text-2xl font-bold mb-4">Daftar Toko:</h2>
      <ul className="space-y-2 text-lg tracking-wider">
        {markers.map(marker => (
          <li
            key={marker._id}
            onClick={() => handleShopSelect(marker)} // Trigger handleShopSelect with marker
            className={`cursor-pointer p-4 rounded-md hover:bg-blue-100 shadow-md ${selectedShop?._id === marker._id ? 'bg-blue-200' : ''}`}
          >
            <div className="font-bold">{marker.name}</div>
            <div>{marker.address}</div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopList;
