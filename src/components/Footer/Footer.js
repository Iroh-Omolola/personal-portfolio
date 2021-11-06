import React from 'react'
import "./footer.css"

export const Footer = () => {
    return (
           
              <footer>
                <div className="wrapper">
                  <h3>THANKS FOR VISITING</h3>
                  <p>© {new Date().getFullYear()} Hero.</p> 
                </div>
              </footer>
            );
}
