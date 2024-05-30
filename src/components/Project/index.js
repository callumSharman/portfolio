import './index.css'
import TechnologyBubble from '../TechnologyBubble';

function Project({ name, img, desc, technologies, link }){

  const technologyBubbles = technologies.map((tech, index) => {
    return <li key={ index }>
              <TechnologyBubble name={ tech }></TechnologyBubble>
           </li>
  })

  return(
    <div className='projectContainer' onClick={() => window.open(link, '_blank')}>
      <div className='leftSide'>
        <img className='imgContainer' src={img} alt="project logo"/>
      </div>

      <div className='rightSide'>
        <h3 className='projectName'>{ name } ↗</h3>
        <p>{ desc }</p>
        <ul className='techList'>{ technologyBubbles }</ul>

      </div>

    </div>
  );
}

export default Project;