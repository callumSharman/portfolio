import Menu from '../Menu/index.js';
import MenuButton from '../MenuButton/index.js';
import { useState, useEffect } from 'react';

function MenuManager(){
  const [sections, setSections] = useState([
    { name: 'About', active: true },
    { name: 'Projects', active: false },
    { name: 'Contact', active: false },
    { name: 'Resume', active: false },
  ]);

  const [menuActive, setMenuActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  }

  const determineActiveSection = (section, scrollHeight) => {
    // may need to add a condition for when you're at the bottom of the page
    const element = document.getElementById(section.name.toLowerCase());
    const { top } = element.getBoundingClientRect();
    const elemHeight = top + window.scrollY;

    // if the height of the current section is <= height scrolled to + 20% of the window height
    // to make the section become active when its lower on the page, inc the % from 20
    if(elemHeight <= (scrollHeight + (window.innerHeight * 0.2))){
      return true;
    }
    else return false;
  }

  useEffect(() => {

    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const sectionsLen = sections.length;

      // work backwards through the sections, as soon as one is found to be 
      // active then break. This will leave only the correct section active

      // find that active section
      let activeSection = null;

      for(let i = sectionsLen - 1; i >= 0; i --){
        const section = sections[i];
        if(determineActiveSection(section, scrollHeight)) {
          activeSection = section;
          break;
        }
      }

      // no active section found, it must be the top one
      if (activeSection === null){
        activeSection = sections[0];
      }

      // set the active section that you found earlier
      setSections(sections.map(section => ({
        ...section,
        active: activeSection.name.toLowerCase() === section.name.toLowerCase()
      })));     
    }

    const handleResize = () => {
      if(window.innerWidth <= 768){
        setMobileMenuActive(true);
      } else{
        setMobileMenuActive(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  })


  return(
    <>
      {/* menu button only visible on mobile */}
      <MenuButton toggleMenu={ toggleMenu } mobileMenuActive={ mobileMenuActive }></MenuButton>
      
      <Menu sections={ sections } menuActive={ menuActive } mobileMenuActive={ mobileMenuActive }/>
    </>
  );
}

export default MenuManager;