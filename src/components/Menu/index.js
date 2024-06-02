import './index.css'
import SocialLinks from '../SocialLinks/index.js'

function Menu({ sections }){
  function scrollToSection(id){
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

  }

  // convert the given sections in html
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
      <div className='menu'>

        

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