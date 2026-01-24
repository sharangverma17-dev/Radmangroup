import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseenter', () => setIsHovering(true));
      heroElement.addEventListener('mouseleave', () => setIsHovering(false));

      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', () => setIsHovering(true));
        heroElement.removeEventListener('mouseleave', () => setIsHovering(false));
      };
    }
  }, []);

  const maskStyle = isHovering
    ? {
        maskImage: `radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 100%)`,
      }
    : {};

  const revealStyle = isHovering
    ? {
        clipPath: `circle(180px at ${mousePosition.x}px ${mousePosition.y}px)`,
      }
    : { clipPath: 'circle(0px)' };

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-slate-900 cursor-crosshair">
      {/* Finished Building Layer */}
      <div className="absolute inset-0" style={maskStyle}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1584451049700-ec9b394f3805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGNvcnJpZG9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2OTI2NjIyNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hospital corridor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/60" />
      </div>

      {/* BIM Model Layer (Revealed on hover) */}
      <div
        className="absolute inset-0 transition-all duration-75 ease-out"
        style={revealStyle}
      >
        <div className="relative w-full h-full bg-slate-950">
          {/* Technical Grid Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, #22d3ee 1px, transparent 1px),
                linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          
          {/* Simulated BIM Model Visualization */}
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            {/* MEP Systems - Ducts */}
            <g stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.7">
              <rect x="100" y="80" width="1000" height="60" />
              <rect x="100" y="200" width="1000" height="45" />
              <line x1="200" y1="140" x2="200" y2="200" />
              <line x1="400" y1="140" x2="400" y2="200" />
              <line x1="600" y1="140" x2="600" y2="200" />
              <line x1="800" y1="140" x2="800" y2="200" />
            </g>
            
            {/* Electrical Conduits */}
            <g stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.6">
              <path d="M 150 300 L 150 400 L 1050 400 L 1050 500" />
              <path d="M 250 300 L 250 420 L 950 420 L 950 500" />
              <circle cx="150" cy="300" r="8" fill="#fbbf24" />
              <circle cx="250" cy="300" r="8" fill="#fbbf24" />
              <circle cx="1050" cy="500" r="8" fill="#fbbf24" />
              <circle cx="950" cy="500" r="8" fill="#fbbf24" />
            </g>
            
            {/* Piping Systems */}
            <g stroke="#10b981" strokeWidth="4" fill="none" opacity="0.7">
              <path d="M 100 550 L 300 550 L 300 600 L 700 600" />
              <path d="M 400 550 L 600 550 L 600 650 L 900 650" />
              <circle cx="100" cy="550" r="10" fill="#10b981" />
              <circle cx="400" cy="550" r="10" fill="#10b981" />
              <circle cx="700" cy="600" r="10" fill="#10b981" />
              <circle cx="900" cy="650" r="10" fill="#10b981" />
            </g>
            
            {/* Fire Protection */}
            <g stroke="#ef4444" strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="10,5">
              <path d="M 100 700 L 1100 700" />
              <circle cx="300" cy="700" r="12" fill="#ef4444" />
              <circle cx="600" cy="700" r="12" fill="#ef4444" />
              <circle cx="900" cy="700" r="12" fill="#ef4444" />
            </g>
            
            {/* Structural Elements */}
            <g stroke="#94a3b8" strokeWidth="6" fill="none" opacity="0.5">
              <line x1="200" y1="0" x2="200" y2="800" />
              <line x1="500" y1="0" x2="500" y2="800" />
              <line x1="800" y1="0" x2="800" y2="800" />
              <line x1="1000" y1="0" x2="1000" y2="800" />
            </g>
          </svg>

          {/* Technical Overlay Labels */}
          <div className="absolute top-8 right-8 space-y-2 font-mono text-xs">
            <div className="flex items-center gap-2 text-blue-400">
              <div className="w-8 h-0.5 bg-blue-400" />
              <span>HVAC DUCT</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <div className="w-8 h-0.5 bg-yellow-400" />
              <span>ELECTRICAL</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-8 h-0.5 bg-green-400" />
              <span>PLUMBING</span>
            </div>
            <div className="flex items-center gap-2 text-red-400">
              <div className="w-8 h-0.5 bg-red-400" />
              <span>FIRE PROTECT</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-8 h-0.5 bg-slate-400" />
              <span>STRUCTURAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pointer-events-none">
        <div className="space-y-6 max-w-3xl">
          <div className="font-mono text-cyan-400 text-sm tracking-wider uppercase">
            [UK + US Technical BIM Support]
          </div>
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
            CONFLICT RESOLVED<br />
            BEFORE YOU<br />
            BREAK GROUND.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            Construction is chaos. We are the logic. Move your cursor to see the complexity we coordinate.
          </p>
          <div className="font-mono text-xs text-slate-400 pt-4 border-t border-slate-700 max-w-md">
            INTERACTIVE: Hover anywhere to reveal the coordinated MEP/Structural model beneath the architectural finish
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="flex flex-col items-center gap-2 text-slate-400 font-mono text-xs">
          <span>SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
