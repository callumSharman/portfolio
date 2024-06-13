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
Then make sure to include a div with the className of 'section' and an id corresponding to the given name, capitals are inconsequential.

## Retrospective
This project has given me a thorough understanding of the concepts and syntax needed to write a React application. I enjoyed using it and would love to work on more projects utilising it in the future. 

I learnt during this project the importance of prior planning on structure of complex elements. Initially, when designing the menu I put it in its own component and ignored the mobile version. Once I began making the mobile version I caused a lot of issues because I jumped straight into a very poorly thought out implementation and wasted time trying to get that functional. Instead I should've taken a step back, like I ended up doing, and thought it through more initially.

This application has been designed to be very easily modified and changed and so I may continue to update it periodically with style changes and more.