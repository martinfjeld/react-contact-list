import React from "react";
import "./card.styles.scss";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://eu.ui-avatars.com/api/?background=FFBD91&color=fff&name=${props.person.name}`}
      />
      <h2>{props.person.name}</h2>
      <p>{props.person.email}</p>
      <p>{props.person.phone}</p>
    </div>
  );
};
