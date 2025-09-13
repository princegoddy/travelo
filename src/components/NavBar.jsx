import { useState } from "react";
import { pageLinks, socialLinks} from "../Data"
import imglogo from "../images/logo.png.webp"

function Navbar() {

//   return (
//     <div className="app">
      
//       <header className="header">
//       <img src={imglogo} className="nav-logo" alt="Travelo" />
//       <button className="header-text">MENU<i class="fa-solid fa-bars"></i></button>
//         <nav className="nav">
//         { pageLinks.map((link)=>{
//           const{id, href, text } = link;

//           return (
//             <li key={id}>
//           <a href={href} className="nav-link"> 
//             {text}
//              </a>
//         </li>
//           )
//         })
//         }
//         </nav>
//         <div className="contact">
//           <span>📞 10(256)-928 256</span>
//         </div>
        
//       <ul className="nav-icons">
//        { socialLinks.map((social) => {
//         const { id, href, icon} = social;
        
//         return (
//           <li key={id}>
//           <a href={href} target="_blank" className="nav-icon"
//             ><i className={icon}></i
//           ></a>
//         </li>
//         )
       
//        })
//       }
//       </ul>
//       </header>
//     </div>
//   );
// }

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="app">
      <header className="header">
        <img src={imglogo} className="nav-logo" alt="Travelo" />
        <button className="header-text menu-toggle" onClick={toggleNav}>
          MENU<i className="fa-solid fa-bars"></i>
        </button>
        <nav className={`nav ${isNavOpen ? 'show' : ''}`}>
          <ul>
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href} className="nav-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="contact">
          <span>📞 10(256)-928 256</span>
        </div>
        <ul className="nav-icons">
          {socialLinks.map((social) => {
            const { id, href, icon } = social;
            return (
              <li key={id}>
                <a href={href}  className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default Navbar;