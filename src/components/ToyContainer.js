import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyArray, onLike, onDelete }) {

  const toyCards = toyArray.map((toy) => <ToyCard key={toy.id} toyObj={toy} onLike={onLike} onDelete={onDelete} />)

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
