import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, plantName }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      <div className="main-image-container">
        <img src={`${process.env.PUBLIC_URL}/${mainImage}`} alt={plantName} className="main-image" />
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/${image}`}
            alt={`${plantName} thumbnail ${index + 1}`}
            className={`thumbnail ${image === mainImage ? 'active' : ''}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;