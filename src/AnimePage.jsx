import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './index.css';


function AnimePage({ anime , setCards}) {
  const { anime_id } = useParams();
  const navigate = useNavigate();
  const deleteCard = (e) => {
    const updatedCards = anime.filter((card) => card.id !== parseInt(anime_id));
    setCards(updatedCards);
    navigate("/")
  };
  const [animeItem, setAnimeItem] = useState(null);

  useEffect(() => {
    const a = anime.filter((an) => an.id === parseInt(anime_id));
    setAnimeItem(a[0]);
  }, [animeItem, anime, anime_id]);
  return (
    <div>
      {" "}
      <div>
        {animeItem ? (
          <div className="animecard">
            <img src={animeItem.imgsrc}  alt="anime" />
            <h1>{animeItem.sname}</h1>
            <button onClick={deleteCard}>Delete</button>
            
          </div>
        ) : (
          "Loading"
        )}
      </div>
      {" "}
    </div>
  );
}

export default AnimePage;
