import { useRef } from 'react';
import './index.css'
import { useEffect } from 'react';

function ParticleSystem({ width, height }){
  const psRef = useRef(null); // particle system reference

  useEffect(() => {
    const canvas = psRef.current;
  
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw blue circle
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50;

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();

  })


  return(
    <canvas className='systemCanvas' ref={psRef} width={width} height={height}></canvas>
  );
}

export default ParticleSystem;