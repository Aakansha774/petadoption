// src/cards/CardComponent.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = ({ card }) => {
  return (
    <div className="col-md-4  m-3 p-4 mb-3">
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={card.image} className="img-fluid rounded-start" alt="Pet" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{card.petDescription}</h5>
              <p className="card-text">Location: {card.location}</p>
              <p className="card-text">Date Found: {card.dateFound}</p>
              <p className="card-text">Contact: {card.contactName}</p>
              <p className="card-text">Email: {card.contactEmail}</p>
              <p className="card-text">Phone: {card.contactPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
