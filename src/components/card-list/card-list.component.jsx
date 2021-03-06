import React from "react";
import "./card-list.styles.scss";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.persons.map((person) => {
        return <Card key={person.id} person={person} />;
      })}
    </div>
  );
};
