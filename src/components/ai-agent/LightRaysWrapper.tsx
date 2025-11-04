"use client";

import React from 'react';
import dynamicImport from 'next/dynamic';

const LightRays = dynamicImport(() => import('@/components/LightRays'), {
  ssr: false,
});

interface LightRaysWrapperProps {
  raysColor?: string;
}

const LightRaysWrapper: React.FC<LightRaysWrapperProps> = ({ raysColor = "#5D51AF" }) => {
  return <LightRays raysColor={raysColor} />;
};

export default LightRaysWrapper;

