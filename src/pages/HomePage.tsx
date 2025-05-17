import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeInSection from '../components/FadeInSection';
import MarqueeText from '../components/MarqueeText';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';

const services = [
  {
    id: '1',
    title: 'Web Design',
    description: 'Creating exceptional websites that engage users and drive conversions.',
    imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Development',
    description: 'Building performant applications with clean code and modern technologies.',
    imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: 'Branding',
    description: 'Crafting memorable brand identities that resonate with your audience.',
    imageUrl: 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces for seamless user experiences.',
    imageUrl: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const projects = [
  {
    id: 'nova-studio',
    title: 'Nova Studio',
    category: 'Web Design & Development',
    imageUrl: 'https://images.pexels.com/photos/5370159/pexels-photo-5370159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'pulse-fitness',
    title: 'Pulse Fitness',
    category: 'Branding & UI/UX',
    imageUrl: 'https://images.pexels.com/photos/5213879/pexels-photo-5213879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'echo-finance',
    title: 'Echo Finance',
    category: 'Web Development',
    imageUrl: 'https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPos = window.scrollY;
      const heroElement = heroRef.current;
      const heroHeight = heroElement.offsetHeight;
      const parallaxFactor = 0.4;
      
      if (scrollPos <= heroHeight) {
        const translateY = scrollPos * parallaxFactor;
        heroElement.style.transform = `translateY(${translateY}px)`;
        heroElement.style.opacity = `${1 - (scrollPos / heroHeight) * 0.5}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
              <AnimatedText 
                text="Crafting Digital Excellence" 
                splitBy="word"
                delay={0.2}
              />
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8">
              <AnimatedText 
                text="We transform ideas into exceptional digital experiences" 
                splitBy="word"
                delay={0.5}
              />
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 md:mt-12">
              <Link 
                to="/case-studies" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium transition-all hover:bg-gray-200 hover:scale-105 group"
              >
                View our work
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-white bg-transparent text-white font-medium transition-all hover:bg-white hover:text-black"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="text-sm mt-2 text-gray-300">Scroll down</span>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-10 border-y border-gray-800 overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <MarqueeText 
          text="DESIGN · DEVELOPMENT · STRATEGY · BRANDING · UX/UI" 
          className="text-2xl md:text-3xl font-semibold text-white py-4"
          speed={30}
        />
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                We create exceptional digital solutions
              </h2>
              <p className="text-gray-400 mb-8">
                Central Axis is a creative digital agency specializing in delivering high-impact web design, development, and branding solutions for forward-thinking businesses. We combine strategic thinking with cutting-edge technology to craft immersive digital experiences.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-white hover:text-gray-300 animated-border relative pb-1 group"
              >
                Learn more about our agency
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-gray-800 p-6 md:p-8 bg-black/50 backdrop-blur-sm hover:bg-gray-900/50 transition-all">
                  <h3 className="text-5xl font-bold mb-2">10+</h3>
                  <p className="text-gray-400">Years of experience</p>
                </div>
                <div className="border border-gray-800 p-6 md:p-8 bg-black/50 backdrop-blur-sm hover:bg-gray-900/50 transition-all">
                  <h3 className="text-5xl font-bold mb-2">35+</h3>
                  <p className="text-gray-400">Team members</p>
                </div>
                <div className="border border-gray-800 p-6 md:p-8 bg-black/50 backdrop-blur-sm hover:bg-gray-900/50 transition-all">
                  <h3 className="text-5xl font-bold mb-2">150+</h3>
                  <p className="text-gray-400">Projects completed</p>
                </div>
                <div className="border border-gray-800 p-6 md:p-8 bg-black/50 backdrop-blur-sm hover:bg-gray-900/50 transition-all">
                  <h3 className="text-5xl font-bold mb-2">98%</h3>
                  <p className="text-gray-400">Client satisfaction</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
              <div className="max-w-2xl mb-8 md:mb-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our services</h2>
                <p className="text-gray-400">
                  We offer a comprehensive range of digital services to help your business succeed online.
                </p>
              </div>
              <Link 
                to="/services" 
                className="inline-flex items-center text-white hover:text-gray-300 animated-border relative pb-1 group"
              >
                View all services
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <FadeInSection key={service.id} delay={0.1 * index}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  index={index + 1}
                  imageUrl={service.imageUrl}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">Ready to transform your digital presence?</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Let's collaborate to create something exceptional that achieves your business goals.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium transition-all hover:bg-gray-200 hover:scale-105 group"
              >
                Start a project
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
              <div className="max-w-2xl mb-8 md:mb-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Recent work</h2>
                <p className="text-gray-400">
                  Explore our latest projects and see how we've helped our clients achieve their goals.
                </p>
              </div>
              <Link 
                to="/case-studies" 
                className="inline-flex items-center text-white hover:text-gray-300 animated-border relative pb-1 group"
              >
                View all projects
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <FadeInSection key={project.id} delay={0.1 * index}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  imageUrl={project.imageUrl}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's create something amazing together</h2>
              <p className="text-gray-400 mb-0 md:mb-0">
                Contact us to discuss your project and discover how we can help bring your vision to life.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="flex justify-start md:justify-end">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium transition-all hover:bg-gray-200 hover:scale-105 group"
                >
                  Get in touch
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;