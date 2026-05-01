'use client';

import Image from "next/image";

const Banner = () => {
    return (
      <div className="relative w-full h-[80vh]">
      
          
          <Image
            src="/banner.jpg" 
            alt="Banner"
            fill
            priority
            className="object-cover"
          />
      
          
          <div className="absolute inset-0 bg-black/30" />
      
          
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center px-4 max-w-3xl">
      
            <h3 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Upgrade your skill today
            </h3>
      
            <p className="text-gray-200 text-sm md:text-lg leading-relaxed">
              In an era where key skills and competencies rise and fall out of relevance at a faster rate than ever before, 
              professional development has become a key aspect of every organizational strategy.
            </p>
      
          </div>
        </div>  
    );
};

export default Banner;