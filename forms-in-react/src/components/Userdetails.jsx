import React, { useState } from "react";

const Userdetails = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
  });

  const handleEditClick = () => {
    setFormData({
      ...formData,
      isEditable: true,
    });
  };

  const handleSaveClick = () => {
    setFormData({
      ...formData,
      isEditable: false,
    });
    // Perform save/update logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            disabled={!formData.isEditable}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            disabled={!formData.isEditable}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled={!formData.isEditable}
            onChange={handleChange}
          />
        </div>
        {!formData.isEditable ? (
          <button onClick={handleEditClick}>Edit</button>
        ) : (
          <button onClick={handleSaveClick}>Save</button>
        )}
      </div>
    </>
  );
};

export default Userdetails;
