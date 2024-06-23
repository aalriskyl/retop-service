import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMapEvents } from "react-leaflet";
import L from "leaflet";
import RedIcon from './assets/img/popup-red.png';
import BlueIcon from './assets/img/popup-blue.png';
import ReactWhatsapp from 'react-whatsapp';

// Fix Leaflet's default icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Define custom marker icons
const redMarkerIcon = L.icon({
  iconUrl: RedIcon,
  iconSize: [30, 30],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const blueMarkerIcon = L.icon({
  iconUrl: BlueIcon,
  iconSize: [30, 30],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const haversineDistance = (coords1, coords2) => {
  const toRad = (angle) => (angle * Math.PI) / 180;

  const lat1 = coords1[0];
  const lon1 = coords1[1];
  const lat2 = coords2[0];
  const lon2 = coords2[1];

  const R = 6371; // Radius of Earth in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};

const LocationMarker = ({ setCurrentLocation, setZoomLevel }) => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      const pos = e.latlng;
      setPosition(pos);
      setCurrentLocation([pos.lat, pos.lng]);
      setZoomLevel(12);
      map.flyTo(pos, 12);
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  return position ? (
    <>
      <Marker position={position} icon={blueMarkerIcon}>
        <Popup>You are here</Popup>
        <Circle center={position} pathOptions={{ color: 'red' }} radius={8000} />
      </Marker>
    </>
  ) : null;
};

const Map = ({ showMarker, showMarkers, currentLocation, selectedShop, zoomLevel, setCurrentLocation, setZoomLevel, markers, handleShopSelect }) => {
  const [position, setPosition] = useState(currentLocation || [-6.178306, 106.631889]);

  useEffect(() => {
    if (currentLocation) {
      setPosition(currentLocation);
    }
  }, [currentLocation]);

  useEffect(() => {
    if (selectedShop) {
      const selectedShopPosition = [selectedShop.location.coordinates[1], selectedShop.location.coordinates[0]];
      setPosition(selectedShopPosition);
    }
  }, [selectedShop]);

  return (
    <div className="w-full sm:w-4/5 mx-auto">
      <MapContainer
        center={position}
        zoom={zoomLevel}
        className="h-[60vh] w-100vh"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showMarker && <LocationMarker setCurrentLocation={setCurrentLocation} setZoomLevel={setZoomLevel} />}
        {showMarkers && markers.map((marker) => {
          const distance = currentLocation ? haversineDistance(currentLocation, [marker.location.coordinates[1], marker.location.coordinates[0]]) : null;
          return (
            <Marker
              key={marker._id}
              position={[marker.location.coordinates[1], marker.location.coordinates[0]]}
              icon={redMarkerIcon}
              eventHandlers={{
                click: () => handleShopSelect(marker) // Trigger handleShopSelect with marker
              }}
            >
              <Popup>
                <div className="text-center">
                  <h3 className="mb-1 text-lg font-bold">{marker.name}</h3>
                  <img src={`http://localhost:3001${marker.imageUrl}`} alt={marker.name} className="w-24 h-auto mx-auto" />
                  <p className="mt-1 text-sm">{marker.address}</p>
                  {distance !== null && (
                    <p className="mt-1 text-sm">Distance: {distance.toFixed(2)} km</p>
                  )}
                  <div>
                    <ReactWhatsapp
                      className="border rounded-lg cursor-pointer p-2 mx-auto"
                      number={marker.phone}
                      message="Haloo! saya ada masalah perihal laptop saya, (masukan masalah anda) apakah toko ini buka?"
                    >
                      <h3 className=" cursor-pointer">Hubungi Toko!</h3>
                    </ReactWhatsapp>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}

      </MapContainer>
    </div>
  );
};

export default Map;
