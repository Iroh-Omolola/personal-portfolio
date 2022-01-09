import React from "react";
import { stackList } from "../data/ProjectData";
import "./about.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});

function About() {
  return (
    <div className="contact-wrapper" id="about">
      <div className="Container">
        <h2 className="topic-title" >ABOUT ME</h2>
        <div className="BigCard">
         <div className="image"> 
           <img 
            src="https://avatars.githubusercontent.com/u/69275205?v=4"
            alt="man-svgrepo"
          /></div>
          <div className="AboutBio">
            <p>
            Hello! My name is <strong>Iroh Omolola</strong> and I enjoy
            creating things that live on the internet. My interest in web
            development started back in 2017 when I created a site with html and css using a youtube video and I
            learnt a lot about HTML & CSS. Now, I've been able to acquire knowledge of different tech stacks
            </p>
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <div className="technologies">
            {stackList.map((stack, index) => (
              <div key={index} className="tech" data-aos="flip-down">
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
