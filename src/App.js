import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";
import backgroundImage from "./assets/photo.jpeg";

import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, "Pro" + Math.floor(Math.random() * 100)]); //
    const response = await api.post("/projects", {
      title: `EVA${Math.floor(Math.random() * 100)}`,
      owner: "mlasa",
    });
    setProjects([...projects,response.data])

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <input
        type="text"
        name="nameProject"
        id="nameProject"
        placeholder="Name project"
      />
      <input
        type="text"
        name="projectOwner"
        id="projectOwner"
        placeholder="Project owner"
      />
      <button onClick={handleAddProject}>Add new project</button>
    </>
  );
}
