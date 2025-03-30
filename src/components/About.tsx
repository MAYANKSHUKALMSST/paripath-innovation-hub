
import AnimatedSection from './AnimatedSection';
import { Award, Users, Globe, Zap } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="flex flex-col items-center p-6">
    <div className="w-12 h-12 bg-paripath/10 rounded-full flex items-center justify-center mb-4 text-paripath">
      <Icon size={20} />
    </div>
    <h3 className="text-3xl font-bold mb-1">{value}</h3>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80" 
                  alt="Paripath Solutions Team" 
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paripath/70 flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-xl font-semibold mb-2">Engineering Excellence</h3>
                    <p className="text-sm opacity-90">Pushing the boundaries of what's possible</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="absolute -bottom-12 -right-12 p-6 glass-card rounded-xl shadow-lg hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-paripath rounded-full flex items-center justify-center text-white">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Innovation First</h4>
                  <p className="text-sm text-gray-600">Cutting-edge solutions for complex problems</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div>
            <AnimatedSection delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-paripath to-paripath-dark bg-clip-text text-transparent">About Paripath Solutions</span>
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-paripath/80 rounded-full"></span>
              </h2>
              <div className="text-gray-600 mb-8 leading-relaxed">
                <p className="text-balance">
                  <p className="font-medium text-paripath-dark">At Paripath Solutions</p>, we are committed to empowering businesses by providing innovative, cost-effective, and sustainable digital solutions. Founded with a vision to increase the digital presence of every business, we specialize in a wide range of services including <p className="italic text-paripath">Embedded Systems, Drone Development, App Development, Website Development, PCB Designing, and IoT Product Design</p>. Our mission is simple – to help MSMEs (Micro, Small, and Medium Enterprises) establish and enhance their digital presence. We understand the challenges that startups, small businesses, and enterprises face in a rapidly evolving digital world. That's why we offer unique services tailored to meet the specific needs of our clients while ensuring affordability and high-quality results. Driven by a customer-centric approach, <p className="font-medium text-paripath-dark">Paripath Solutions</p> prides itself on offering solutions that are not only innovative but also scalable and sustainable. Whether it's creating a digital presence from scratch or advancing an existing one, our team is dedicated to making sure that businesses of all sizes can thrive in the digital era. We believe that technology should empower every business, and our aim is to bring the digital world closer to you, helping you reach new heights of success.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-paripath/5 to-paripath-dark/5 rounded-xl p-6 mt-8 border-l-4 border-paripath shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-paripath-dark">Our Approach</h3>
                <ul className="space-y-4">
                  {[
                    "Thorough understanding of client requirements",
                    "Technical excellence and attention to detail",
                    "Innovative solutions to complex problems",
                    "Reliable support throughout the project lifecycle"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-7 h-7 bg-paripath/20 rounded-full flex items-center justify-center text-paripath mr-3 mt-0.5 flex-shrink-0 font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="mt-20">
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-6 text-center bg-gradient-to-r from-paripath/5 via-white to-paripath-light/10 rounded-xl shadow-sm border border-gray-100">
              <StatCard icon={Users} value="100+" label="Satisfied Clients" />
              <StatCard icon={Zap} value="150+" label="Completed Projects" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
