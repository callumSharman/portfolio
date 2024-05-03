import './index.css'

function Menu({ sections }){
  function scrollToSection(id){
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

  }

  // convert the given sections in html
  const links = sections.map((section, index) => {
    return<li key={index} className='link' onClick={() => scrollToSection(section.toLowerCase())}>
            {section}
          </li>;
  });

  return(
    <>
      <div className='menu'>
        <div className='inPageLinks'>
          {/* links to page areas */}
          <nav><ul>{ links }</ul></nav>
        </div>

        <div className='externalLinks'>
          {/* links to socials */}
          <div className='externalLink'></div>
          <div className='externalLink'></div>
          <div className='externalLink'></div>
        </div>
      </div>
    </>
  );
}

export default Menu;