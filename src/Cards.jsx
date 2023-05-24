import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Cards(props) {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="card max-w-[370px]">
      <div>
        <Link to={`/anime/${props.id}`}>
          {" "}
          <img src={props.imgsrc} alt="anime" />{" "}
        </Link>
        <div >
          <Link to={`/anime/${props.id}`}>
            {" "}
            <h3>{props.sname}</h3>{" "}
          </Link>
          <div className="buttonBox">
            <a className="cardButton" href={props.link}>
              Watch Now
            </a>
            <button className="cardButton" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
