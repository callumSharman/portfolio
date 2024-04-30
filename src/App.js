import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/index.js'

function App() {
  const [sideMenuWidth, setSideMenuWidth] = useState("");
  const [sideMenuZIndex, setSideMenuZIndex] = useState("");


  function onMenuClick(){
    setSideMenuWidth("66vw");
    setSideMenuZIndex("100");
  }

  return (
  <>
    <Menu/>



    
    <div className='sideMenu' style={{width:sideMenuWidth, zIndex:sideMenuZIndex}}>
      <p></p>

      <div className='menuButton' onClick={onMenuClick}>
        =

      </div>

    </div>
    <div className="App">
      <div className="appContents">
        <h1>Callum Sharman</h1>
        <p>
          -
          <br></br>
          Consequat laborum ea reprehenderit consequat officia ea. Ad dolore ipsum proident Lorem. Qui incididunt laborum duis enim Lorem cillum Lorem laboris. Irure commodo velit voluptate qui ea anim tempor ex reprehenderit culpa. Est nulla culpa esse do aliqua incididunt aliqua anim.
          Cillum cillum id mollit elit commodo labore pariatur enim ex esse non ipsum fugiat. Qui laboris cupidatat consequat sit pariatur nulla ex cupidatat eu mollit anim elit. Tempor cillum elit laborum do aute sunt fugiat. Fugiat reprehenderit duis adipisicing sit commodo ut sit cupidatat consequat ullamco ullamco Lorem magna cupidatat. Nostrud aute excepteur anim adipisicing Lorem cillum laborum. Ea nisi esse et consectetur qui consequat tempor amet laboris officia elit veniam eu ea.
          <br></br>
          -
        </p>

        <div className='proj1'>
          Project1
        </div>

        <div className='proj2'>
          Project2
        </div>
      </div>
    </div>

    <div className='footer'>

    </div>
  </>
  );
}

export default App;
