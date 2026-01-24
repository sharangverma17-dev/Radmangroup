export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-8 md:px-16 lg:px-24 border-t-4 border-cyan-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-mono text-xl text-white tracking-tight">
              YOUR VIRTUAL<br />CONSTRUCTION TEAM
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Specialized BIM coordination and technical support for UK Healthcare 
              and US Industrial projects.
            </p>
          </div>

          {/* Expertise */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-slate-500 tracking-widest uppercase">
              Expertise
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-cyan-500 mt-2 flex-shrink-0" />
                <span>UK Healthcare / HTM Compliance</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-cyan-500 mt-2 flex-shrink-0" />
                <span>US Industrial / AISC Standards</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-cyan-500 mt-2 flex-shrink-0" />
                <span>MEP Coordination / LOD 400</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-cyan-500 mt-2 flex-shrink-0" />
                <span>Clash Detection & Resolution</span>
              </div>
            </div>
          </div>

          {/* Technical Support */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-slate-500 tracking-widest uppercase">
              Technical Support
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-slate-400 mb-1">UK Projects</div>
                <div className="text-white">HBN/HTM Compliant Coordination</div>
              </div>
              <div>
                <div className="text-slate-400 mb-1">US Projects</div>
                <div className="text-white">Industrial & Infrastructure Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="font-mono text-xs text-slate-500">
              © 2025 VIRTUAL CONSTRUCTION PARTNER. PRECISION COORDINATION.
            </div>
            <div className="font-mono text-xs text-slate-500">
              UK + US TECHNICAL BIM SUPPORT
            </div>
          </div>
        </div>

        {/* Technical Grid Decoration */}
        <div className="mt-12 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-3 gap-4 opacity-20">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
}
