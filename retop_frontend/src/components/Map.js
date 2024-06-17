import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Circle, useMapEvents } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import 'leaflet/dist/leaflet.css';

// Ensure default icon assets are properly linked
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';

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
      <Marker position={position}>
        <Circle center={position} color="red" fillColor="#f03" fillOpacity={0.1} radius={8000} />
      </Marker>
    </>
  ) : null;
};

const Map = ({ showMarker, currentLocation, selectedShop, zoomLevel, setCurrentLocation, setZoomLevel }) => {
  const [position, setPosition] = useState(currentLocation || [-6.178306, 106.631889]);
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const [showMarkers, setShowMarkers] = useState(false);

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/profiles");
        setMarkers(data);
      } catch (error) {
        console.error("Error fetching markers:", error);
      }
    };

    fetchMarkers();
  }, []);

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

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleMarkerClick = (marker) => {
    const markerPosition = [marker.location.coordinates[1], marker.location.coordinates[0]];
    const distance = calculateDistance(position[0], position[1], markerPosition[0], markerPosition[1]);

    const popupContent = `
      <div>
        <h3>${marker.name}</h3>
        <img src="${marker.image}" alt="${marker.name}" style="width: 100px; height: 100px;" />
        <p>Distance: ${distance.toFixed(2)} km</p>
      </div>
    `;

    L.popup()
      .setLatLng(markerPosition)
      .setContent(popupContent)
      .openOn(map);
  };

  const handleMapLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const handleButtonClick = () => {
    if (map) {
      map.locate({
        setView: true,
        maxZoom: 16,
      });
      setShowMarkers((prev) => !prev);
    }
  };

  return (
    <>
      <button onClick={handleButtonClick}>
        {showMarkers ? "Hide Markers" : "Show Markers"}
      </button>
      <MapContainer center={position} zoom={zoomLevel} style={{ height: "100%", width: "100%" }} whenCreated={handleMapLoad}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showMarker && <LocationMarker setCurrentLocation={setCurrentLocation} setZoomLevel={setZoomLevel} />}
        {showMarkers && markers.map((marker) => (
          <Marker
            key={marker._id}
            position={[marker.location.coordinates[1], marker.location.coordinates[0]]}
            eventHandlers={{ click: () => handleMarkerClick(marker) }}
          />
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
