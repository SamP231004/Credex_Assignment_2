import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeInSection from '../components/FadeInSection';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: '',
    services: {
      webDesign: false,
      development: false,
      branding: false,
      uiUx: false,
      digitalStrategy: false,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thanks for your message! We\'ll be in touch soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      budget: '',
      services: {
        webDesign: false,
        development: false,
        branding: false,
        uiUx: false,
        digitalStrategy: false,
      },
    });
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              <AnimatedText 
                text="Let's work together" 
                splitBy="word"
                delay={0.2}
              />
            </h1>
            <p className="text-xl text-gray-300">
              <AnimatedText 
                text="Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together." 
                splitBy="word"
                delay={0.4}
                staggerChildren={0.03}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="border border-gray-800 p-8 md:p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:hello@centralaxis.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@centralaxis.com
                </a>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="border border-gray-800 p-8 md:p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+12125551234" className="text-gray-400 hover:text-white transition-colors">
                  +1 (212) 555-1234
                </a>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.3}>
              <div className="border border-gray-800 p-8 md:p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-400">
                  123 Design Street<br />
                  New York, NY 10001
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Tell us about your project</h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 1-2 business days.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Services You're Interested In</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="webDesign"
                        name="webDesign"
                        checked={formData.services.webDesign}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 bg-gray-800 border-gray-700 text-white focus:ring-white"
                      />
                      <label htmlFor="webDesign" className="ml-2 text-sm text-gray-300">Web Design</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="development"
                        name="development"
                        checked={formData.services.development}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 bg-gray-800 border-gray-700 text-white focus:ring-white"
                      />
                      <label htmlFor="development" className="ml-2 text-sm text-gray-300">Development</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="branding"
                        name="branding"
                        checked={formData.services.branding}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 bg-gray-800 border-gray-700 text-white focus:ring-white"
                      />
                      <label htmlFor="branding" className="ml-2 text-sm text-gray-300">Branding</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="uiUx"
                        name="uiUx"
                        checked={formData.services.uiUx}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 bg-gray-800 border-gray-700 text-white focus:ring-white"
                      />
                      <label htmlFor="uiUx" className="ml-2 text-sm text-gray-300">UI/UX Design</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="digitalStrategy"
                        name="digitalStrategy"
                        checked={formData.services.digitalStrategy}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 bg-gray-800 border-gray-700 text-white focus:ring-white"
                      />
                      <label htmlFor="digitalStrategy" className="ml-2 text-sm text-gray-300">Digital Strategy</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="">Select a budget range</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <div className="text-center md:text-left">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium transition-colors hover:bg-gray-200 group"
                  >
                    Send message
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit our studio</h2>
              <p className="text-gray-300">
                We're located in the heart of New York City. Feel free to drop by for a coffee.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={0.2}>
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4350631/pexels-photo-4350631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Office location" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;