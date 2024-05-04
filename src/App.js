import './App.css';
import Menu from './components/Menu/index.js'
import ParticleSystem from './components/ParticleSystem/index.js'

function App() {
  const sections = ['About', 'Projects', 'Skills', 'Resume'];

  return (
  <div className="App">
      <Menu sections={ sections }/>
      
      <div className='main'>
        <div className='mainContent'>
          <h1>CALLUM SHARMAN</h1>
          <h2>&lt; Graduate Software Engineer/Computer Scientist /&gt;</h2>
          Do fugiat ut cupidatat pariatur occaecat dolor ipsum officia anim tempor. Anim officia sint sit laboris. Ipsum enim nostrud officia sit fugiat qui elit laborum duis aliquip est do magna ullamco. Excepteur aliquip mollit enim cillum ad veniam commodo minim deserunt. Do excepteur sint proident aliquip officia exercitation minim quis aliqua adipisicing officia aute. Consequat exercitation anim Lorem consequat magna nulla minim excepteur aliquip.
          
          <ParticleSystem/>
          
          <div className='section' id='about'>
            <h2>ABOUT</h2>
            Voluptate mollit deserunt irure dolor mollit officia et id nisi tempor aliquip do cupidatat do. Sunt elit deserunt ipsum nisi reprehenderit do quis veniam laboris voluptate reprehenderit. Incididunt proident nostrud laboris sit occaecat cupidatat.</div>
          <div className='section' id='projects'>
            <h2>PROJECTS</h2>
            Magna quis Lorem deserunt ut duis eiusmod incididunt elit cupidatat aliquip. Aliquip incididunt ullamco ullamco do eu dolore nostrud nulla voluptate dolor adipisicing nostrud. Nulla elit Lorem irure aliqua consectetur ullamco.</div>
          <div className='section' id='skills'>
            <h2>SKILLS</h2>
            Do et eiusmod ex sunt dolore nostrud. Minim est cupidatat dolor consectetur ex occaecat dolore Lorem officia ex do nisi adipisicing. Qui laborum esse ad ipsum dolor sint excepteur elit veniam aute cillum duis ex excepteur. Nisi occaecat laborum eiusmod laborum fugiat velit aute aliquip excepteur officia aliquip deserunt cillum eiusmod. Sunt esse consequat eiusmod adipisicing laborum labore ea.</div>
          <div className='section' id='resume'>
            <h2>RESUME</h2>
            Ut et labore fugiat est tempor laborum exercitation. Reprehenderit eu velit anim do duis eiusmod nisi duis tempor anim cillum labore officia velit. Quis ullamco do nostrud laborum amet excepteur eu Lorem reprehenderit elit pariatur duis. Ad consequat Lorem ullamco aliquip aliquip nulla occaecat elit. Magna et commodo ut laborum qui esse occaecat proident laborum et sunt laboris culpa.</div>
        </div>
      </div>
  </div>
  );
}

export default App;
