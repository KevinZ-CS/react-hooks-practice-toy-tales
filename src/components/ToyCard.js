import React from "react";

function ToyCard({ toyObj, onLike, onDelete }) {
  const { name, image, likes } = toyObj

  function handleLike() {
    onLike(toyObj.id, likes)
  }

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toyObj.id}`, {
      method: 'DELETE'
    })
    .then((r) => r.json())
    .then(() => onDelete(toyObj))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
