import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PlantDetailsPage.css';

const PlantDetailsPage = () => {
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/plants.json`)
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
      <button onClick={() => navigate(-1)} className="back-button">← Back to Home</button>
      <ImageGallery images={plant.images} plantName={plant.name} />
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