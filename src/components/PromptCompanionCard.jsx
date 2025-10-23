import React from 'react';
import { Sparkles } from 'lucide-react';
import { Star } from 'lucide-react';
import { FaStar } from "react-icons/fa";

export default function PromptCompanionCard() {
  return (
    <div>
      <div className="flex justify-center mb-3">


        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-150"></div>
          <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
        </div>


        <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-110">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className=" font-bold text-white tracking-wide">NextBento</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className=" text-center mb-5">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
          Your AI Prompt
          <br />
          10x Faster Companion
        </h1>
      </div>


      <div className='flex gap-2 justify-center'>
        <FaStar className='text-yellow-300' />
        <FaStar className='text-yellow-300' />
        <FaStar className='text-yellow-300' />
        <FaStar className='text-yellow-300' />
        <FaStar className='text-yellow-300' />
      </div>

      <div>
        <p className='text-center text-white'>Over 4000 5-star reviews</p>
      </div>

      <div className="relative flex justify-center mt-4">
        <div className="relative group">
          {/* Outer ring with binary code */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-30 h-30 rounded-full border-4 border-purple-400/30 animate-spin-slow">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[3px] fill-purple-300 font-mono">
                  <textPath href="#circlePath">
                    1000101 10001010110 010 001 10010 1010
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Central orb */}
          <div className="relative w-30 h-30 rounded-full bg-gradient-to-br from-black via-purple-900 to-indigo-900 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-110">
            {/* Glowing wave effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-blue-500/40 animate-pulse"></div>

            {/* Wave pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 20 100 Q 50 50, 80 100 T 140 100 T 200 100"
                    stroke="url(#waveGradient)"
                    strokeWidth="3"
                    fill="none"
                    className="animate-wave"
                  />
                  <path
                    d="M 20 120 Q 50 70, 80 120 T 140 120 T 200 120"
                    stroke="url(#waveGradient)"
                    strokeWidth="2.5"
                    fill="none"
                    opacity="0.7"
                    className="animate-wave-delayed"
                  />
                  <path
                    d="M 20 140 Q 50 90, 80 140 T 140 140 T 200 140"
                    stroke="url(#waveGradient)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                    className="animate-wave-delayed-2"
                  />
                </svg>
              </div>
            </div>

            {/* Sparkle effects */}
            <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-100"></div>
            <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-200"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes wave {
          0%, 100% {
            d: path("M 20 100 Q 50 50, 80 100 T 140 100 T 200 100");
          }
          50% {
            d: path("M 20 100 Q 50 150, 80 100 T 140 100 T 200 100");
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        
        .animate-wave-delayed {
          animation: wave 3s ease-in-out infinite 0.5s;
        }
        
        .animate-wave-delayed-2 {
          animation: wave 3s ease-in-out infinite 1s;
        }
        
        .delay-75 {
          animation-delay: 75ms;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-150 {
          animation-delay: 150ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
}