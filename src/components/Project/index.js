import './index.css'
import TechnologyBubble from '../TechnologyBubble';
import {useState} from 'react'
import { click } from '@testing-library/user-event/dist/click';

function Project({ name, img, desc, technologies, link, clickable }){

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
      onClick={() => {if(clickable) window.open(link, '_blank')}} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{cursor:clickable ? 'pointer':'default',
              backgroundColor: isHover && clickable ? 'var(--colour-four)': 'rgba(255, 255, 255, 0)',
              backdropFilter: isHover && clickable ? 'blur(2px)': 'blur(0px)',
              borderColor: isHover && clickable ? '#2d76f318': 'rgba(255, 255, 255, 0)',
      }}>

      <div className='imgSectionBefore'>
        <img className='imgContainer' src={img} alt="project logo"/>
      </div>

      <div className='descSection'>
        <h3 className='projectName' 
          style={{textDecoration: isHover && clickable ? 'underline' : 'none',
                  transition: '0.01s ease-in-out',
          }}>
          { name } 
          <span style={{display:clickable ? 'inline': 'none'}}> ↗</span>
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