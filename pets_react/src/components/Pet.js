import React from 'react';
import '../App.css';

const Pet = ({ pet }) => {
  return (
    <div className="pet">
      <h3>Id: {pet.id}</h3>
      <h3>Name: {pet.name}</h3>
      <h3>Type: {pet.type}</h3>
      <h3>Breed: {pet.breed}</h3>
      <h3>Age: {pet.age}</h3>
    </div>
  );
};

export default Pet;