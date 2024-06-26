import { useRef, useEffect } from 'react';
import './index.css'

// Parameters for the particle system. Should probably be given when defined
const PARAMS = {
  numInitCircles: 10,
  maxRadius: 150, // - max radius of a particle
  maxLifeTime: 5000, // - max time in frames for particle life
  maxVelocity: 0.2, // - max velocity of particle
  spawnRate: 1, // - number of particles to spawn each frame
  maxNum: 10, // - max number of particles at once
  minNum: 5, // - min number of particles at once NOT CURRENTLY OPERATING
  particleColour: 'rgb(59, 67, 79, 1)', // colour when close to camera, will blend to background when further away
  backgroundColour: 'rgba(23, 26, 31, 1)',
}

function ParticleSystem(props){
  const psRef = useRef(null); // particle system reference

  useEffect(() => {
    const canvas = psRef.current;
  
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = PARAMS.backgroundColour;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let circles = initCircleList(canvas);

    animateCanvas(circles, canvas);
  })


  return(
    <canvas className='systemCanvas' ref={psRef} {...props}></canvas>
  );
}

export default ParticleSystem;


/**
 * generates a list of n cirlces centered randomly within a rectangle
 * @param {HTMLCanvasElement} canvas
 * @returns {Array<{ x: number, y: number, vx: number, vy: number, r: number, t: number }>} - 't' is time remaining
 */
function initCircleList(canvas){
  let circles = [];

  for(let i = 0; i < PARAMS.numInitCircles; i ++){
    circles.push(newCircle(canvas));
  }

  return circles;
}

/**
 * creates a new circle with random values
 * @param {HTMLCanvasElement} canvas
 * @returns {{ x: number, y: number, vx: number, vy: number, r: number, t: number }} - 't' is time remaining
 */
function newCircle(canvas){
  return({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * PARAMS.maxVelocity * 2,
    vy: (Math.random() - 0.5) * PARAMS.maxVelocity * 2,
    r: Math.random() * PARAMS.maxRadius,
    t: Math.random() * PARAMS.maxLifeTime,
  })
}

/**
 * draws a list of circles to the given canvas context
 * @param {Array<{ x: number, y: number, vx: number, vy: number, r: number, t: number }>} circles - List of circles
 * @param {HTMLCanvasElement} canvas
 */
function drawCircles(circles, canvas){
  const ctx = canvas.getContext('2d');


  circles.forEach(circle => {

    // regex pattern to match the last number in the colour string
    let regex = /([\d.]+)(?=\))/;
    let colourA = 1/(PARAMS.maxRadius/circle.r); // dimmer if small, giving perspective
    let colour = PARAMS.particleColour;
    // adjust the A value
    colour = colour.replace(regex, colourA);
    console.log(colour);
    ctx.fillStyle = colour;


    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
    ctx.fill();
  });
}

/**
 * updates a list of cirlces based on some rules and returns the updated list
 * @param {Array<{ x: number, y: number, vx: number, vy: number, r: number, t: number }>} circles
 * @param {HTMLCanvasElement} canvas
 * @param {number} numToSpawn - How many particles should be spawn in this update
 * @returns {Array<{ x: number, y: number, vx: number, vy: number, r: number, t: number }>}
 */
function updateCircles(circles, canvas, numToSpawn){

  // remove dead circles from the list
  circles = circles.filter(circle => circle.t >= 0);

  circles.forEach(circle => {
    circle.x += circle.vx;
    circle.y += circle.vy;
    circle.t -= 1;
  });

  for(let i = 1; i <= numToSpawn; i ++){
    if(circles.length < PARAMS.maxNum) {
      circles.push(newCircle(canvas, PARAMS.maxRadius, PARAMS.maxLifeTime, PARAMS.maxVelocity));
    }
  }

  return circles
}

/**
 * 
 * @param {Array<{ x: number, y: number, vx: number, vy: number, r: number, t: number }>} circles 
 * @param {HTMLCanvasElement} canvas 
 * @param {number} numToSpawn - How many particles to spawn this iteration, set to 0 by default
 */
function animateCanvas(circles, canvas, numToSpawn = 0){

  // clear the canvas
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0, canvas.width, canvas.height);

  if(PARAMS.spawnRate >= 1) numToSpawn = PARAMS.spawnRate
  else numToSpawn += PARAMS.spawnRate;

  circles = updateCircles(circles, canvas, numToSpawn);

  // reset the numToSpawn if just spawned and the spawnRate is less than 1
  if((PARAMS.spawnRate < 1) && (numToSpawn >= 1)){
    numToSpawn = 0;
  }

  drawCircles(circles, canvas);


  // recursively loop through itself to animate

  // tied to framerate!!
  window.requestAnimationFrame(() => animateCanvas(circles, canvas, numToSpawn));

  // not tied to framerate BUT extremely jittery (interval is in milliseconds)
  //setTimeout(() => animateCanvas(circles, canvas, interval), interval);
}