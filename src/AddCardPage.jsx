import React, { useState } from 'react';
import CardForm from './CardForm';
import './index.css'; 

function AddCardPage({ onAddCard }) {
  const handleAddCard = (newCard) => {
    onAddCard(newCard);
  };

  return (
    <div className="add-card-page">
      <h1 className="add-card-page-title">Add A New Anime</h1>
      <CardForm onAddCard={handleAddCard} />
    </div>
  );
}

export default AddCardPage;
