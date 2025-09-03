'use client';

import React from 'react';
import LightRays from '../../components/LightRays';

const TestLightRaysPage: React.FC = () => {
  return (
    <div className="w-full h-screen relative bg-gray-900">
      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">LightRays Test</h1>
          <p className="text-xl">Move your mouse to see the effect</p>
        </div>
      </div>
      
      {/* LightRays effect */}
      <LightRays 
        raysOrigin="top-center"
        raysColor="#ff6b6b"
        raysSpeed={1}
        lightSpread={1}
        rayLength={2}
        pulsating={true}
        followMouse={true}
        mouseInfluence={0.2}
      />
    </div>
  );
};

export default TestLightRaysPage;
