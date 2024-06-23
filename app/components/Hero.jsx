import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoContainerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, [videoContainerRef]);

  const handleButtonClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={videoContainerRef} className="relative hero shadow-[0_0_5rem_rgba(53,43,77,1)]">
      {isIntersecting && (
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/web.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4">Bienvenidos a Confecciones NESS</h1>
        <p className="text-xl mb-6">Descubre nuestras prendas y enamorate 💖</p>
        <button
          className="bg-[#ff3a9c] hover:bg-[#352b4d] text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Suscríbete a nuestra lista de correo
        </button>
      </div>
    </div>
  );
};

export default Hero;
