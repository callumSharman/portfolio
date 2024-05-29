import './index.css'
import TechnologyBubble from '../TechnologyBubble';

function Project({ name, img, desc, technologies, date }){

  const technologyBubbles = technologies.map((tech, index) => {
    return <li key={ index }>
              <TechnologyBubble name={ tech }></TechnologyBubble>
           </li>
  })

  return(
    <div className='projectContainer'>
      <div className='leftSide'></div>

      <div className='rightSide'>
        <h3 className='projectName'>{ name } ↗</h3>
        <p>{ desc }</p>
        <ul className='techList'>{ technologyBubbles }</ul>

      </div>

    </div>
  );
}

export default Project;