import React from "react";
import Header from "./Header";

export default function App() {
  const title = "Marcella";
  return (
    <>
			<Header title={title}>
				<ul>
					<li>Idade:22</li>
					<li>Campinas-SP</li>
				</ul>
			</Header>
			<Header title="Projects">
				<ul>
					<li>BB8</li>
					<li>Jeany</li>
				</ul>	
			</Header>
    </>
  );
}
