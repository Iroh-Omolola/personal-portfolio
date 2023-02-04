import React from "react";
import { stackList } from "../data/ProjectData";
import "./about.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
  return (
    <div className="contact-wrapper" id="about">
      <div className="Container">
        <h2 className="topic-title">ABOUT ME</h2>
        <div className="BigCard">
          <div className="image">
            <img
              src="https://avatars.githubusercontent.com/u/69275205?v=4"
              alt="man-svgrepo"
            />
          </div>
          <div className="AboutBio">
            <p>
              I am gifted, front-end-focused Software Developer and my primary
              tech stack includes React.js and Node.js. I am adept at using
              TypeScript, Figma, HTML, CSS, PostgreSQL, and MongoDB. I have
              working experience with Scrum. I am a dynamic and detail-oriented
              professional with a knack for conceptualizing and delivering
              elegant, user-friendly solutions effectively and efficiently.
              Moreover, I am a dedicated and persistent person who enjoys
              building powerful web applications, learning new technologies, and
              improving overall knowledge. Throughout my career, I have
              consistently demonstrated my ability to work in fast-paced
              environments and have a proven track record of developing and
              launching successful projects. One of my most notable
              accomplishments include leading the development of a loan approval
              system that improved approval and rejection times by 90%.
            </p>
            <p>
              {" "}
              In addition to my technical skills, I am also a self-starter with
              a passion for mentoring and sharing my knowledge with others. I
              have experience mentoring junior engineers and am always looking
              for opportunities to continue to learn and grow. In my current
              role as a software engineer, I am responsible for building,
              designing and implementing the system architecture and backend
              application to power the application's business logic. I also
              collaborate with the product team to plan, analyse and actualise
              different features for the product. I am excited to bring my
              experience and passion to a new team and contribute to the success
              of a company. I am currently seeking new opportunities to continue
              to grow and develop my skills as a software engineer.
            </p>
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <div className="technologies">
            {stackList.map((stack, index) => (
              <div key={index} className="tech">
                <img className="tech-img" src={stack.img} alt={stack.name} />
                <div className="tech-name">{stack.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
