import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  imageUrl,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/case-studies/${id}`}
      className={cn(
        "block group relative overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="aspect-[4/3] overflow-hidden"
      >
        <img 
          src={imageUrl} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out-expo",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
      </div>
      
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-gray-400">{category}</p>
        </div>
        
        <ArrowUpRight 
          size={20} 
          className={cn(
            "transform transition-transform duration-300",
            isHovered ? "translate-x-1 -translate-y-1" : ""
          )}
        />
      </div>
    </Link>
  );
};

export default ProjectCard;