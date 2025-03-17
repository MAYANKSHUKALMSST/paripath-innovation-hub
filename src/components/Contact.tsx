
import AnimatedSection from './AnimatedSection';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, value }: { icon: any, title: string, value: string | React.ReactNode }) => (
  <AnimatedSection className="flex items-start p-5 glass-card rounded-xl">
    <div className="w-10 h-10 bg-paripath/10 rounded-lg flex items-center justify-center mr-4 text-paripath flex-shrink-0">
      <Icon size={18} />
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <div className="text-gray-800">{value}</div>
    </div>
  </AnimatedSection>
);

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-balance">
            Have a project in mind or need consultation? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={100} className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paripath focus:border-paripath outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paripath focus:border-paripath outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paripath focus:border-paripath outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paripath focus:border-paripath outline-none transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn-hover-effect w-full px-6 py-3 bg-paripath text-white rounded-lg font-medium hover:bg-paripath-dark transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </AnimatedSection>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <AnimatedSection delay={200} className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <ContactCard 
                  icon={MapPin} 
                  title="Office Location" 
                  value="Lucknow, Uttar Pradesh, India" 
                />
                <ContactCard 
                  icon={Mail} 
                  title="Email Address" 
                  value={<a href="mailto:mayank@paripathsolutions.com" className="text-paripath hover:underline">mayank@paripathsolutions.com</a>} 
                />
                <ContactCard 
                  icon={Phone} 
                  title="Phone Number" 
                  value={<a href="tel:+911234567890" className="text-paripath hover:underline">+91 123 456 7890</a>} 
                />
                <ContactCard 
                  icon={Clock} 
                  title="Business Hours" 
                  value="Monday - Friday: 9:00 AM - 6:00 PM" 
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} className="bg-paripath text-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-4">Visit Our Website</h3>
              <p className="mb-4 opacity-90">
                For more information about our services and portfolio, visit our website.
              </p>
              <a 
                href="https://paripathsolutions.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-2 bg-white text-paripath rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                paripathsolutions.com
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
