"use client";
import React from 'react';
import LightRays from './LightRays';

const TorchExample: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Torch Light Effect</h1>
          <p className="text-xl opacity-80">Move your mouse to see the torch follow</p>
        </div>
      </div>
      
      {/* Torch LightRays */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffd700" // Golden torch color
        raysSpeed={0.8}
        lightSpread={1.2}
        rayLength={3}
        pulsating={true}
        fadeDistance={1.5}
        saturation={1.2}
        followMouse={true}
        mouseInfluence={0.3}
        noiseAmount={0.1}
        distortion={0.05}
        introAnimation={true}
        className=""
      />
    </div>
  );
};

export default TorchExample;
