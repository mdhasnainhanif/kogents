'use client';

import React from 'react';
import LightRays from './LightRays';

const LightRaysDemo: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative">
      {/* Hero Section with Dramatic Top-Down Rays */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ff6b6b"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={3}
          pulsating={true}
          mouseInfluence={0.2}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Dramatic Light Rays</h1>
          <p className="text-xl">Top-down pulsating rays with mouse interaction</p>
        </div>
      </section>

      {/* Subtle Side Lighting Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900">
        <LightRays
          raysOrigin="left"
          raysColor="#4ecdc4"
          raysSpeed={0.5}
          lightSpread={2}
          rayLength={1.5}
          followMouse={false}
        />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Subtle Side Lighting</h2>
          <p className="text-xl">Gentle left-side rays without mouse influence</p>
        </div>
      </section>

      {/* Bottom-Up Rays Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-t from-green-900 to-blue-900">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#ffd93d"
          raysSpeed={0.8}
          lightSpread={1.2}
          rayLength={2.5}
          pulsating={true}
          mouseInfluence={0.15}
        />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Bottom-Up Rays</h2>
          <p className="text-xl">Rising rays from bottom with subtle pulsating</p>
        </div>
      </section>

      {/* Corner Rays Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-orange-900">
        <LightRays
          raysOrigin="top-right"
          raysColor="#ff8a80"
          raysSpeed={1.2}
          lightSpread={0.6}
          rayLength={2}
          pulsating={false}
          mouseInfluence={0.1}
        />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Corner Rays</h2>
          <p className="text-xl">Focused rays from top-right corner</p>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-bl from-indigo-900 to-pink-900">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1}
          rayLength={2}
          pulsating={false}
          fadeDistance={1.0}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.0}
          distortion={0.0}
          introAnimation={true}
        />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Interactive Demo</h2>
          <p className="text-xl mb-8">Move your mouse to see the rays follow</p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-sm">
            <div className="bg-white/10 p-3 rounded">
              <p><strong>Origin:</strong> Top Center</p>
              <p><strong>Color:</strong> White</p>
              <p><strong>Mouse:</strong> Enabled</p>
            </div>
            <div className="bg-white/10 p-3 rounded">
              <p><strong>Speed:</strong> Normal</p>
              <p><strong>Spread:</strong> Medium</p>
              <p><strong>Length:</strong> Medium</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightRaysDemo;
