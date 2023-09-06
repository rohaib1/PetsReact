import React from "react";
import Pet from "./Pet"; 

const PetList = ({ pets }) => {
  const petComponents = pets.map((pet) => {
    return (
      <Pet
        key={pet.id}
        pet={pet}
      />
    );
  });

  return (
    <div className="pet-list">
      <h2>List of Pets</h2>
      {petComponents}
    </div>
  );
};

export default PetList;
