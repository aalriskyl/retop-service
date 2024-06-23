import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar.js';
import MapComponent from '../components/Map.js'; // Adjusted import name
import axios from "axios";
import ShopList from '../components/ShopList'; // Import the ShopList component

const Lokasi = () => {
  const [showMarkers, setShowMarkers] = useState(false); // State to control visibility of markers
  const [markers, setMarkers] = useState([]);
  const [currentLocationVisible, setCurrentLocationVisible] = useState(false); // State to control visibility of current location marker
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedShop, setSelectedShop] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(10);

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

  const handleShowMarkersAndLocation = () => {
    if (!currentLocationVisible) {
      setCurrentLocationVisible(true); // Show current location
    }
    setShowMarkers(!showMarkers); // Toggle markers visibility
  };

  const handleShopSelect = (shop) => {
    setSelectedShop(shop); // Update selectedShop state
  };

  return (
    <div className="text-gray-900 leading-normal bg-gradient-to-br from-blue-400 via-purple-800 to-red-400 min-h-screen pt-24"> {/* Add padding-top */}
      <Navbar />
      <div className="sm:hidden px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Cek Lokasi Sekitarmu!</h1>
        <p className="text-gray-600 text-sm">Rekomendasi Toko Reparasi Laptop Akan Muncul</p>
      </div>
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-1/3 p-4 bg-white rounded-lg shadow-lg mb-4 lg:mb-0 lg:mr-4">
          <ShopList
            markers={markers}
            handleShopSelect={handleShopSelect}
            selectedShop={selectedShop}
          />
        </div>
        <div className="lg:w-2/3 p-4 bg-white rounded-lg shadow-lg">
          <div className="w-full flex flex-col justify-center items-center text-center text-black mb-4">
            <button
              onClick={handleShowMarkersAndLocation}
              className="w-full lg:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none shadow-lg"
            >
              Cari Lokasi!
            </button>
          </div>
          <div className="w-full">
            <MapComponent
              showMarker={currentLocationVisible}
              showMarkers={showMarkers}
              currentLocation={currentLocation} 
              setCurrentLocation={setCurrentLocation}
              setZoomLevel={setZoomLevel}
              selectedShop={selectedShop}
              zoomLevel={zoomLevel}
              markers={markers}
              handleShopSelect={handleShopSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lokasi;
