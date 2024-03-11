import React from 'react';
import '../App.css';
import ImgOverlay from './ImageOverlay';
import StoreListing from './StoreListing'; // Adjust the path as necessary

function MyFullPageForm() {
  return (
    <div className="full-page-container">
      <div className="top-section full-page-section">
        <h1 className="main-title">Order groceries for delivery or pickup today.</h1>
      </div>
      <div className="bottom-section full-page-section">
        <StoreListing />
      </div>
    </div>
  );
}

export default MyFullPageForm;
