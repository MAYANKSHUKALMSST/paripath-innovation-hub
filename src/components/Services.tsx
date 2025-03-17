
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Cpu, Code, Smartphone, Brush, Server, Settings, Circuit, Database, RefreshCw } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AnimatedSection delay={index * 100} className={`stagger-reveal-delay-${index + 1}`}>
      <div
        className="relative h-full p-8 rounded-xl glass-card transition-all duration-300 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-paripath/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
        <div className="relative z-10">
          <div className="w-14 h-14 bg-paripath/10 rounded-xl flex items-center justify-center mb-6 text-paripath transition-all duration-300 group-hover:bg-paripath group-hover:text-white">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-paripath">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const services = [
  {
    icon: Circuit,
    title: "Embedded Systems",
    description: "Custom hardware and software solutions for specialized computing tasks with efficient resource utilization."
  },
  {
    icon: Database,
    title: "Machine Learning Models",
    description: "Develop and deploy intelligent algorithms that analyze data patterns and make predictions with remarkable accuracy."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Beautiful, responsive websites and web applications built with modern frameworks and best practices."
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across devices."
  },
  {
    icon: RefreshCw,
    title: "Drone Development",
    description: "Custom drone solutions for various industrial and commercial applications with advanced control systems."
  },
  {
    icon: Server,
    title: "PCB Designing",
    description: "Expert PCB design services from concept to production, ensuring optimal performance and reliability."
  },
  {
    icon: Settings,
    title: "IoT Product Design",
    description: "End-to-end IoT solutions that connect devices, collect data, and enable smart decision-making."
  },
  {
    icon: Cpu,
    title: "Firmware Development",
    description: "Reliable and efficient firmware that powers your hardware devices with precision and stability."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-balance">
            We offer a comprehensive range of engineering and software development services to help you bring your ideas to life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
