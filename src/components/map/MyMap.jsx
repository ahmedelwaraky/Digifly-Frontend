"use client";
import React, { useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// URL to a valid location pin icon (or use your own custom icon)
const locationIconUrl = "https://1.bp.blogspot.com/-nO3qPOtQJ-A/Xwo_LZEYCBI/AAAAAAAABAU/KDoOKCEW7UYWLsdqqKYwk6D8of93VapgACLcBGAsYHQ/s2048/location%2Bicon.png"; // Use a valid image URL

export default function MyMap() {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return; // Ensure mapContainer is available

    // Set initial map center to the provided coordinates (30.061733703650773, 31.336819338445256)
    const map = L.map(mapContainer.current).setView([30.061733703650773, 31.336819338445256], 13);

    // Add a tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Define a custom icon for the marker
    const locationIcon = L.icon({
      iconUrl: locationIconUrl,  // Path to your custom icon
      iconSize: [32, 32],        // Size of the icon
      iconAnchor: [16, 32],      // Point of the icon that will correspond to the marker's location
      popupAnchor: [0, -32],     // Adjust the position of the popup relative to the icon
    });

    // Add a marker with the custom icon at the provided coordinates
    const marker = L.marker([30.061733703650773, 31.336819338445256], { icon: locationIcon }).addTo(map);
    marker.bindPopup("This is the location!").openPopup();

    // Add event listener to the map: When clicked, log the latitude and longitude
    map.on('click', function (e) {
      const { lat, lng } = e.latlng;
      alert(`You clicked at latitude: ${lat}, longitude: ${lng}`);
    });

    // Add event listener to the marker: When clicked, show a popup with coordinates
    marker.on('click', function () {
      // alert(`Marker clicked at latitude: 30.061733703650773, longitude: 31.336819338445256`);
    });

    // Cleanup the map on unmount
    return () => {
      map.remove(); // Cleanup map instance on component unmount
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        height: "500px",
        width: "100%",
        border: "1px solid #ccc",
      }}
    />
  );
}
