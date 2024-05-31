import './index.css'
import linkedInLogo from '../../img/icons8-linkedin.svg';
import gitHubLogo from '../../img/icons8-github.svg';
import goodreadsLogo from '../../img/icons8-goodreads.svg';

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

        <div className='externalLinks'>
          {/* links to socials */}
          <div className='externalLink'>
            <a href="https://www.linkedin.com/in/callum-sharman-366b532ab/" target="_blank" rel="noopener noreferrer">
              <img className='logo' src={linkedInLogo} alt="LinkedIn Logo"/>
            </a>
          </div>
          <div className='externalLink'>
            <a href="https://github.com/callumSharman" target="_blank" rel="noopener noreferrer">
              <img className='logo' src={gitHubLogo} alt="GitHub Logo"/>
            </a>
          </div>
          <div className='externalLink'>
            <a href="https://www.goodreads.com/user/show/165214915-callum-sharman" target="_blank" rel="noopener noreferrer">
              <img className='logo' src={goodreadsLogo} alt="Goodreads Logo"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;