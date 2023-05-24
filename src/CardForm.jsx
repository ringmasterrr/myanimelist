import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function CardForm({ onAddCard }) {
  const [newCard, setNewCard] = useState({ imgsrc: "", sname: "", link: "" });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setNewCard({ ...newCard, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddCard({ ...newCard, id: Math.floor(Math.random() * 1000) });
    setNewCard({ imgsrc: "", sname: "", link: "" });
  navigate("/")

  };

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <h1 className="add-card-page-title">֍ Add A New Anime To The List ֍</h1>
      <input
        type="text"
        name="imgsrc"
        value={newCard.imgsrc}
        onChange={handleChange}
        placeholder="Image URL"
        className="card-form-input"
      />
      <input
        type="text"
        name="sname"
        value={newCard.sname}
        onChange={handleChange}
        placeholder="Anime Name"
        className="card-form-input"
      />
      <input
        type="text"
        name="link"
        value={newCard.link}
        onChange={handleChange}
        placeholder="Link"
        className="card-form-input"
      />
      <button type="submit" className="card-form-button">
        Add Card
      </button>
    </form>
  );
}

export default CardForm;
