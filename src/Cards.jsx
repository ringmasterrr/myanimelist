import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Cards(props) {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="card">
      <div>
        <img src={props.imgsrc} alt="anime" />
        <div>
         <Link to = {`/anime/${props.id}`}> <h3>{props.sname}</h3> </Link>
          <a href={props.link}>
            <button>Watch Now</button>
          </a>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
