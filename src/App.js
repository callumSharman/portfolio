import './App.css';
import Menu from './components/Menu/index.js'
import ParticleSystem from './components/ParticleSystem/index.js'

function App() {
  const sections = ['About', 'Projects', 'Skills', 'Resume'];
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
//   style={{
//     position: 'fixed',
//     zIndex: -1
//   }}
  return (
  <div className="App">
      <Menu sections={ sections }/>
      {/* <ParticleSystem width={windowWidth} height={windowHeight}/> */}
      <div className='main'>
        <div className='mainContent'>
          <h1>CALLUM SHARMAN</h1>
          <h2>&lt; Graduate Software Engineer - Computer Scientist - Freelancer /&gt;</h2>
          Concise description of me here

          <div className='section' id='about'>
            <h2>ABOUT</h2>
            I'm a recent graduate from the University of Melbourne, holding a Bachelor of Science in Computing and Software Systems. I thrive on tackling complex projects and 
            delivering innovative solutions.
            <br></br><br></br>
            My experience includes full-stack development using Django and Node.js, as well as creating custom web applications that meet client needs. I’ve successfully managed 
            projects from start to finish, ensuring clear communication and adherence to client requirements. 
            <br></br><br></br>
            My passion for technology drives me to continually learn and grow, making meaningful contributions in fast-paced environments. 
            I am excited to bring my diverse skill set and enthusiasm for problem-solving to new challenges.
          </div>

          <div className='section' id='projects'>
            <h2>PROJECTS</h2>
            Magna quis Lorem deserunt ut duis eiusmod incididunt elit cupidatat aliquip. Aliquip incididunt ullamco ullamco do eu dolore nostrud nulla voluptate dolor adipisicing nostrud. Nulla elit Lorem irure aliqua consectetur ullamco.
          </div>

          <div className='section' id='skills'>
            <h2>SKILLS</h2>
            Do et eiusmod ex sunt dolore nostrud. Minim est cupidatat dolor consectetur ex occaecat dolore Lorem officia ex do nisi adipisicing. Qui laborum esse ad ipsum dolor sint excepteur elit veniam aute cillum duis ex excepteur. Nisi occaecat laborum eiusmod laborum fugiat velit aute aliquip excepteur officia aliquip deserunt cillum eiusmod. Sunt esse consequat eiusmod adipisicing laborum labore ea.
          </div>

          <div className='section' id='resume'>
            <h2>RESUME</h2>
            Ut et labore fugiat est tempor laborum exercitation. Reprehenderit eu velit anim do duis eiusmod nisi duis tempor anim cillum labore officia velit. Quis ullamco do nostrud laborum amet excepteur eu Lorem reprehenderit elit pariatur duis. Ad consequat Lorem ullamco aliquip aliquip nulla occaecat elit. Magna et commodo ut laborum qui esse occaecat proident laborum et sunt laboris culpa.
          </div>
          
        </div>
      </div>
  </div>
  );
}

export default App;
