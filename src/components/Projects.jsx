import React from "react";
import "./Projects.css";
import Pokedex from "../Pokedex.png"
import LittleLemon from "../LittleLemon.png"

function Projects() {
  return (
    <div id="projects" className="section">
      <div class="project-container">
        <div class="project-card">
        <h3>Pokédex</h3>
        <img src={Pokedex} alt=""/>
          <a href="https://cstappas.github.io/pokedex/" class="project-link" >
            Visit
          </a>
        </div>

        <div class="project-card">
          <h3>Little Lemon Restaurant Capstone</h3>
        
          <img src={LittleLemon} alt=""/>
          <a href="https://cstappas.github.io/littlelemon/" class="project-link">
          Visit
          </a>
        </div>

        <div class="project-card">
          <h3>Project Title</h3>
          <a
            href="http://CStappas.github.io/portfoliochris"
            class="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coming Soon 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
