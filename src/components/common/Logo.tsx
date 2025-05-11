import React from 'react';
import { Wind } from 'lucide-react';

interface LogoProps {
  className?: string;
  fill?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', fill = '#005f99' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Wind size={32} color={fill} strokeWidth={2} />
    </div>
  );
};

export default Logo;