import './App.css';
import { useState, useEffect } from 'react';
import ParticleSystem from './components/ParticleSystem/index.js'
import SectionHeading from './components/SectionHeading/index.js';
import Project from './components/Project/index.js';
import SocialLinks from './components/SocialLinks/index.js';
import MenuManager from './components/MenuManager/index.js';
import ContactSection from './components/ContactSection/index.js';


import rayTracerImg from './img/raytracer/glass_final_highres.png'
import rayTracerImg2 from './img/raytracer/glass_metal_highres.png'
import bellsBestCutsImg from './img/bellsbestcuts/bells1.JPG'
import cipherImg from './img/CIPHER/ingame.JPG'
import glitchShaderImg from './img/glitchShader/shaderExample.JPG'
import infextionAI from './img/infextionAI/infextionAI2.JPG'
import portfolioImg from './img/portfolio/portfolio.JPG'
import it6pImg from './img/capstone/it6p-light.JPG'


function App() {
  const sections = [
    { name: 'About', active: true },
    { name: 'Projects', active: false },
    { name: 'Contact', active: false },
    { name: 'Resume', active: false},
  ];

  const projects = [{
                      name: 'COMP30022 - IT Project (capstone)',
                      img: it6pImg,
                      desc: "A Django web application, integrated with Canvas LMS, handling student extension requests and queries. Created collaboratively in a team of five, liasing with university faculty clients to deliver the solution. Utilised agile ceremonies to enable smooth and efficient development.",
                      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQL", "Docker"],
                      link: "https://github.com/jkay-y/IT-Project-6-people",
                      clickable: false,
                    },
                    {
                      name: "Bell's Best Cuts", 
                      img: bellsBestCutsImg, 
                      desc:"Website custom designed and developed for Bell's Best Cuts, utilising Node.js, HTML, CSS and JavaScript. Throughout the project, I effectively communicated with the client, organised meetings, and led discussions to ensure adherence to their requirements.",
                      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
                      link: "https://bellsbestcuts.com",
                      clickable: true,
                    },
                    {
                      name: 'Portfolio',
                      img: portfolioImg,
                      desc:"My personal portfolio website created using React, HTML, CSS, and JavaScript. Take a look around.",
                      technologies: ["React", "HTML", "CSS", "JavaScript"],
                      link: "https://github.com/callumSharman/portfolio/tree/main",
                      clickable: true,
                    },
                    {
                      name: 'RayTracer', 
                      img: rayTracerImg, 
                      desc: "Ray tracing engine developed in C, designed to simulate indirect lighting and various surface types for spheres. The engine renders 3D scenes by tracing the path of light rays as they interact with objects, producing realistic images with reflections, refractions, and shadows.",
                      technologies: ["C"],
                      link: "https://github.com/callumSharman/RayTracer",
                      clickable: true,
                    },
                    {
                      name: 'CIPHER',
                      img: cipherImg,
                      desc: "A fast-paced dungeon crawling game set in an oppressive cyberpunk world, offering high replayability through randomized upgrades. Developed in a group of four in the Unity game engine with all game logic written in C#, featuring custom shaders written in HLSL.",
                      technologies: ["C#", "HLSL", "Unity"],
                      link: "https://github.com/COMP30019/project-2-s3gfault",
                      clickable: false,
                    },
                    {
                      name: 'HLSL Glitch Shader',
                      img: glitchShaderImg,
                      desc: "Glitch shader written in HLSL, designed for use on 3D models in the Unity game engine. This shader creates a visually striking glitch effect by dynamically manipulating the vertices and texture colours of the models, simulating the appearance of digital distortion.",
                      technologies: ["HLSL", "C#"],
                      link: "https://github.com/callumSharman/glitch-shader",
                      clickable: true,
                    },
                    {
                      name: 'Infexion AI',
                      img: infextionAI,
                      desc: "Competitive AI developed in a group of two. Designed to play the game “Infexion”, written in python. Utilises a Monte Carlo heuristic tree search algorithm to determine moves.",
                      technologies: ["Python"],
                      link: "https://github.com/callumSharman/COMP30024_Project_PartB",
                      clickable: false,
                    },];

  const projectItems = projects.map(project => {
    return(<Project name={ project.name }
                    img={ project.img } 
                    desc={ project.desc } 
                    technologies={ project.technologies }
                    link={ project.link }
                    clickable={ project.clickable }></Project>)
  });

  const [inMobileMode, setInMobileMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 768) setInMobileMode(true); 
      else setInMobileMode(false);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
  <div className="App">
      <MenuManager pageSections={ sections }></MenuManager>
      <div className='main'>
        <div className='mainContent'>
          <h1>CALLUM SHARMAN</h1>
          <h2 className='subTitle' style={{display:inMobileMode ? 'none': 'inline'}}>
            &lt; Graduate Software Engineer - Computer Scientist - Freelancer /&gt;
          </h2>
          <h2 className='subTitle' style={{display:inMobileMode ? 'inline': 'none'}}>
            Graduate Software Engineer<br></br>Computer Scientist<br></br>Freelancer
          </h2>
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

          

          <ContactSection></ContactSection>

          <div className='section' id='footer'>
            Designed and developed in Visual Studio Code with React, deployed through GitHub Pages
          </div>
          
        </div>
      </div>
  </div>
  );
}

export default App;