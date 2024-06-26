import './index.css'

function SectionHeading({ text }){

  return(
    <div className='headerContainer'>
      <h2>{text}</h2>
      <hr className="divider"></hr>
    </div>
  );
}

export default SectionHeading;