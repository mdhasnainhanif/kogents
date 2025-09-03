'use client';

import React from 'react';
import LightRays from './LightRays';

// Basic Usage Example
const LightRaysUsage: React.FC = () => {
  return (
    <div className="w-full h-screen relative bg-gray-900">
      {/* Your content goes here */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Your Content</h1>
          <p className="text-xl">The LightRays effect runs in the background</p>
        </div>
      </div>
      
      {/* LightRays background effect */}
      <div className="absolute inset-0 z-0">
        <LightRays />
      </div>
    </div>
  );
};

export default LightRaysUsage;
