import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
  className?: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  index,
  className,
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "service-card aspect-square relative overflow-hidden group",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out-expo"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="service-card-content absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="mb-4 text-xs font-medium tracking-wider text-gray-300">
          {String(index).padStart(2, '0')}
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
        
        <p className="text-sm text-gray-300 mb-6">{description}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm font-medium">Learn more</span>
          <ArrowUpRight 
            size={20} 
            className={cn(
              "transform transition-transform duration-300",
              isHovered ? "translate-x-1 -translate-y-1" : ""
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;