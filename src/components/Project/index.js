import './index.css'
import TechnologyBubble from '../TechnologyBubble';
import {useState} from 'react'

function Project({ name, img, desc, technologies, link }){

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const technologyBubbles = technologies.map((tech, index) => {
    return <li key={ index }>
              <TechnologyBubble name={ tech }></TechnologyBubble>
           </li>
  });

  

  return(
    <div className='projectContainer' 
      onClick={() => window.open(link, '_blank')} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      <div className='imgSectionBefore'>
        <img className='imgContainer' src={img} alt="project logo"/>
      </div>

      <div className='descSection'>
        <h3 className='projectName' 
          style={{textDecoration: isHover ? 'underline' : 'none',
                  transition: '0.01s ease-in-out',
          }}>
          { name } ↗
        </h3>
        <p>{ desc }</p>
        <ul className='techList'>{ technologyBubbles }</ul>

      </div>

      <div className='imgSectionAfter'>
        <img className='imgContainer' src={img} alt="project logo"/>
      </div>

    </div>
  );
}

export default Project;