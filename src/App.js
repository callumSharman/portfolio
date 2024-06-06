import './App.css';
import ParticleSystem from './components/ParticleSystem/index.js'
import SectionHeading from './components/SectionHeading/index.js';
import Project from './components/Project/index.js';
import SocialLinks from './components/SocialLinks/index.js';


import rayTracerImg from './img/raytracer/glass_final_highres.png'
import rayTracerImg2 from './img/raytracer/glass_metal_highres.png'
import bellsBestCutsImg from './img/bellsbestcuts/bells1.JPG'
import cipherImg from './img/CIPHER/ingame.JPG'
import glitchShaderImg from './img/glitchShader/shaderExample.JPG'
import infextionAI from './img/infextionAI/infextionAI2.JPG'
import MenuManager from './components/MenuManager/index.js';

function App() {
  const sections = [
    { name: 'About', active: true },
    { name: 'Projects', active: false },
    { name: 'Contact', active: false },
    { name: 'Resume', active: false },
  ];

  const projects = [{
                      name: 'COMP30022 - IT Project (capstone)',
                      img: rayTracerImg2,
                      desc: "A Django web application, integrated with Canvas LMS, handling student extension requests and queries. Created collaboratively in a team of five, liasing with university faculty clients to deliver the solution. Utilised agile ceremonies to enable smooth and efficient development.",
                      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQL", "Docker"],
                      link: "https://github.com/jkay-y/IT-Project-6-people",
                    },
                    {
                      name: "Bell's Best Cuts", 
                      img: bellsBestCutsImg, 
                      desc:"Website custom designed and developed for Bell's Best Cuts, utilising Node.js, HTML, CSS and JavaScript. Throughout the project, I effectively communicated with the client, organised meetings, and led discussions to ensure adherence to their requirements.",
                      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
                      link: "https://bellsbestcuts.com",
                    },
                    {
                      name: 'Portfolio',
                      desc:"My personal portfolio website created using React, HTML, CSS, and JavaScript. Take a look around.",
                      technologies: ["React", "HTML", "CSS", "JavaScript"],
                      link: "https://github.com/callumSharman/portfolio/tree/main",
                    },
                    {
                      name: 'RayTracer', 
                      img: rayTracerImg, 
                      desc: "Ray tracing engine developed in C, designed to simulate indirect lighting and various surface types for spheres. The engine renders 3D scenes by tracing the path of light rays as they interact with objects, producing realistic images with reflections, refractions, and shadows.",
                      technologies: ["C"],
                      link: "https://github.com/callumSharman/RayTracer",
                    },
                    {
                      name: 'CIPHER',
                      img: cipherImg,
                      desc: "A fast-paced dungeon crawling game set in an oppressive cyberpunk world, offering high replayability through randomized upgrades. Developed in a group of four in the Unity game engine with all game logic written in C#, featuring custom shaders written in HLSL.",
                      technologies: ["C#", "HLSL", "Unity"],
                      link: "https://github.com/COMP30019/project-2-s3gfault",
                    },
                    {
                      name: 'HLSL Glitch Shader',
                      img: glitchShaderImg,
                      desc: "Glitch shader written in HLSL, designed for use on 3D models in the Unity game engine. This shader creates a visually striking glitch effect by dynamically manipulating the vertices and texture colours of the models, simulating the appearance of digital distortion.",
                      technologies: ["HLSL", "C#"],
                      link: "https://github.com/callumSharman/glitch-shader",
                    },
                    {
                      name: 'Infexion AI',
                      img: infextionAI,
                      desc: "Competitive AI developed in a group of two. Designed to play the game “Infexion”, written in python. Utilises a Monte Carlo heuristic tree search algorithm to determine moves.",
                      technologies: ["Python"],
                      link: "https://github.com/callumSharman/COMP30024_Project_PartB",
                    },];

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
      <MenuManager pageSections={ sections }></MenuManager>

      {/* <ParticleSystem width={windowWidth} height={windowHeight}/> */}
      <div className='main'>
        <div className='mainContent'>
          <h1>CALLUM SHARMAN</h1>
          <h2 className='subTitle'>&lt; Graduate Software Engineer - Computer Scientist - Freelancer /&gt;</h2>
          <p></p>
          <div className='socialIcons'><SocialLinks></SocialLinks></div>

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

          <div className='section' id='projects'>
            <SectionHeading text={"PROJECTS"}></SectionHeading>
            { projectItems }
          </div>

          <div className='section' id='contact'>
            <SectionHeading text={"CONTACT"}></SectionHeading>
            Do et eiusmod ex sunt dolore nostrud. Minim est cupidatat dolor consectetur ex occaecat dolore Lorem officia ex do nisi adipisicing. Qui laborum esse ad ipsum dolor sint excepteur elit veniam aute cillum duis ex excepteur. Nisi occaecat laborum eiusmod laborum fugiat velit aute aliquip excepteur officia aliquip deserunt cillum eiusmod. Sunt esse consequat eiusmod adipisicing laborum labore ea.
          </div>

          <div className='section' id='resume'>
            <SectionHeading text={"RESUME"}></SectionHeading>
            Ut et labore fugiat est tempor laborum exercitation. Reprehenderit eu velit anim do duis eiusmod nisi duis tempor anim cillum labore officia velit. Quis ullamco do nostrud laborum amet excepteur eu Lorem reprehenderit elit pariatur duis. Ad consequat Lorem ullamco aliquip aliquip nulla occaecat elit. Magna et commodo ut laborum qui esse occaecat proident laborum et sunt laboris culpa.
            Non nulla magna excepteur exercitation consectetur veniam id. Ullamco adipisicing cupidatat quis dolore ipsum qui anim adipisicing cupidatat incididunt exercitation esse elit ipsum. Sit deserunt occaecat est non dolor dolore occaecat velit aliquip cupidatat. Lorem labore quis cillum nostrud Lorem enim do Lorem ut aliqua quis. Adipisicing anim ut officia pariatur do.
          </div>
          
        </div>
      </div>
  </div>
  );
}

export default App;