
import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  color: string;
  opacity: number;
}

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Particle[] = [];
    const particleCount = 80;
    const perspectiveDepth = 1000; // Increased for more dramatic 3D effect
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create particles
    const createParticles = () => {
      const lightModeColors = ['rgba(59, 130, 246, 0.7)', 'rgba(99, 102, 241, 0.5)', 'rgba(139, 92, 246, 0.5)'];
      const darkModeColors = ['rgba(59, 130, 246, 0.5)', 'rgba(99, 102, 241, 0.4)', 'rgba(139, 92, 246, 0.4)'];
      
      const colors = theme === 'dark' ? darkModeColors : lightModeColors;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * perspectiveDepth - perspectiveDepth/2,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.8, // Slightly faster
          speedY: (Math.random() - 0.5) * 0.8, // Slightly faster
          speedZ: (Math.random() - 0.5) * 1.2, // Faster z movement for more dramatic effect
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };
    
    // Calculate particle size based on z position for perspective
    const calculateSize = (particle: Particle) => {
      // Create a stronger perspective effect
      const perspective = perspectiveDepth / (perspectiveDepth + particle.z);
      return particle.size * perspective * 1.5; // Larger size multiplier for more visible particles
    };
    
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Sort particles by z position to create proper layering
      particles.sort((a, b) => b.z - a.z);
      
      particles.forEach((particle, index) => {
        const size = calculateSize(particle);
        
        // Extract RGB values from rgba string
        const rgba = particle.color.match(/\d+/g);
        if (!rgba) return;
        
        // Calculate opacity based on z position with more dramatic falloff
        const opacity = (particle.opacity * (perspectiveDepth + particle.z) / (1.5 * perspectiveDepth)).toFixed(2);
        
        ctx.fillStyle = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.z += particle.speedZ;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        if (particle.z < -perspectiveDepth/2 || particle.z > perspectiveDepth/2) {
          particle.speedZ *= -1;
        }
        
        // Connect particles with lines
        connectParticles(particle, index);
      });
    };
    
    // Connect particles with lines
    const connectParticles = (particle: Particle, index: number) => {
      const maxDistance = 150; // Increased for more connections
      
      for (let i = index + 1; i < particles.length; i++) {
        const dx = particle.x - particles[i].x;
        const dy = particle.y - particles[i].y;
        const dz = particle.z - particles[i].z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < maxDistance) {
          // Make the opacity curve more dramatic for better depth perception
          const opacity = Math.pow(1 - distance / maxDistance, 2);
          // Calculate line width based on Z position for enhanced depth perception
          const lineWidth = 2 * (perspectiveDepth + Math.min(particle.z, particles[i].z)) / (2 * perspectiveDepth);
          
          ctx.strokeStyle = theme === 'dark' 
            ? `rgba(255, 255, 255, ${opacity * 0.25})` 
            : `rgba(0, 0, 0, ${opacity * 0.20})`;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.stroke();
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };
    
    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createParticles();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};

export default Particles;
