
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CircuitBoard, Database, Code, Smartphone, RefreshCw, Server, Settings, Cpu } from 'lucide-react';

const services = [
  {
    icon: CircuitBoard,
    title: "Embedded Systems",
    description: "Specialized computing solutions with efficient resource utilization",
    color: "bg-blue-500/20",
    textColor: "text-blue-500"
  },
  {
    icon: Database,
    title: "Machine Learning",
    description: "Intelligent algorithms that analyze data patterns with accuracy",
    color: "bg-purple-500/20",
    textColor: "text-purple-500"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern responsive websites with cutting-edge frameworks",
    color: "bg-indigo-500/20",
    textColor: "text-indigo-500"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform mobile applications with exceptional UX",
    color: "bg-green-500/20",
    textColor: "text-green-500"
  },
  {
    icon: RefreshCw,
    title: "Drone Development",
    description: "Custom drone solutions with advanced control systems",
    color: "bg-amber-500/20",
    textColor: "text-amber-500"
  },
  {
    icon: Server,
    title: "PCB Designing",
    description: "Expert PCB design from concept to production",
    color: "bg-rose-500/20",
    textColor: "text-rose-500"
  },
  {
    icon: Settings,
    title: "IoT Product Design",
    description: "End-to-end IoT solutions for smart decision-making",
    color: "bg-cyan-500/20",
    textColor: "text-cyan-500"
  },
  {
    icon: Cpu,
    title: "Firmware Development",
    description: "Reliable firmware that powers hardware with precision",
    color: "bg-teal-500/20",
    textColor: "text-teal-500"
  }
];

const Hero = () => {
  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for cards
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const cards = container.querySelectorAll('.service-card');
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
        const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;
        
        const deltaX = mouseX - cardCenterX;
        const deltaY = mouseY - cardCenterY;
        
        // Calculate rotation based on mouse position
        const rotateX = deltaY * 0.03;
        const rotateY = -deltaX * 0.03;
        
        // Apply rotation with diminishing effect based on distance
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
        const factor = 1 - Math.min(distance / maxDistance, 1);
        
        card.setAttribute('style', `transform: perspective(1000px) rotateX(${rotateX * factor}deg) rotateY(${rotateY * factor}deg) translateZ(10px);`);
      });
    };
    
    const handleMouseLeave = () => {
      const cards = container.querySelectorAll('.service-card');
      cards.forEach((card) => {
        card.setAttribute('style', 'transform: perspective(1000px) rotateX(0) rotateY(0) translateZ(0); transition: transform 0.5s ease-out;');
      });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
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
            
            {/* 3D Service Carousel */}
            <div className="flex-1 py-8">
              <div 
                ref={containerRef}
                className="relative perspective-1200 w-full h-80 flex items-center justify-center"
              >
                <Carousel 
                  className="w-full max-w-md"
                  opts={{
                    align: "center",
                    loop: true
                  }}
                  onSelect={(api) => {
                    if (api) {
                      setActiveIndex(api.selectedScrollSnap());
                    }
                  }}
                >
                  <CarouselContent>
                    {services.map((service, index) => (
                      <CarouselItem key={index} className="md:basis-4/5">
                        <div 
                          className={`service-card h-64 p-6 rounded-xl glass-card border border-white/20 backdrop-blur-sm transition-all duration-300 ${service.color} flex flex-col justify-center`}
                          style={{ 
                            transformStyle: 'preserve-3d',
                            transition: 'transform 0.5s ease-out'
                          }}
                        >
                          <div className="transform -translate-z-4 relative z-10">
                            <div className={`w-16 h-16 ${service.color} bg-opacity-30 rounded-full flex items-center justify-center mb-6 ${service.textColor} mx-auto`}>
                              <service.icon size={32} className="relative z-10" />
                            </div>
                            
                            <h3 className={`text-xl font-semibold mb-3 ${service.textColor} text-center`}>
                              {service.title}
                            </h3>
                            
                            <p className="text-gray-700 text-center">
                              {service.description}
                            </p>
                            
                            {/* 3D floating elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full opacity-60 blur-sm bg-white/30 animate-float" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full opacity-40 blur-sm bg-white/20 animate-float" style={{ animationDelay: '1.3s' }}></div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="relative static translate-y-0 -left-0 mr-2 bg-white/50 backdrop-blur-sm hover:bg-white/70" />
                    <div className="flex space-x-1 px-2">
                      {services.map((_, index) => (
                        <div 
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-paripath w-4' : 'bg-gray-300'}`}
                        ></div>
                      ))}
                    </div>
                    <CarouselNext className="relative static translate-y-0 -right-0 ml-2 bg-white/50 backdrop-blur-sm hover:bg-white/70" />
                  </div>
                </Carousel>
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
