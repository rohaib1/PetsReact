import { useState } from "react";

const PetForm = ({postPet}) => {

    const [pet, setPet] = useState({

        name: " ",
        type: " ",
        breed: " ",
        age: " "

    });


    const handleChange = (event) => {
        let propertyName = event.target.name;
        let clonedPet = {...pet} 
        clonedPet[propertyName] = event.target.value;
        setPet(clonedPet);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        postPet(pet);
        setPet({
            name: "",
            type: "",
            breed: "",
            age:""
        })

  };

  return (
    <div className="pet-form">
      <h2>Add a New Pet</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={pet.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={pet.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            value={pet.breed}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={pet.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PetForm;