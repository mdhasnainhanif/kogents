"use client";

import React from "react";
import { ArrowRightIcon } from "lucide-react";
import zopimEvents from "@/utils/zopim-events";

const ZopimButton: React.FC = () => {
  return (
    <button
      onClick={zopimEvents.toggleChat}
      className="buttonAnimation2 pink mx-auto d-inline-flex align-items-center gap-2 px-6 py-3 text-base font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
    >
      Talk to a Chatbot Specialist
      <ArrowRightIcon style={{ height: 24 }} />
    </button>
  );
};

export default ZopimButton;
