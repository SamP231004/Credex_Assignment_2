import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeInSection from '../components/FadeInSection';
import ProjectCard from '../components/ProjectCard';

const caseStudies = {
  'nova-studio': {
    title: 'Nova Studio',
    category: 'Web Design & Development',
    client: 'Nova Creative',
    year: '2024',
    description: 'A complete brand and website overhaul for Nova Studio, a creative agency specializing in product design and development.',
    challenge: 'Nova Studio needed a website that reflected their creative capabilities while effectively showcasing their portfolio and services. The existing site lacked visual impact and failed to communicate their unique approach to design.',
    solution: 'We designed a bold, modern website with interactive elements and smooth animations that reflect the client\'s innovative approach. The new site features a streamlined user experience, intuitive navigation, and a dynamic portfolio section.',
    results: ['Increased website traffic by 75%', '42% improvement in time spent on site', '60% increase in contact form submissions', 'Featured in multiple design publications'],
    services: ['Brand Strategy', 'Web Design', 'Development', 'Animation'],
    imageUrl: 'https://images.pexels.com/photos/5370159/pexels-photo-5370159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1181310/pexels-photo-1181310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    testimonial: {
      quote: "Central Axis transformed our online presence completely. Their strategic approach and attention to detail resulted in a website that perfectly captures our brand essence and has significantly improved our user engagement.",
      author: "Alex Chen",
      position: "Founder, Nova Studio"
    }
  },
  'pulse-fitness': {
    title: 'Pulse Fitness',
    category: 'Branding & UI/UX',
    client: 'Pulse Fitness',
    year: '2023',
    description: 'A comprehensive branding and user experience design for a premium fitness app targeting health-conscious professionals.',
    challenge: 'Pulse Fitness needed to differentiate itself in a saturated market of fitness applications. They required a distinctive brand identity and intuitive user experience that would appeal to their target audience.',
    solution: 'We developed a vibrant, energetic brand identity and created an app interface that prioritizes simplicity and user engagement. The design focuses on motivational elements and clear progress visualization.',
    results: ['Successful app launch with 10,000+ downloads in the first month', '4.8/5 average user rating', '75% retention rate after 30 days', 'Featured in App Store\'s "Apps We Love"'],
    services: ['Brand Identity', 'UI/UX Design', 'Interaction Design', 'App Strategy'],
    imageUrl: 'https://images.pexels.com/photos/5213879/pexels-photo-5213879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/3846272/pexels-photo-3846272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6111/smartphone-friends-internet-connection.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/375767/pexels-photo-375767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    testimonial: {
      quote: "The team at Central Axis exceeded our expectations at every turn. They didn't just create a beautiful app; they developed a comprehensive brand experience that resonates perfectly with our target audience.",
      author: "Sarah Johnson",
      position: "Marketing Director, Pulse Fitness"
    }
  },
  'echo-finance': {
    title: 'Echo Finance',
    category: 'Web Development',
    client: 'Echo Financial Services',
    year: '2023',
    description: 'A secure, user-friendly financial platform designed to simplify personal banking and investment management.',
    challenge: 'Echo Finance needed a web application that could handle complex financial operations while maintaining security and compliance standards, all within an accessible interface for users of all technical abilities.',
    solution: 'We built a robust financial platform using modern web technologies, focusing on security, performance, and usability. The system features real-time data visualization, secure transaction processing, and personalized user dashboards.',
    results: ['Reduced customer service inquiries by 30%', 'Increased user engagement by 65%', 'Improved transaction completion rate by 42%', 'Streamlined onboarding process from 15 steps to 5'],
    services: ['Web Application Development', 'UX Research', 'Security Implementation', 'Performance Optimization'],
    imageUrl: 'https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/386502/pexels-photo-386502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    testimonial: {
      quote: "Central Axis delivered a platform that transformed how we serve our customers. Their technical expertise and understanding of financial service requirements resulted in a solution that balances security, functionality, and user experience.",
      author: "Michael Rodriguez",
      position: "CTO, Echo Finance"
    }
  },
  'vertex-app': {
    title: 'Vertex App',
    category: 'UI/UX Design',
    client: 'Vertex Technologies',
    year: '2023',
    description: 'A productivity application designed to help teams collaborate effectively across various projects and tasks.',
    challenge: 'Vertex needed to reimagine their collaboration tool, addressing usability issues that were causing user frustration and hindering adoption. The application needed to support complex workflows while remaining intuitive.',
    solution: 'We conducted extensive user research to identify pain points and redesigned the interface with a focus on clarity, efficiency, and visual hierarchy. The new design prioritizes context-awareness and reduces cognitive load.',
    results: ['40% increase in daily active users', 'Reduced onboarding time by 60%', 'Increased project completion rate by 35%', '50% reduction in support tickets related to UI confusion'],
    services: ['UX Research', 'UI Design', 'Usability Testing', 'Design System Creation'],
    imageUrl: 'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6177613/pexels-photo-6177613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    testimonial: {
      quote: "The UX transformation delivered by Central Axis completely changed how users interact with our platform. They brought clarity to complex workflows and created an intuitive experience that our users love.",
      author: "Emily Wilson",
      position: "Product Manager, Vertex Technologies"
    }
  },
};

