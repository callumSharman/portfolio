import { useState } from 'react';
import './index.css'

function MenuButton(){
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive(!menuActive);
  }

  return(
    <>
      <div className='menuButton' onClick={handleClick}
        style={{display:menuActive ? 'flex': 'none',}}>
        X
      </div>
      <div className='menuButton' onClick={handleClick} 
        style={{display:menuActive ? 'none': 'flex',}}>
        =
      </div>
    </>
  );
}

export default MenuButton;