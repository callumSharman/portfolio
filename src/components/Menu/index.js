import './index.css'
import SocialLinks from '../SocialLinks/index.js'
import { useState } from 'react';

function Menu({ sections }){
  const [inMobileMode, setInMobileMode] = useState(false);
  const [mobileMenuOpen, setMoblieMenuOpen] = useState(true);

  function scrollToSection(id){
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

  }

  const links = sections.map((section, index) => {
    return<li key={index} 
              style={{fontSize: section.active ? '20pt': '12pt',
                      fontWeight: section.active ? 'bold': 'normal',
              }} 
              className='link' 
              onClick={() => scrollToSection(section.name.toLowerCase())}>
            {section.name}
          </li>;
  });

  return(
    <>
      <div className='menu' style={{height:mobileMenuOpen ? '100%':'60px'}}>
        <div style={{display:inMobileMode ? 'block':'none'}}>
          <div className='menuButton' onClick={ () => setMoblieMenuOpen(!mobileMenuOpen) }
            style={{display:mobileMenuOpen ? 'flex': 'none',}}>
            X
          </div>
          <div className='menuButton' onClick={ () => setMoblieMenuOpen(!mobileMenuOpen) }
            style={{display:mobileMenuOpen ? 'none': 'flex',}}>
            <div>
              <div className="menuBtnLine"></div><div className="menuBtnLine"></div><div className="menuBtnLine"></div>
            </div>
          </div>
        </div>

        <div className='inPageLinks'>

          {/* links to page areas */}
          <nav><ul>{ links }</ul></nav>
        </div>
        <div className='socialLinks'>
          <SocialLinks></SocialLinks>
        </div>
      </div>
    </>
  );
}

export default Menu;