import Menu from '../Menu/index.js';
import { useState, useEffect } from 'react';

function MenuManager({ pageSections }){
  const [sections, setSections] = useState(pageSections);

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
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })


  return(
    <>
      {/* menu button only visible on mobile */}
      {/* <MenuButton></MenuButton> */}
      <Menu sections={ sections }/>
    </>
  );
}

export default MenuManager;