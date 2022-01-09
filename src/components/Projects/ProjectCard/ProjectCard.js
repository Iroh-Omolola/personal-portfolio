import React from "react";
import { ProjectList } from "../../data/ProjectData.js";
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./project.css"

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});

function ProjectCard() {
  return (
    <>
    <h2 className="topic-title" id="projects">PROJECTS</h2>
      {ProjectList.map((list, index) => (
        <div className="card" key={index}>
          <div className="card-left" data-aos="fade-left">
            <img className="project-img" src={list.img} alt={list.name} />
          </div>
          <div className="card-right"data-aos="fade-up">
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <div className="stack">
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </div>
            <div className="btn-group">
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="btn btn2 PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
