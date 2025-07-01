import React, { useState, useEffect } from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';
import './HomePage.css';

const HomePage = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/plants.json`)
      .then((response) => response.json())
      .then((data) => setPlants(data.plants));
  }, []);

  return (
    <div className="home-page">
      <div className="plant-list">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;