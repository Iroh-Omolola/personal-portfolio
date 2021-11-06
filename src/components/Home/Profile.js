import React from "react";
import Typical from 'react-typical'
import Header from "../Header/Header";
import "./profile.css"

export const Profile = () => {
  return (
    <main>
 <Header/>
    <div className="profile-container">
    
      <div className="profile-parent">
      
        <div classname="profile-details">
          <div className="colz">
          
            <div className="colz-icon">
            <a href="#e">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#w">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#l">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#m">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>    
        <div className="profile-details-name">
            <span className="primary-text">
                Hello, I'm <span className="highlighted-text">Hero</span>
            </span>
        </div>
        <div className="profile-details-role">
            <span className="primary-text">
                <h1>
                    <Typical
                      loop={Infinity}
                      steps={[
                         
                          "Full Stack Developer",
                          1000,
                          "MERN Stack Dev",
                          1000,
                          "React Dev",
                          1000,
                          "I enjoy writing codes",
                          1000,
                      ]}
                    />
                </h1>
                <span className="profile-role-tagline">
                    Knack of building applications with front and back end operations.
                </span>
            </span>
        </div>
        <div className="profile-options">
        <a href="mailto:irohomolola@gmail.com"><button className="btn primary-btn">Hire Me</button></a> 
          <a href="hero pdf" download="Iroh Omolola.pdf"><button className="btn highlighted-btn">Get Resume</button></a>
        </div>
        </div>
        <div className="profile-picture">
<div className="profile-picture-background">
    
</div>
        </div>
      </div>
    </div>
    </main>
  );
};
