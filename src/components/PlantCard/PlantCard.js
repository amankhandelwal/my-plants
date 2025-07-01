import React from 'react';
import { Link } from 'react-router-dom';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
  return (
    <Link to={`/plant/${plant.slug}`} className="plant-card">
      <img src={plant.images[0]} alt={plant.name} />
      <div className="plant-card-content">
        <h2>{plant.name}</h2>
        <p>{plant.category}</p>
      </div>
    </Link>
  );
};

export default PlantCard;