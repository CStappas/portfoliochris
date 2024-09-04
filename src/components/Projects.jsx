import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects" className="section">
      <div class="project-container">
        <div class="project-card">
          <h3>Pokedex</h3>
          <p>
            This is a brief description of the first project. It includes key
            details and a summary of what the project is about.
          </p>
          <a href="#" class="project-link">
            Learn More
          </a>
        </div>

        <div class="project-card">
          <h3>Project Title 2</h3>
          <p>
            This is a brief description of the second project. It includes key
            details and a summary of what the project is about.
          </p>
          <a href="#" class="project-link">
            Learn More
          </a>
        </div>

        <div class="project-card">
          <h3>Project Title 3</h3>
          <p>
            This is a brief description of the third project. It includes key
            details and a summary of what the project is about.
          </p>
          <a
            href="#"
            class="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
