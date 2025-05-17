import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import FadeInSection from '../components/FadeInSection';
import MarqueeText from '../components/MarqueeText';

const teamMembers = [
  {
    id: '1',
    name: 'Alex Morgan',
    role: 'Creative Director',
    imageUrl: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Lead Designer',
    imageUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    name: 'Michael Wilson',
    role: 'Technical Director',
    imageUrl: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    name: 'Olivia Johnson',
    role: 'Project Manager',
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const AboutPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              <AnimatedText 
                text="About Central Axis" 
                splitBy="word"
                delay={0.2}
              />
            </h1>
            <p className="text-xl text-gray-300">
              <AnimatedText 
                text="We're a team of designers, developers, and strategists passionate about crafting exceptional digital experiences." 
                splitBy="word"
                delay={0.4}
                staggerChildren={0.03}
              />
            </p>
          </div>
          
          <FadeInSection delay={0.6}>
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Central Axis Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our story</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2015, Central Axis began with a simple mission: to create digital experiences that transform businesses. What started as a small team of passionate designers and developers has grown into a full-service agency serving clients worldwide.
              </p>
              <p className="text-gray-300">
                Over the years, we've refined our process and expanded our capabilities, but our dedication to exceptional design and technical excellence has remained unwavering. Today, we work with businesses of all sizes to create meaningful digital solutions that drive results.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our values</h2>
              <p className="text-xl text-gray-300">
                The principles that guide everything we do.
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="border border-gray-800 p-8 md:p-10">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                  01
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-400">
                  We pursue excellence in everything we create, from the smallest detail to the overall vision.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="border border-gray-800 p-8 md:p-10">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                  02
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-400">
                  We believe in the power of collaboration, both within our team and with our clients.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.3}>
              <div className="border border-gray-800 p-8 md:p-10">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                  03
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-400">
                  We constantly push boundaries and explore new approaches to solve complex problems.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.4}>
              <div className="border border-gray-800 p-8 md:p-10">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                  04
                </div>
                <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                <p className="text-gray-400">
                  We operate with transparency, honesty, and ethical standards in all our interactions.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.5}>
              <div className="border border-gray-800 p-8 md:p-10">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                  05
                </div>
                <h3 className="text-xl font-semibold mb-4">Purpose</h3>
                <p className="text-gray-400">
                  We create with purpose, ensuring every element serves the overall goals and objectives.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.6}>
              <div className="border border-gray-800 p-8 md:p-10">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                  06
                </div>
                <h3 className="text-xl font-semibold mb-4">Growth</h3>
                <p className="text-gray-400">
                  We foster growth, both for our clients' businesses and for our team members' skills and capabilities.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet our team</h2>
              <p className="text-xl text-gray-300">
                The talented individuals behind Central Axis.
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <FadeInSection key={member.id} delay={0.1 * index}>
                <div className="group">
                  <div className="overflow-hidden mb-4">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full aspect-square object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <FadeInSection delay={0.5}>
            <div className="mt-16 md:mt-24 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">Want to join our team?</h3>
              <a 
                href="#" 
                className="inline-flex items-center text-white hover:text-gray-300 animated-border relative pb-1 group"
              >
                View open positions
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-10 border-y border-gray-800 overflow-hidden">
        <MarqueeText 
          text="AWARD-WINNING AGENCY · PASSIONATE ABOUT DESIGN · DEDICATED TO EXCELLENCE · CREATIVE SOLUTIONS" 
          className="text-2xl md:text-3xl font-semibold text-white py-4"
          speed={30}
        />
      </section>

      {/* Contact Banner */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">Ready to work with us?</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Let's collaborate to create something exceptional that brings your vision to life.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium transition-colors hover:bg-gray-200 group"
              >
                Get in touch
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;