import { socialLinks } from "../Data";
import imglogo from "../images/footer_logo.png"

const Footer = () => {
  return (
    <footer className="footer">
       <div className="footer-container">
        <div className="footer-one">
           <div> <img src={imglogo} alt="" /></div>
          <p>
            5th Flora, 700/D Kings Road, Green<br /> Lane
            New York-1782<br />
            +10 367 826 2567<br />
           contact@carpenter.com
          </p>
          <div className="footer-icons">
             { socialLinks.map((social) => {
                    const { id, href, icon} = social
            
                    return(
                      <li key={id}>
                      <a href={href} target="_blank" className="footer-icon"
                        ><i className={icon}></i></a>
                    </li>
                    )
                   })
                   }
          </div>
        </div>
        {/* <div className="footer-center">  */}
        <div className="footer-three">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-three">
          <h4>Popular Destination</h4>
          <ul>
            <li><a href="#">Indonesia</a></li>
            <li><a href="#">India</a></li>
            <li><a href="#">Italy</a></li>
            <li><a href="#">France</a></li>
            <li><a href="#">America</a></li>
            <li><a href="#">Switzerland</a></li>
            <li><a href="#">Canada</a></li>
            <li><a href="#">England</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Instagram</h4>
          {/* You can add Instagram widget or placeholder here */}
        </div>
        {/* </div> */}
        </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2024 All rights reserved | This template is made with ❤️ by <a href="#">Colorlib</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
