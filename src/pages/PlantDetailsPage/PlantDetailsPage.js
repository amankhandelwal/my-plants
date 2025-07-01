import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PlantDetailsPage.css';

const PlantDetailsPage = () => {
  const [plant, setPlant] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetch('/plants.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedPlant = data.plants.find((p) => p.slug === slug);
        setPlant(selectedPlant);
      });
  }, [slug]);

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="plant-details-page">
      <div className="plant-images">
        {plant.images.map((image, index) => (
          <img key={index} src={`/${image}`} alt={`${plant.name} ${index + 1}`} />
        ))}
      </div>
      <div className="plant-details-content">
        <h1>{plant.name}</h1>
        <p><strong>Category:</strong> {plant.category}</p>
        <p><strong>Scientific Name:</strong> {plant.scientific_name}</p>
        <p><strong>Plant Type:</strong> {plant.plant_type}</p>
        <p><strong>Watering:</strong> {plant.watering}</p>
        <p><strong>Fun Fact:</strong> {plant.fun_fact}</p>
      </div>
    </div>
  );
};

export default PlantDetailsPage;