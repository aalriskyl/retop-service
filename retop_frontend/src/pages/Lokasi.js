// Lokasi.js
import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar.js';
import Map from '../components/Map.js';
import axios from "axios";

const Lokasi = () => {
  const [showMarker, setShowMarker] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedShop, setSelectedShop] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(10); // Initialize zoom level state

  useEffect(() => {
    const fetchMarkerData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/profiles");
        setMarkers(response.data);
      } catch (error) {
        console.error("Error fetching marker data:", error);
      }
    };
    fetchMarkerData();
  }, []);

  const handleToggleMarker = () => {
    setShowMarker(true);
  };

  const handleShopSelect = (shop) => {
    setSelectedShop(shop);
  };

  return (
    <div className=" text-gray-900 leading-normal bg-gray-100 min-h-screen">
      <Navbar />
      {/* Desktop View */}
      <div className="hidden sm:block">
        <div className="flex max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="w-1/3 p-4 bg-white rounded-lg shadow-lg border-r border-gray-200 overflow-y-auto max-h-[80vh]">
            <h2 className="text-2xl font-bold mb-4">Daftar Toko:</h2>
            <ul className="space-y-2 text-lg tracking-wider">
              {markers.map(marker => (
                <li
                  key={marker._id}
                  onClick={() => handleShopSelect(marker)}
                  className={`cursor-pointer p-2 rounded-md hover:bg-blue-100 shadow-lg ${selectedShop?._id === marker._id ? 'bg-blue-200' : ''}`}
                >
                  {marker.name} - {marker.address}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/3 p-4 bg-white rounded-lg shadow-lg">
            <div className="w-full flex flex-col justify-center items-center text-center text-black">
              <div className="p-3">
                <button
                  onClick={handleToggleMarker}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none shadow-lg"
                >
                  Cari Lokasi Terdekatku!
                </button>
              </div>
              <div className="w-full h-96">
                <Map 
                  showMarker={showMarker} 
                  currentLocation={currentLocation} 
                  setCurrentLocation={setCurrentLocation}
                  setZoomLevel={setZoomLevel}
                  selectedShop={selectedShop}
                  zoomLevel={zoomLevel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="sm:hidden">
        <div className="px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-2">Cek Lokasi Sekitarmu!</h1>
          <p className="text-gray-600 text-sm">Rekomendasi Toko Reparasi Laptop Akan Muncul</p>
        </div>
        <div className="flex flex-col max-w-screen-md mx-auto">
          <div className="p-4 bg-white rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-bold mb-2">Daftar Toko:</h2>
            <ul className="space-y-2">
              {markers.map(marker => (
                <li
                  key={marker._id}
                  onClick={() => handleShopSelect(marker)}
                  className={`cursor-pointer p-2 rounded-md hover:bg-blue-100 ${selectedShop?._id === marker._id ? 'bg-blue-200' : ''}`}
                >
                  {marker.name} - {marker.address}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <div className="py-4">
              <button
                onClick={handleToggleMarker}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none shadow-lg"
              >
                Cari Lokasi Terdekatku!
              </button>
            </div>
            <div className="w-full h-96">
              <Map 
                showMarker={showMarker} 
                currentLocation={currentLocation} 
                setCurrentLocation={setCurrentLocation}
                setZoomLevel={setZoomLevel}
                selectedShop={selectedShop}
                zoomLevel={zoomLevel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lokasi;
