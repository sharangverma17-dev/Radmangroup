import { Activity, Layers, Boxes } from 'lucide-react';

export function Expertise() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-white border-t-4 border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-slate-300">
          <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4">
            [TECHNICAL SOLUTIONS]
          </div>
          <h2 className="font-mono text-3xl md:text-5xl text-slate-900 tracking-tight mb-6">
            WE DON'T JUST DRAFT.<br />WE CONSTRUCT VIRTUALLY.
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
            Specializing in high-density complexity and massive-scale precision. 
            We are your virtual pre-construction department.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* UK Healthcare */}
          <div className="group border-2 border-slate-200 hover:border-slate-900 transition-all duration-300">
            <div className="p-8 lg:p-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-slate-900 text-cyan-400">
                  <Activity className="w-8 h-8" />
                </div>
                <div className="font-mono text-xs text-slate-500 tracking-wider">
                  UK / HEALTHCARE
                </div>
              </div>

              {/* Title */}
              <h3 className="font-mono text-2xl lg:text-3xl text-slate-900 mb-4 tracking-tight">
                HTM COMPLIANT<br />COORDINATION
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-8 leading-relaxed">
                Navigating complex medical gas, HVAC, and electrical density in strictly 
                regulated UK healthcare environments.
              </p>

              {/* Technical Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-mono text-sm text-slate-900 mb-1">HBN/HTM Standards</div>
                    <div className="text-sm text-slate-600">Full compliance with UK health technical memoranda</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-mono text-sm text-slate-900 mb-1">Medical Gas Systems</div>
                    <div className="text-sm text-slate-600">Critical coordination of vacuum, O₂, and medical air distribution</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-mono text-sm text-slate-900 mb-1">High-Density Environments</div>
                    <div className="text-sm text-slate-600">Operating theatres, ICU zones, diagnostic imaging suites</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-slate-200">
                <div className="font-mono text-xs text-slate-500">
                  LOD 400 / FEDERATED MODEL / CLASH-FREE
                </div>
              </div>
            </div>
          </div>

          {/* US Industrial */}
          <div className="group border-2 border-slate-200 hover:border-slate-900 transition-all duration-300">
            <div className="p-8 lg:p-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-slate-900 text-blue-400">
                  <Boxes className="w-8 h-8" />
                </div>
                <div className="font-mono text-xs text-slate-500 tracking-wider">
                  US / INDUSTRIAL
                </div>
              </div>

              {/* Title */}
              <h3 className="font-mono text-2xl lg:text-3xl text-slate-900 mb-4 tracking-tight">
                LARGE-SCALE<br />INDUSTRIAL PRECISION
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-8 leading-relaxed">
                Process piping and structural steel integration for heavy-industry 
                facilities across the Americas.
              </p>

              {/* Technical Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-mono text-sm text-slate-900 mb-1">AISC Steel Detailing</div>
                    <div className="text-sm text-slate-600">Complex connection design and structural coordination</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-mono text-sm text-slate-900 mb-1">Process Piping Integration</div>
                    <div className="text-sm text-slate-600">Large-diameter pipe runs, supports, and equipment connections</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-mono text-sm text-slate-900 mb-1">Massive Scale Management</div>
                    <div className="text-sm text-slate-600">Manufacturing plants, refineries, power generation facilities</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-slate-200">
                <div className="font-mono text-xs text-slate-500">
                  LOD 400 / FABRICATION-READY / ZERO RFI STOPPAGES
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 pt-16 border-t border-slate-300">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-slate-900" />
                <h4 className="font-mono text-sm text-slate-900 tracking-wider uppercase">
                  Beyond Geometry
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We understand flow rates, clearance zones, and constructability—not just 3D shapes.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-slate-900" />
                </div>
                <h4 className="font-mono text-sm text-slate-900 tracking-wider uppercase">
                  Region Specific
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deep knowledge of UK HBN/HTM codes and US AISC standards. We speak your regulatory language.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-slate-900" />
                </div>
                <h4 className="font-mono text-sm text-slate-900 tracking-wider uppercase">
                  Single Source of Truth
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We manage the federated model, ensuring Architecture, Structure, and MEP speak the same language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
