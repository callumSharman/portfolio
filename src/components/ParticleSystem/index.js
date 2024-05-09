import { useRef, useEffect } from 'react';
import './index.css'

function ParticleSystem(props){
  const psRef = useRef(null); // particle system reference

  useEffect(() => {
    const canvas = psRef.current;
  
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#171a1f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const numCircles = 100, maxRadius = 4, maxLifeTime = 5000;
    let circles = initCircleList(numCircles, canvas, maxRadius, maxLifeTime);

    const spawnRate = 0.05;
    animateCanvas(circles, canvas, spawnRate, maxRadius, maxLifeTime);
  })


  return(
    <canvas className='systemCanvas' ref={psRef} {...props}></canvas>
  );
}

export default ParticleSystem;


/**
 * generates a list of n cirlces centered randomly within a rectangle
 * of 'width' and 'height' with a random radius up to 'maxR'
 * @param {number} n - Number of circles
 * @param {HTMLCanvasElement} canvas
 * @param {number} maxRadius
 * @param {number} maxLifeTime - Maximum time in frames for particle life
 * @returns {Array<{ x: number, y: number, r: number, t: number }>} - 't' is time remaining
 */
function initCircleList(n, canvas, maxRadius, maxLifeTime){
  let circles = [];

  for(let i = 0; i < n; i ++){
    circles.push(newCircle(canvas, maxRadius, maxLifeTime));
  }

  return circles;
}

/**
 * creates a new circle with random values
 * @param {HTMLCanvasElement} canvas
 * @param {number} maxRadius
 * @param {number} maxLifeTime - Maximum time in frames for particle life
 * @returns {{ x: number, y: number, r: number, t: number }} - 't' is time remaining
 */
function newCircle(canvas, maxRadius, maxLifeTime){

  return({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * maxRadius,
    t: Math.random() * maxLifeTime,
  })
}

/**
 * draws a list of circles to the given canvas context
 * @param {Array<{ x: number, y: number, r: number, t: number }>} circles - List of circles
 * @param {HTMLCanvasElement} canvas
 */
function drawCircles(circles, canvas){
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#343b47'; // circle colour

  circles.forEach(circle => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
    ctx.fill();
  });
}

/**
 * updates a list of cirlces based on some rules and returns the updated list
 * @param {Array<{ x: number, y: number, r: number, t: number }>} circles
 * @param {HTMLCanvasElement} canvas
 * @param {number} numToSpawn - How many particles should be spawn in this update
 * @param {number} maxRadius - Maximum radius of a particle
 * @param {number} maxLifeTime - Maximum time in frames for particle life
 * @returns {Array<{ x: number, y: number, r: number, t: number }>}
 */
function updateCircles(circles, canvas, numToSpawn, maxRadius, maxLifeTime){

  // remove dead circles from the list
  circles = circles.filter(circle => circle.t >= 0);

  circles.forEach(circle => {
    circle.t -= 1;
  });

  for(let i = 1; i <= numToSpawn; i ++){
    circles.push(newCircle(canvas, maxRadius, maxLifeTime));
  }

  return circles
}

/**
 * 
 * @param {Array<{ x: number, y: number, r: number, t: number }>} circles 
 * @param {HTMLCanvasElement} canvas 
 * @param {number} spawnRate - No. of particles to spawn each frame
 * @param {number} maxRadius - Maximum radius of a particle
 * @param {number} maxLifeTime - Maximum time in frames for particle life
 * @param {number} numToSpawn - How many particles to spawn this iteration, set to 0 by default
 */
function animateCanvas(circles, canvas, spawnRate, maxRadius, maxLifeTime, numToSpawn = 0){

  // clear the canvas
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0, canvas.width, canvas.height);

  if(spawnRate >= 1) numToSpawn = spawnRate
  else numToSpawn += spawnRate;

  circles = updateCircles(circles, canvas, numToSpawn, maxRadius, maxLifeTime);

  // reset the numToSpawn if just spawned and the spawnRate is less than 1
  if((spawnRate < 1) && (numToSpawn >= 1)){
    numToSpawn = 0;
  }

  drawCircles(circles, canvas);


  // recursively loop through itself to animate

  // tied to framerate!!
  window.requestAnimationFrame(() => animateCanvas(circles, canvas, spawnRate, maxRadius, maxLifeTime, numToSpawn));

  // not tied to framerate BUT extremely jittery (interval is in milliseconds)
  //setTimeout(() => animateCanvas(circles, canvas, interval), interval);
}