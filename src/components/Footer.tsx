import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">CENTRAL AXIS</h3>
            <p className="text-gray-400 mb-6">
              Creating exceptional digital experiences that drive growth and engagement.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  Home
                  <ArrowUpRight size={14} className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  About
                  <ArrowUpRight size={14} className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  Case Studies
                  <ArrowUpRight size={14} className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  Services
                  <ArrowUpRight size={14} className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  Contact
                  <ArrowUpRight size={14} className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  Web Design
                  <ArrowUpRight size={14} className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  Development
                  <ArrowUpRight size={14} className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  Branding
                  <ArrowUpRight size={14} className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  UI/UX Design
                  <ArrowUpRight size={14} className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  Digital Strategy
                  <ArrowUpRight size={14} className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                123 Design Street<br />
                New York, NY 10001
              </li>
              <li>
                <a href="mailto:hello@centralaxis.com" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <Mail size={16} className="mr-2" />
                  hello@centralaxis.com
                </a>
              </li>
              <li>
                <a href="tel:+12125551234" className="text-gray-400 hover:text-white transition-colors">
                  +1 (212) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Central Axis. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;