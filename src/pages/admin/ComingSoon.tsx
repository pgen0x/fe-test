import React from "react";
import { Construction } from "lucide-react";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-in fade-in duration-700">
      <div className="bg-[#13213F]/40 p-8 rounded-full border border-white/5 shadow-2xl">
        <Construction className="w-16 h-16 text-[#D57C17]" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Coming Soon</h1>
        <p className="text-gray-400 max-w-md mx-auto">
          Something great is on the way!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
