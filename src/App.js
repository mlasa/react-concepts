import React, { useState } from "react";

import "./App.css";
import backgroundImage from "./assets/photo.jpeg";

import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState([
    "London - England",
    "Rio de Janeiro - Brazil",
  ]);

  function handleAddProject() {
    setProjects([...projects, "Trip" + Math.floor(Math.random() * 100)]); //
    console.log(projects);
  }

  return (
    <>
      <Header title="Trips" />
      <img height="600" src={backgroundImage} />
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <input type="text" name="destiny" id="destiny" placeholder="Trip" />
      <button onClick={handleAddProject}>Add new trip</button>
    </>
  );
}
