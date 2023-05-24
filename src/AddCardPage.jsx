import React from 'react';
import CardForm from './CardForm';
import './index.css'; 

function AddCardPage({ onAddCard }) {
  const handleAddCard = (newCard) => {
    onAddCard(newCard);
  };

  return (
    <div className="add-card-page">
      <CardForm onAddCard={handleAddCard} />
    </div>
  );
}

export default AddCardPage;
