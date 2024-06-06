import './index.css'
import SocialLinks from '../SocialLinks/index.js'
import { useEffect, useState } from 'react';

function Menu({ sections }){
  const [inMobileMode, setInMobileMode] = useState(false);
  const [mobileMenuOpen, setMoblieMenuOpen] = useState(true);

  function scrollToSection(id){
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  const links = sections.map((section, index) => {
    return<li key={index} className='btnContainer'>
            <button className='link'
              onClick={() => scrollToSection(section.name.toLowerCase())}
              style={{fontSize: section.active ? '20pt': '12pt',
                      fontWeight: section.active ? 'bold': 'normal',}}>
              {section.name}
            </button>
          </li>;
  });

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 768){
        setInMobileMode(true);
        setMoblieMenuOpen(false); // closes menu
      } else {
        setInMobileMode(false);
        setMoblieMenuOpen(true); // opens the full menu back up
      }
    }

    if (!inMobileMode){ document.body.style.overflow = '';}
    else if (mobileMenuOpen && inMobileMode) {document.body.style.overflow = 'hidden';}
    else {document.body.style.overflow = '';}

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  });

  const areLinksVisible = () => {
    if(!inMobileMode) return true;
    else if(inMobileMode && mobileMenuOpen) return true;
    else if(inMobileMode && !mobileMenuOpen) return false;
  }

  return(
    <>
      <div className='menu' style={{height:mobileMenuOpen ? '100%':'60px'}}>
        <div style={{display:inMobileMode ? 'block':'none',
        }}>
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

        <div className='inPageLinks' 
          style={{display:areLinksVisible() ? 'block':'none'}}>

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