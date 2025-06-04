import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';

export default function FeatherIcon({ name, className, size = 24, ...props }) {
  const [iconSvg, setIconSvg] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create the icon
      const icon = feather.icons[name];
      if (icon) {
        setIconSvg(icon.toSvg({ 
          width: size, 
          height: size,
          class: className
        }));
      }
    }
  }, [name, className, size]);

  return (
    <span 
      className={`feather-icon-wrapper ${className || ''}`} 
      dangerouslySetInnerHTML={{ __html: iconSvg }} 
      {...props} 
    />
  );
}
