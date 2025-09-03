
import React from 'react';
import { useInView } from 'react-intersection-observer';

function Animi({ children }) {
  const isMobile = window.innerWidth <= 768;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: isMobile ? 0.1 : 0.4, 
  });

  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}

export default Animi;



