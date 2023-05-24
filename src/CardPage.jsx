import React, { useState } from 'react';
import Cards from './Cards';
import CardForm from './CardForm';


function CardPage({cards,setCards}) {

  const addCard = (newCard) => {
    // Generate a unique ID for the new card
    const newId = Math.floor(Math.random() * 100000);
    
    // Create a copy of the current cards array and add the new card with the generated ID
    const updatedCards = [...cards, { ...newCard, id: newId }];
    
    // Update the state with the updated cards array
    setCards(updatedCards);
  };

  const deleteCard = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  return (
    <div>
     {/* <CardForm onAddCard={addCard} /> */}
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <Cards
            key={card.id}
            id={card.id}
            imgsrc={card.imgsrc}
            sname={card.sname}
            link={card.link}
            onDelete={deleteCard}
          />
        ))}
      </div>
    </div>
  );
}

export default CardPage;
