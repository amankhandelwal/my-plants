import React, { useEffect, useRef, useState } from 'react';
import pannellum from 'pannellum';
import { Link } from 'react-router-dom';
import './BalconyView.css';

const BalconyView = () => {
  const panoramaRef = useRef(null);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/plants.json`)
      .then((response) => response.json())
      .then((data) => setPlants(data.plants));
  }, []);

  useEffect(() => {
    if (plants.length > 0) {
      const viewer = pannellum.viewer(panoramaRef.current, {
        "type": "equirectangular",
        "panorama": `${process.env.PUBLIC_URL}/balcony_360.jpg`,
        "autoLoad": true,
        "autoRotate": -2,
        "compass": true,
        "hotSpots": plants.map(plant => ({
          "pitch": plant.pitch || 0, // Use 0 if pitch is not defined
          "yaw": plant.yaw || 0,     // Use 0 if yaw is not defined
          "type": "info",
          "text": `
            <h2>${plant.name}</h2>
            <p><strong>Category:</strong> ${plant.category}</p>
            <p><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
            <p><strong>Plant Type:</strong> ${plant.plant_type}</p>
            <p><strong>Watering:</strong> ${plant.watering}</p>
            <p><strong>Fun Fact:</strong> ${plant.fun_fact}</p>
            <a href="${process.env.PUBLIC_URL}/plant/${plant.slug}">View Details</a>
          `,
          "cssClass": "custom-hotspot",
        })),
        "mouseZoom": false, // Disable mouse zoom to prevent conflicts with mobile pinch-zoom
        "gyro": true, // Enable gyroscope for mobile navigation
      });

      // Clean up viewer on component unmount
      return () => {
        viewer.destroy();
      };
    }
  }, [plants]);

  return (
    <div className="balcony-view-container">
      <Link to={`${process.env.PUBLIC_URL}/`} className="list-view-link">View All Plants</Link>
      <div className="panorama" ref={panoramaRef}></div>
    </div>
  );
};

export default BalconyView;