type CaseStudyId = keyof typeof caseStudies;

const relatedProjects = [
  {
    id: 'lunar-resort',
    title: 'Lunar Resort',
    category: 'Branding & Web',
    imageUrl: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'tempo-music',
    title: 'Tempo Music',
    category: 'Web Development',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const CaseStudyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudyId = id as CaseStudyId;
  
  if (!caseStudies[caseStudyId]) {
    return <div className="min-h-screen flex items-center justify-center">Case study not found</div>;
  }
  
  const caseStudy = caseStudies[caseStudyId];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/case-studies" className="inline-flex items-center text-gray-400 hover:text-white mb-8 group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to case studies
            </Link>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              <AnimatedText 
                text={caseStudy.title} 
                splitBy="word"
                delay={0.2}
              />
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-900 px-3 py-1 text-sm text-gray-300">
                {caseStudy.category}
              </div>
              <div className="bg-gray-900 px-3 py-1 text-sm text-gray-300">
                {caseStudy.year}
              </div>
              <div className="bg-gray-900 px-3 py-1 text-sm text-gray-300">
                {caseStudy.client}
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-12">
              {caseStudy.description}
            </p>
          </div>
          
          <FadeInSection delay={0.3}>
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={caseStudy.imageUrl} 
                alt={caseStudy.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <FadeInSection>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-gray-300 mb-12">
                  {caseStudy.challenge}
                </p>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Solution</h2>
                <p className="text-gray-300 mb-12">
                  {caseStudy.solution}
                </p>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Results</h2>
                <ul className="text-gray-300 mb-12 list-disc pl-6 space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </FadeInSection>
            </div>
            
            <FadeInSection delay={0.2}>
              <div className="bg-gray-900 p-8">
                <h3 className="text-xl font-semibold mb-6">Project Details</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm text-gray-400 mb-2">CLIENT</h4>
                  <p>{caseStudy.client}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm text-gray-400 mb-2">YEAR</h4>
                  <p>{caseStudy.year}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">SERVICES</h4>
                  <ul className="space-y-1">
                    {caseStudy.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Project Gallery</h2>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.galleryImages.map((image, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <div className="overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${caseStudy.title} - Image ${index + 1}`}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700 ease-out-expo"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-10 h-10 mx-auto mb-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.691 6.292C5.094 4.771 7.217 4 10.066 4h.644a.429.429 0 0 1 .429.429v2.214a.43.43 0 0 1-.429.429h-.644c-1.66 0-2.821.235-3.484.704-.678.486-1.017 1.372-1.017 2.658v.643c0 .237.192.429.429.429h4.715a.429.429 0 0 1 .429.429v2.214a.43.43 0 0 1-.429.429H6.423a.429.429 0 0 1-.429-.429v-3.64c0-2.05-.768-3.509-2.303-4.379a.424.424 0 0 1-.149-.59l.149-.248Zm11.309 0C16.403 4.771 18.526 4 21.375 4h.644a.429.429 0 0 1 .429.429v2.214a.43.43 0 0 1-.429.429h-.644c-1.66 0-2.821.235-3.484.704-.678.486-1.017 1.372-1.017 2.658v.643c0 .237.192.429.429.429h4.715a.429.429 0 0 1 .429.429v2.214a.43.43 0 0 1-.429.429h-4.715a.429.429 0 0 1-.429-.429v-3.64c0-2.05-.768-3.509-2.303-4.379a.424.424 0 0 1-.149-.59l.149-.248Z" />
              </svg>
              
              <p className="text-xl md:text-2xl font-medium mb-8">
                "{caseStudy.testimonial.quote}"
              </p>
              
              <div>
                <p className="font-semibold">{caseStudy.testimonial.author}</p>
                <p className="text-gray-400">{caseStudy.testimonial.position}</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
              <div className="mb-8 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Related projects</h2>
                <p className="text-gray-400">
                  Explore more of our work
                </p>
              </div>
              <Link 
                to="/case-studies" 
                className="inline-flex items-center text-white hover:text-gray-300 animated-border relative pb-1 group"
              >
                View all case studies
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((project, index) => (
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

      {/* Next Case Study */}
      <section className="py-20 md:py-32 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center">
              <p className="text-gray-400 mb-4">Next Case Study</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-8">Pulse Fitness</h2>
              <Link 
                to="/case-studies/pulse-fitness" 
                className="inline-flex items-center justify-center px-8 py-4 border border-white bg-transparent text-white font-medium transition-colors hover:bg-white/10 group"
              >
                View case study
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetailPage;