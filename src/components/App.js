import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=> {
    fetch('http://localhost:3001/toys')
    .then((r) => r.json())
    .then((data) => setToyArray(data))
  },[])

  function handleUpdateLike(id, like) {
    let likes = like + 1
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes }),
    })
    .then((r) => r.json())
    .then((data) => {
      const updatedList = toyArray.map((toy) => {
        if(toy.id === data.id) return data;
         return toy
      })
      setToyArray(updatedList)
    })
  }

  function onDelete(deletedToy) {
    const updatedList = toyArray.filter((toy) => toy.id !== deletedToy.id)
    setToyArray(updatedList)
  }

  function updateToyForm(newToy) {
    const newList = [...toyArray, newToy]
    setToyArray(newList)
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm updateToyForm={updateToyForm} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray={toyArray} onLike={handleUpdateLike} onDelete={onDelete} />
    </>
  );
}

export default App;
