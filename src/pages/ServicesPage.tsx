import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import FadeInSection from '../components/FadeInSection';
import MarqueeText from '../components/MarqueeText';

const services = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Creating visually stunning and user-friendly websites that engage visitors and drive conversions.',
    details: [
      'Custom website design',
      'Landing page design',
      'Responsive design',
      'UI/UX optimization',
      'E-commerce design',
    ],
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Building robust, scalable websites and applications using modern technologies and best practices.',
    details: [
      'Frontend development',
      'Backend development',
      'E-commerce development',
      'Content management systems',
      'API integration',
    ],
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Developing memorable brand identities that resonate with your audience and set you apart from competitors.',
    details: [
      'Brand strategy',
      'Logo design',
      'Visual identity',
      'Brand guidelines',
      'Brand messaging',
    ],
    imageUrl: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Creating intuitive, seamless user experiences that delight users and achieve business objectives.',
    details: [
      'User research',
      'Information architecture',
      'Wireframing & prototyping',
      'Usability testing',
      'Interaction design',
    ],
    imageUrl: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'digital-strategy',
    title: 'Digital Strategy',
    description: 'Developing comprehensive strategies to help you achieve your business goals through digital channels.',
    details: [
      'Digital transformation',
      'Content strategy',
      'SEO strategy',
      'Social media strategy',
      'Analytics & reporting',
    ],
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'motion-design',
    title: 'Motion Design',
    description: 'Creating engaging animations and motion graphics that bring your brand and content to life.',
    details: [
      'UI animations',
      'Explainer videos',
      'Logo animations',
      'Social media animations',
      '3D visualization',
    ],
    imageUrl: 'https://images.pexels.com/photos/2544554/pexels-photo-2544554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              <AnimatedText 
                text="Our services" 
                splitBy="word"
                delay={0.2}
              />
            </h1>
            <p className="text-xl text-gray-300">
              <AnimatedText 
                text="We offer a comprehensive range of digital services to help your business succeed online." 
                splitBy="word"
                delay={0.4}
                staggerChildren={0.03}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          {services.map((service, index) => (
            <FadeInSection key={service.id} delay={0.1 * index}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 md:mb-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                  <p className="text-gray-300 mb-8">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-white hover:text-gray-300 animated-border relative pb-1 group"
                  >
                    Learn more about {service.title.toLowerCase()}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className={`aspect-[4/3] overflow-hidden ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out-expo"
                  />
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our process</h2>
              <p className="text-xl text-gray-300">
                Our proven approach to delivering exceptional results.
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection delay={0.1}>
              <div className="border border-gray-800 p-8 md:p-10">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                  01
                </div>
                <h3 className="text-xl font-semibold mb-4">Discovery</h3>
                <p className="text-gray-400">
                  We begin by understanding your business, goals, audience, and challenges through comprehensive research and analysis.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="border border-gray-800 p-8 md:p-10">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                  02
                </div>
                <h3 className="text-xl font-semibold mb-4">Strategy</h3>
                <p className="text-gray-400">
                  We develop a tailored strategy that aligns with your business objectives and provides a clear roadmap for success.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.3}>
              <div className="border border-gray-800 p-8 md:p-10">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                  03
                </div>
                <h3 className="text-xl font-semibold mb-4">Creation</h3>
                <p className="text-gray-400">
                  Our team of experts brings the strategy to life through design, development, and content creation.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.4}>
              <div className="border border-gray-800 p-8 md:p-10">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                  04
                </div>
                <h3 className="text-xl font-semibold mb-4">Optimization</h3>
                <p className="text-gray-400">
                  We continuously monitor, test, and refine to ensure optimal performance and results for your business.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-10 border-y border-gray-800 overflow-hidden">
        <MarqueeText 
          text="WEB DESIGN · DEVELOPMENT · BRANDING · UI/UX · DIGITAL STRATEGY · MOTION DESIGN" 
          className="text-2xl md:text-3xl font-semibold text-white py-4"
          speed={30}
        />
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">FAQ</h2>
              <p className="text-xl text-gray-300">
                Answers to the most common questions about our services.
              </p>
            </div>
          </FadeInSection>
          
          <div className="max-w-3xl mx-auto">
            <FadeInSection delay={0.1}>
              <div className="border-b border-gray-800 py-6">
                <h3 className="text-xl font-semibold mb-4">What is your typical project timeline?</h3>
                <p className="text-gray-400">
                  Project timelines vary depending on scope and complexity. A typical website project takes 8-12 weeks from start to finish, while larger projects may take longer. We'll provide a detailed timeline during the proposal phase.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="border-b border-gray-800 py-6">
                <h3 className="text-xl font-semibold mb-4">How much does a typical project cost?</h3>
                <p className="text-gray-400">
                  Project costs depend on your specific requirements, objectives, and the scope of work. We provide detailed proposals after understanding your needs during our initial consultation.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.3}>
              <div className="border-b border-gray-800 py-6">
                <h3 className="text-xl font-semibold mb-4">Do you offer ongoing support after launch?</h3>
                <p className="text-gray-400">
                  Yes, we offer various support and maintenance packages to ensure your digital presence continues to perform optimally after launch. These can include regular updates, security checks, content updates, and performance monitoring.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.4}>
              <div className="border-b border-gray-800 py-6">
                <h3 className="text-xl font-semibold mb-4">What technologies do you work with?</h3>
                <p className="text-gray-400">
                  We work with a range of modern technologies including React, Next.js, Vue.js, Laravel, WordPress, and more. Our recommendations are based on your specific requirements to ensure the best solution for your project.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.5}>
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-4">How do you handle revisions during the design process?</h3>
                <p className="text-gray-400">
                  Our design process includes multiple review stages where you can provide feedback. We typically include 2-3 rounds of revisions in our project scope to ensure you're completely satisfied with the final result.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">Ready to start your project?</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Contact us today to discuss how we can help bring your vision to life.
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

export default ServicesPage;