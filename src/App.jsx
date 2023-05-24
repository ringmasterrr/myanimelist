import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import CardPage from './CardPage';
import AddCardPage from './AddCardPage';
import Data from './Data';
import AnimePage from './AnimePage';

function App() {
  const [cards, setCards] = useState(Data);

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <Router>
      <React.StrictMode>
        <Navbar />
        <Routes>
          <Route path="/" element={<CardPage cards={cards} setCards={setCards}/>} />
          <Route path="/add" element={<AddCardPage onAddCard={handleAddCard}  />} />
          <Route path="/anime/:anime_id" element={<AnimePage anime={cards} setCards={setCards}/>} />
        </Routes>
      </React.StrictMode>
    </Router>
  );
}

export default App;
