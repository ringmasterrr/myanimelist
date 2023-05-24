import React from 'react';
import Cards from './Cards';
import CardForm from './CardForm';


function CardPage({cards,setCards}) {

  const addCard = (newCard) => {
 
    const newId = Math.floor(Math.random() * 100000);
    
  
    const updatedCards = [...cards, { ...newCard, id: newId }];
    
 
    setCards(updatedCards);
  };

  const deleteCard = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  return (
    <div className='p-8 pt-14'>
  
      <div className="grid grid-cols-4 gap-12 justify-center w-fit mx-auto">
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
