import React from "react";
import "./header.css"

const Header = () => {
  return (
      <div className="nav">
          <a href="/#projects" className="menu-item">
            Projects
          </a>
          <a   href="/#about" className="menu-item">
            About
          </a>
          <a href="/#contact" className="menu-item" >
            Contact
          </a>
        
      </div>
  );
};

export default Header;
