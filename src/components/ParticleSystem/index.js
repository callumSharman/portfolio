import { useRef, useEffect } from 'react';
import './index.css'

function ParticleSystem(props){
  const psRef = useRef(null); // particle system reference

  useEffect(() => {
    const canvas = psRef.current;
  
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#171a1f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let circles = initCircleList(100, canvas.width, canvas.height, 4, 500);
    animateCanvas(circles, canvas, 16);
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
 * @param {number} width - of area 
 * @param {number} height - of area
 * @param {number} maxRadius
 * @param {number} maxLifeTime - Maximum time in frames for particle life
 * @returns {Array<{ x: number, y: number, r: number, t: number }>} - 't' is time remaining
 */
function initCircleList(n, width, height, maxRadius, maxLifeTime){
  let circles = [];

  for(let i = 0; i < n; i ++){
    circles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * maxRadius,
      t: Math.random() * maxLifeTime,
    });
  }

  return circles;
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
 * @returns {Array<{ x: number, y: number, r: number, t: number }>}
 */
function updateCircles(circles){

  // remove dead circles from the list
  circles = circles.filter(circle => circle.t >= 0);

  circles.forEach(circle => {
    circle.x -= 1;
    circle.t -= 1;
  });

  return circles
}

/**
 * 
 * @param {Array<{ x: number, y: number, r: number, t: number }>} circles 
 * @param {HTMLCanvasElement} canvas 
 */
function animateCanvas(circles, canvas){

  // clear the canvas
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0, canvas.width, canvas.height);

  circles = updateCircles(circles);
  drawCircles(circles, canvas);

  // recursively loop through itself to animate

  // tied to framerate!!
  window.requestAnimationFrame(() => animateCanvas(circles, canvas));

  // not tied to framerate BUT extremely jittery (interval is in milliseconds)
  //setTimeout(() => animateCanvas(circles, canvas, interval), interval);
}