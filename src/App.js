import './App.css';
import Menu from './components/Menu/index.js'
import ParticleSystem from './components/ParticleSystem/index.js'
import SectionHeading from './components/SectionHeading/index.js';
import Project from './components/Project/index.js';


import rayTracerImg from './img/raytracer/glass_final_highres.png'
import bellsBestCutsImg from './img/bellsbestcuts/bells1.JPG'

function App() {
  const sections = ['About', 'Projects', 'Contact', 'Resume'];

  const projects = [
                    {name: 'RayTracer', 
                      img: rayTracerImg, 
                      desc: "Ray tracing engine developed in C, designed to simulate indirect lighting and various surface types for spheres. The engine renders 3D scenes by tracing the path of light rays as they interact with objects, producing realistic images with reflections, refractions, and shadows.",
                      technologies: ["C"],
                      link: "https://github.com/callumSharman/RayTracer",
                    },
                    
                    {name: "Bell's Best Cuts", 
                      img: bellsBestCutsImg, 
                      desc:"Website custom designed and developed for Bell's Best Cuts, utilising Node.js, HTML, CSS and JavaScript. Throughout the project, I effectively communicated with the client, organised meetings, and led discussions to ensure adherence to their requirements.",
                      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
                      link: "https://bellsbestcuts.com",
                    },
                    
                    {name: 'Portfolio',
                      technologies: ["React.js", "HTML", "CSS", "JavaScript"],
                      link: "https://callumsharman.github.io/portfolio/",
                    }];

  const projectItems = projects.map(project => {
    return(<Project name={project.name}
                    img={project.img} 
                    desc={project.desc} 
                    technologies={ project.technologies }
                    link={ project.link}></Project>)
  });

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  return (
  <div className="App">
      <Menu sections={ sections }/>
      {/* <ParticleSystem width={windowWidth} height={windowHeight}/> */}
      <div className='main'>
        <div className='mainContent'>
          <h1>CALLUM SHARMAN</h1>
          <h2>&lt; Graduate Software Engineer - Computer Scientist - Freelancer /&gt;</h2>
          <p></p>

          <div className='section' id='projects'>
            <SectionHeading text={"PROJECTS"}></SectionHeading>
            { projectItems }
          </div>

          <div className='section' id='about'>
            <SectionHeading text={"ABOUT"}></SectionHeading>
            I'm a recent graduate from the University of Melbourne, holding a Bachelor of Science in Computing and Software Systems. I thrive on tackling complex projects and 
            delivering innovative solutions.
            <br></br><br></br>
            My experience includes full-stack development using Django and Node.js, as well as creating custom web applications that meet client needs. I’ve successfully managed 
            projects from start to finish, ensuring clear communication and adherence to client requirements. 
            <br></br><br></br>
            My passion for technology drives me to continually learn and grow, making meaningful contributions in fast-paced environments. 
            I am excited to bring my diverse skill set and enthusiasm for problem-solving to new challenges.
          </div>

          <div className='section' id='contact'>
            <SectionHeading text={"CONTACT"}></SectionHeading>
            Do et eiusmod ex sunt dolore nostrud. Minim est cupidatat dolor consectetur ex occaecat dolore Lorem officia ex do nisi adipisicing. Qui laborum esse ad ipsum dolor sint excepteur elit veniam aute cillum duis ex excepteur. Nisi occaecat laborum eiusmod laborum fugiat velit aute aliquip excepteur officia aliquip deserunt cillum eiusmod. Sunt esse consequat eiusmod adipisicing laborum labore ea.
          </div>

          <div className='section' id='resume'>
            <SectionHeading text={"RESUME"}></SectionHeading>
            Ut et labore fugiat est tempor laborum exercitation. Reprehenderit eu velit anim do duis eiusmod nisi duis tempor anim cillum labore officia velit. Quis ullamco do nostrud laborum amet excepteur eu Lorem reprehenderit elit pariatur duis. Ad consequat Lorem ullamco aliquip aliquip nulla occaecat elit. Magna et commodo ut laborum qui esse occaecat proident laborum et sunt laboris culpa.
          </div>
          
        </div>
      </div>
  </div>
  );
}

export default App;
