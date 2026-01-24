import { CheckCircle2, AlertTriangle, FileCheck } from 'lucide-react';

export function Methodology() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4">
            [VIRTUAL CONSTRUCTION PARTNER]
          </div>
          <h2 className="font-mono text-3xl md:text-5xl text-slate-900 tracking-tight mb-6">
            WE SEE WHAT<br />OTHERS MISS.
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
            We don't just draft; we construct virtually. We identify clashes, propose re-routes, 
            and ensure the site team has zero RFI stoppages.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-slate-300 hidden md:block" />
            
            {/* Phases */}
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Phase 1: Pre-Construction */}
              <div className="relative">
                <div className="bg-white border-2 border-slate-900 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono text-sm">
                      01
                    </div>
                    <div>
                      <div className="font-mono text-xs text-slate-500 tracking-wider uppercase">
                        Phase
                      </div>
                      <div className="font-mono text-lg text-slate-900">
                        Pre-Construction
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Federated model creation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Clash detection & resolution</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Constructability analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Alternative routing proposals</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-cyan-600">
                      <div className="w-2 h-2 bg-cyan-600" />
                      <span className="font-mono text-xs tracking-wider uppercase">
                        We operate here
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2: Construction */}
              <div className="relative">
                <div className="bg-white border-2 border-slate-300 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center font-mono text-sm">
                      02
                    </div>
                    <div>
                      <div className="font-mono text-xs text-slate-500 tracking-wider uppercase">
                        Phase
                      </div>
                      <div className="font-mono text-lg text-slate-900">
                        Construction
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">Installation proceeds smoothly</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">Zero clash-related RFIs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">No rework required</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">On schedule delivery</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="font-mono text-xs text-slate-400 tracking-wider uppercase">
                      Result of our work
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3: Handover */}
              <div className="relative">
                <div className="bg-white border-2 border-slate-300 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center font-mono text-sm">
                      03
                    </div>
                    <div>
                      <div className="font-mono text-xs text-slate-500 tracking-wider uppercase">
                        Phase
                      </div>
                      <div className="font-mono text-lg text-slate-900">
                        Handover
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">Accurate as-built data</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">COBie-compliant deliverables</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">FM-ready digital twin</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">Client satisfaction</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="font-mono text-xs text-slate-400 tracking-wider uppercase">
                      Long-term value
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Difference Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Without Us */}
          <div className="bg-white border-2 border-red-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="font-mono text-xl text-slate-900">
                Without Virtual Construction
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                <div className="w-1.5 h-1.5 bg-red-600 mt-2 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <span className="font-mono text-red-700">Field clashes</span> discovered during installation
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                <div className="w-1.5 h-1.5 bg-red-600 mt-2 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <span className="font-mono text-red-700">Costly rework</span> and material waste
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                <div className="w-1.5 h-1.5 bg-red-600 mt-2 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <span className="font-mono text-red-700">Schedule delays</span> waiting for design resolutions
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                <div className="w-1.5 h-1.5 bg-red-600 mt-2 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <span className="font-mono text-red-700">RFI bottlenecks</span> halting site progress
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-red-600 mt-2 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <span className="font-mono text-red-700">Budget overruns</span> from change orders
                </div>
              </div>
            </div>
          </div>

          {/* With Us */}
          <div className="bg-white border-2 border-green-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="w-6 h-6 text-green-600" />
              <h3 className="font-mono text-xl text-slate-900">
                With Our Virtual Construction
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                <div className="w-1.5 h-1.5 bg-green-600 mt-2 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <span className="font-mono text-green-700">Clashes resolved</span> before fabrication begins
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                <div className="w-1.5 h-1.5 bg-green-600 mt-2 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <span className="font-mono text-green-700">Optimized routing</span> for maximum efficiency
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                <div className="w-1.5 h-1.5 bg-green-600 mt-2 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <span className="font-mono text-green-700">Predictable timeline</span> with proactive coordination
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                <div className="w-1.5 h-1.5 bg-green-600 mt-2 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <span className="font-mono text-green-700">Installation confidence</span> from accurate models
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 mt-2 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <span className="font-mono text-green-700">Budget protection</span> through digital validation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 pt-12 border-t border-slate-300">
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed mb-4">
              The beauty is in the coordination.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We are not just a drafting team. We are your virtual pre-construction department. 
              Every clash detected digitally is a crisis prevented physically. Every coordinated 
              connection is a delay avoided. Every optimized route is money saved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
