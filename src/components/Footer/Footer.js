import React from 'react'
import "./footer.css"

export const Footer = () => {
    return (
           
              <footer>
                <div className="wrapper" style={{"justifyContent":"center"}}>
                  <div>
                  <h3>THANKS FOR VISITING</h3>
                  <p style={{"textAlign":"center"}}>© {new Date().getFullYear()} Hero.</p>  
                  </div> 
                </div>
              </footer>
            );
}
