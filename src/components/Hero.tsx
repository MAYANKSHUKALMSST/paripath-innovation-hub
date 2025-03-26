
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Interactive 3D cube effect
  const cubeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    
    let rotateX = 0;
    let rotateY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let isMouseDown = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;
      
      rotateY += deltaX * 0.5;
      rotateX -= deltaY * 0.5;
      
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    
    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    
    const handleMouseUp = () => {
      isMouseDown = false;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    cube.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Auto rotation when not interacting
    const autoRotate = setInterval(() => {
      if (!isMouseDown) {
        rotateY += 0.5;
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    }, 50);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cube.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearInterval(autoRotate);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-transparent"></div>
      </div>
      
      {/* Floating elements */}
      <div className="hidden lg:block absolute -top-10 right-36 w-64 h-64 bg-paripath opacity-5 rounded-full filter blur-3xl animate-float"></div>
      <div className="hidden lg:block absolute top-1/3 -left-24 w-80 h-80 bg-blue-200 opacity-10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-8">
            <div className="flex-1 mb-10 md:mb-0">
              <div className="inline-block px-4 py-1.5 bg-paripath/10 rounded-full text-paripath text-sm font-medium mb-6 animate-fade-in shadow-md transform hover:scale-105 transition-all">
                Engineering Excellence & Innovation
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight animate-fade-in drop-shadow-lg">
                Innovative Engineering <br className="hidden md:block" />
                <span className="text-paripath relative inline-block">
                  Solutions
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-paripath/30 rounded-full"></span>
                </span> for Tomorrow
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 mb-10 text-balance animate-fade-in">
                From embedded systems to drone technology, Paripath Solutions delivers cutting-edge engineering and software development services tailored to transform your ideas into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <a 
                  href="#services" 
                  className="btn-hover-effect px-8 py-3 bg-paripath text-white rounded-lg font-medium text-center transform transition hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Explore Our Services
                </a>
                <a 
                  href="#contact" 
                  className="btn-hover-effect px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium text-center transform transition hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
            
            {/* 3D Cube */}
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative perspective-1000 cursor-grab">
                <div 
                  ref={cubeRef}
                  className="w-full h-full transform-style-3d transition-transform duration-500 ease-out"
                  style={{ 
                    transformStyle: 'preserve-3d', 
                    transform: 'rotateX(0deg) rotateY(0deg)'
                  }}
                >
                  {/* Front face */}
                  <div className="absolute w-full h-full flex items-center justify-center bg-paripath/20 backdrop-blur-sm border border-white/30 shadow-xl transform" style={{ transform: 'translateZ(8rem)' }}>
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Engineering" className="w-2/3 h-2/3 object-cover rounded-lg opacity-90" />
                  </div>
                  
                  {/* Back face */}
                  <div className="absolute w-full h-full flex items-center justify-center bg-blue-700/20 backdrop-blur-sm border border-white/30 shadow-xl transform" style={{ transform: 'translateZ(-8rem) rotateY(180deg)' }}>
                    <div className="text-xl font-bold text-blue-700">Innovative Solutions</div>
                  </div>
                  
                  {/* Left face */}
                  <div className="absolute w-full h-full flex items-center justify-center bg-paripath/10 backdrop-blur-sm border border-white/30 shadow-xl transform" style={{ transform: 'rotateY(-90deg) translateZ(8rem)' }}>
                    <div className="text-xl font-bold text-paripath">Engineering Excellence</div>
                  </div>
                  
                  {/* Right face */}
                  <div className="absolute w-full h-full flex items-center justify-center bg-blue-500/10 backdrop-blur-sm border border-white/30 shadow-xl transform" style={{ transform: 'rotateY(90deg) translateZ(8rem)' }}>
                    <div className="text-xl font-bold text-blue-500">Tomorrow's Technology</div>
                  </div>
                  
                  {/* Top face */}
                  <div className="absolute w-full h-full flex items-center justify-center bg-indigo-500/10 backdrop-blur-sm border border-white/30 shadow-xl transform" style={{ transform: 'rotateX(90deg) translateZ(8rem)' }}>
                    <div className="text-xl font-bold text-indigo-500">Cutting Edge</div>
                  </div>
                  
                  {/* Bottom face */}
                  <div className="absolute w-full h-full flex items-center justify-center bg-indigo-700/10 backdrop-blur-sm border border-white/30 shadow-xl transform" style={{ transform: 'rotateX(-90deg) translateZ(8rem)' }}>
                    <div className="text-xl font-bold text-indigo-700">Paripath Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce shadow-md rounded-full p-2 bg-white/20 backdrop-blur-sm" onClick={handleScrollDown}>
        <ChevronDown className="text-paripath" size={30} />
      </div>
    </section>
  );
};

export default Hero;
