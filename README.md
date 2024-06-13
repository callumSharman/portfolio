# Portfolio Website
This is my personal portfolio website created using React, HTML, CSS, and JavaScript.

## Operation
### Viewing/Running
Currently it is deployed through GitHub Pages and is viewable here: https://callumsharman.github.io/portfolio/

To run the project locally in development mode use the command `npm start`. This will lauch on port 3000. Access through localhost:3000 on your browser.

To build and deploy an updated version to GitHub Pages use the command `npm run deploy`.

### Extension
#### Projects
To add further projects, add to the projects list in src/App.js

An example of the required information is given below:
```
{
  name: 'Portfolio',
  img: portfolioImg,
  desc:"My personal portfolio website created using React, HTML, CSS, and JavaScript. Take a look around.",
  technologies: ["React", "HTML", "CSS", "JavaScript"],
  link: "https://github.com/callumSharman/portfolio/tree/main",
  clickable: true,
}
```
Where 'img' must be an imported image at the top of the react script.

#### Sections
To add extra section to the page, add to the sections list in src/App.js. All sections except for the first should be listed as not active.

An example of this is given below:
```
{ name: 'Projects', active: false }
```
This make sure to include a div with the className of 'section' and an id corresponding to the given name, capitals are inconsequential.

