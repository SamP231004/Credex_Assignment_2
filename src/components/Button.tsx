import { ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  withArrow = false,
  ...props
}) => {
  const variants = {
    default: 'bg-white text-black hover:bg-gray-200',
    outline: 'border border-white bg-transparent text-white hover:bg-white/10',
    text: 'bg-transparent text-white hover:text-gray-300',
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  return (
    <button
      className={cn(
        'font-medium transition-all inline-flex items-center justify-center',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} className="ml-2 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};

export default Button;