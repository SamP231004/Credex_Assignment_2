import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import FadeInSection from '../components/FadeInSection';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 'nova-studio',
    title: 'Nova Studio',
    category: 'Web Design',
    tags: ['design', 'development', 'branding'],
    imageUrl: 'https://images.pexels.com/photos/5370159/pexels-photo-5370159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'pulse-fitness',
    title: 'Pulse Fitness',
    category: 'Branding',
    tags: ['branding', 'strategy'],
    imageUrl: 'https://images.pexels.com/photos/5213879/pexels-photo-5213879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'echo-finance',
    title: 'Echo Finance',
    category: 'Web Development',
    tags: ['development', 'ux'],
    imageUrl: 'https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'vertex-app',
    title: 'Vertex App',
    category: 'UI/UX Design',
    tags: ['design', 'ux'],
    imageUrl: 'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'lunar-resort',
    title: 'Lunar Resort',
    category: 'Branding & Web',
    tags: ['branding', 'design', 'development'],
    imageUrl: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'tempo-music',
    title: 'Tempo Music',
    category: 'Web Development',
    tags: ['development', 'strategy'],
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const CaseStudiesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'design', label: 'Design' },
    { value: 'development', label: 'Development' },
    { value: 'branding', label: 'Branding' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'ux', label: 'UX/UI' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              <AnimatedText 
                text="Our case studies" 
                splitBy="word"
                delay={0.2}
              />
            </h1>
            <p className="text-xl text-gray-300">
              <AnimatedText 
                text="Explore our portfolio of work and discover how we've helped our clients achieve their goals." 
                splitBy="word"
                delay={0.4}
                staggerChildren={0.03}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {filters.map(filter => (
                <button
                  key={filter.value}
                  className={`px-6 py-2 ${
                    activeFilter === filter.value 
                      ? 'bg-white text-black' 
                      : 'border border-gray-700 text-gray-300 hover:border-white hover:text-white'
                  } transition-colors`}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProjects.map((project, index) => (
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
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">Let's create your next project</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Ready to bring your vision to life? We'd love to hear about your project.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium transition-colors hover:bg-gray-200 group"
              >
                Start a conversation
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;