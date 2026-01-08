import React from 'react';

const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="relative flex flex-col items-center gap-12">
                {/* Central Component: Animated SVG Hexagon/Core */}
                <div className="relative w-32 h-32 flex items-center justify-center animate-float">
                    {/* Pulsing Rings */}
                    <div className="absolute inset-0 border border-secondary/20 rounded-full animate-pulse-ring"></div>
                    <div className="absolute inset-0 border border-secondary/20 rounded-full animate-pulse-ring" style={{ animationDelay: '1s' }}></div>

                    {/* Main SVG Core */}
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]">
                        <path
                            d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
                            fill="none"
                            stroke="#4ade80"
                            strokeWidth="2"
                            strokeDasharray="300"
                            strokeDashoffset="300"
                            className="animate-[dash_3s_ease-in-out_infinite]"
                        />
                        <circle cx="50" cy="50" r="15" fill="#4ade80" className="animate-pulse">
                            <animate
                                attributeName="r"
                                values="12;16;12"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </svg>

                    {/* Scanning Line Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent animate-scan"></div>
                    </div>
                </div>

                {/* Loading Text & Progress Indicators */}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-2 h-2 bg-secondary rounded-full animate-bounce"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            ></div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-secondary font-mono text-sm tracking-[0.5em] uppercase opacity-80">
                            System Loading
                        </span>
                        <div className="mt-2 text-[10px] text-accent font-mono opacity-40">
                            INITIALIZING INTERFACE_
                        </div>
                    </div>
                </div>

                {/* Decorative Grid Background (Subtle) */}
                <div
                    className="absolute inset-0 -z-10 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #4ade80 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                ></div>
            </div>
        </div>
    );
};

export default PageLoader;
