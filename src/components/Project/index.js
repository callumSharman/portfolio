import './index.css'

function Project({ name, img, desc, technologies }){

  return(
    <div className='projectContainer'>
      <div className='leftSide'></div>

      <div className='rightSide'>
        <h3>{ name }</h3>
        <p>{ desc }</p>
        <p>{ technologies }</p>

      </div>

    </div>
  );
}

export default Project;