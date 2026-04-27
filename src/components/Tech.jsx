import React, { useState, useEffect, useRef } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechItem = ({ technology }) => {
  const [renderCanvas, setRenderCanvas] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setRenderCanvas(entry.isIntersecting);
      },
      { rootMargin: "400px", threshold: 0.1 }
    );


    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className='w-28 h-28 flex flex-col items-center justify-center transition-all duration-500'>
      <div className='w-20 h-20 relative flex items-center justify-center'>
        {/* Permanent static icon background */}
        <div className='absolute inset-0 bg-tertiary rounded-full p-4 shadow-card flex items-center justify-center'>
          <img 
            src={technology.icon} 
            alt={technology.name} 
            className='w-full h-full object-contain opacity-50'
          />
        </div>
        
        {/* 3D Canvas overlaid on top */}
        {renderCanvas && (
          <div className='absolute inset-0 z-10'>
            <BallCanvas icon={technology.icon} />
          </div>
        )}
      </div>
      <p className='text-white text-[12px] mt-2 font-medium opacity-60 text-center'>{technology.name}</p>
    </div>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <TechItem key={technology.name} technology={technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
