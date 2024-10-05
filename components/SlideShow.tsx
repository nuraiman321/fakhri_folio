import React from 'react';

const Slideshow = () => {
  return (
    <div className="font-sans bg-gray h-screen flex items-center justify-center">
    <div className="max-w-md relative overflow-hidden">
      <div className="slide opacity-0 animate__animated animate__fadeIn animate__delay-1s">Slide 1: This is the first slide.</div>
      <div className="slide opacity-0 animate__animated animate__fadeIn animate__delay-2s">Slide 2: Welcome to the slideshow.</div>
      <div className="slide opacity-0 animate__animated animate__fadeIn animate__delay-3s">Slide 3: Enjoy the animation!</div>
    </div>
  </div>
 
  );
}

export default Slideshow;
