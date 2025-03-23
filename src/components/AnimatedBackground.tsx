
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set initial dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Reduce number of particles for better performance
    let particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(30, Math.floor(window.innerWidth * window.innerHeight / 40000));
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor(
        x: number,
        y: number,
        size: number,
        speedX: number,
        speedY: number,
        color: string
      ) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0 - this.size;
        else if (this.x < 0 - this.size) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0 - this.size;
        else if (this.y < 0 - this.size) this.y = canvas.height;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    function createParticles() {
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3 + 1; // Slightly smaller particles
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 0.2 - 0.1; // Slower movement
        const speedY = Math.random() * 0.2 - 0.1;
        const color = `rgba(255, 111, 0, ${Math.random() * 0.15 + 0.05})`;
        
        particlesArray.push(new Particle(x, y, size, speedX, speedY, color));
      }
    }
    
    let animationFrameId: number;
    let lastRenderTime = 0;
    const fps = 30; // Limit to 30fps for better performance
    const fpsInterval = 1000 / fps;
    
    function animateParticles(timestamp: number) {
      const elapsed = timestamp - lastRenderTime;
      
      if (elapsed > fpsInterval) {
        lastRenderTime = timestamp - (elapsed % fpsInterval);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw(ctx);
        }
        
        // Connect particles less frequently for better performance
        if (particlesArray.length <= 30) {
          connectParticles();
        }
      }
      
      animationFrameId = requestAnimationFrame(animateParticles);
    }
    
    function connectParticles() {
      const maxDistance = Math.min(80, window.innerWidth / 15);
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(255, 111, 0, ${0.1 - distance/maxDistance/12})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particlesArray = [];
        createParticles();
      }, 300);
    };
    
    window.addEventListener('resize', handleResize);
    
    createParticles();
    animationFrameId = requestAnimationFrame(animateParticles);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 opacity-40"
    />
  );
};

export default AnimatedBackground;
