import React, { useState } from "react";
import Header from "./Header";

export default function App() {
	const [projects, setProjects] = useState(["BB8 - Star Wars", "EVA - Wall-E"]);

  function handleAddProject() {
		setProjects([...projects, "Pro"+Math.floor(Math.random() * 100)]);//
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((project,index) => <li key={index}>{project}</li>)}
      </ul>
      <button onClick={handleAddProject}>Add new project</button>
    </>
  );
}
