import "./style.scss";
// const Experience = () => {
//   return <h1>Experience</h1>;
// };
// export default Experience;
import React, { useState } from "react";

function Experience() {
  // Initial state setup with a user object
  const [user, setUser] = useState({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  });

  // Function to update a specific property in the user object
  const updateUser = (property, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [property]: value,
    }));
  };
  const handleClick = () => {
    setUser((prevUser) => ({
      ...prevUser,
      ["age"]: 29,
    }));
  };
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <h3>Email: {user.email}</h3>

      <button onClick={() => updateUser("email", "new.email@example.com")}>
        Update Email
      </button>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Experience;
