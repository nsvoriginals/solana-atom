import React from "react";

export const Footer = () => {
  return (
    <div className="w-screen flex flex-col gap-10 items-center justify-center relative text-white py-10">
      {/* Gradient background with noise overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-600 via-violet-500 to-pink-500 rounded-lg overflow-hidden">
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover'
          }}
        />
      </div>

      {/* Content */}
      <h1 className="text-5xl font-PPmori text-left bg-clip-text text-transparent bg-gradient-to-b from-white/80 to-white/20 relative z-10">
        Learning about Solana?
      </h1>
      <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-white/80 to-white/20 relative z-10">
        You're on the right track, JUST EXPLORE ATOM
      </h1>
      <h1 className="text-9xl font-Nokia text-white relative z-10">
        AT<span className="text-9xl font-Nokia">o</span>M
      </h1>
    </div>
  );
};