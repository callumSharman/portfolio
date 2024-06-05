import { useState } from 'react';
import './index.css'

function MenuButton({ toggleMenu }){
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    toggleMenu();
    setMenuActive(!menuActive);
  }

  return(
    <div className='menuHeader' 
      style={{backgroundColor:menuActive ? 'rgba(255, 255, 255, 0)': '#133877de',
              backdropFilter:menuActive ? 'blur(0px)': 'blur(2px)',
              borderColor:menuActive ? 'rgba(255, 255, 255, 0)': '#2d76f318'
      }}>
      <div className='menuButton' onClick={ handleClick }
        style={{display:menuActive ? 'flex': 'none',}}>
        X
      </div>
      <div className='menuButton' onClick={ handleClick } 
        style={{display:menuActive ? 'none': 'flex',}}>
        <div>
          <div class="menuBtnLine"></div><div class="menuBtnLine"></div><div class="menuBtnLine"></div>
        </div>
      </div>
    </div>
  );
}

export default MenuButton;