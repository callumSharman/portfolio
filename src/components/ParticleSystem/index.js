import { useRef, useEffect } from 'react';
import './index.css'

function ParticleSystem(props){
  const psRef = useRef(null); // particle system reference

  useEffect(() => {
    const canvas = psRef.current;
  
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#171a1f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let circles = drawCircles(canvas.width, canvas.height, ctx);
    //animateCanvas(canvas.width, canvas.height, ctx, circles);

  })


  return(
    <canvas className='systemCanvas' ref={psRef} {...props}></canvas>
  );
}

export default ParticleSystem;


/**
 * generates a list of n cirlces centered randomly within a rectangle
 * of 'width' and 'height' with a random radius up to 'maxR'
 * @param {number} n number of circles
 * @param {number} width of area 
 * @param {number} height of area
 * @param {number} maxR max radius
 * @returns {Array<{ x: number, y: number, r: number }>}
 */
function randomCircles(n, width, height, maxR){
  let circles = [];

  for(let i = 0; i < n; i ++){
    circles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * maxR});
  }

  return circles;
}

function drawCircles(width, height, ctx){
  ctx.fillStyle = '#343b47'; // circle colour
  let circles = randomCircles(100, width, height, 4);

  circles.forEach(circle => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
    ctx.fill();
  });
  return circles;
}

// function animateCanvas(width, height, ctx, circles){
//   // clear the canvas first
//   ctx.clearRect(0,0, width, height);
//   shiftCirclesLeft(circles);

//   // will recursively loop through itself to animate
//   //window.requestAnimationFrame(animateCanvas(width, height, ctx))
// }

// function shiftCirclesLeft(circles){
//   circles.forEach(circle => {
//     circle.x -= 10;
//   });
// }