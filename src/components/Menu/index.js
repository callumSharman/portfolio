import './index.css'
import SocialLinks from '../SocialLinks/index.js'
import { useEffect, useState } from 'react';
import downloadIconGrey from '../../img/downloadGrey.png'
import downloadIconBlue from '../../img/downloadBlue.png'
import resumePDF from '../../pdf/Resume.pdf'

function Menu({ sections }){
  

  const scrollToSection = (id, offset) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

  }

  const handleLinkClick = (section) => {
    if(section.name.toLowerCase() === "resume"){
      window.open(resumePDF, '_blank');
    }


    if(inMobileMode){
      scrollToSection(section.name.toLowerCase(), 35);
      setMoblieMenuOpen(false);
    }
    else{
      scrollToSection(section.name.toLowerCase(), 0);
    }
  }

  const links = sections.map((section, index) => {
    return<li key={index} className='btnContainer'>
            <button className='link'
              onClick={ () => {handleLinkClick(section)} }
              style={{fontSize: section.active ? '20pt': '12pt',
                      fontWeight: section.active ? 'bold': 'normal',
                      // left: (section.name.toLowerCase() === "resume") ? '10.5px':'auto',
                      }}>
              {section.name}
              {/* <img src={ downloadIconGrey } alt='download' className='downloadIcon'
                style={{display: (section.name.toLowerCase() === "resume") ? 'inline': 'none'}}></img> */}
              {/* <img src={ downloadIconBlue } alt='download' className='downloadIcon'
                style={{display: (section.name.toLowerCase() === "resume") ? 'inline': 'none'}}></img> */}
            </button>
          </li>;
  });

  const [inMobileMode, setInMobileMode] = useState(false);
  const [mobileMenuOpen, setMoblieMenuOpen] = useState(true);

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

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, []);

  const areLinksVisible = () => {
    if(!inMobileMode) return true;
    else if(inMobileMode && mobileMenuOpen) return true;
    else if(inMobileMode && !mobileMenuOpen) return false;
  }

  return(
    <>
      <div className='menu' 
        style={{height:mobileMenuOpen ? '100%':'45px',}}>
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
          style={{display:areLinksVisible() ? 'block':'none',}}>

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