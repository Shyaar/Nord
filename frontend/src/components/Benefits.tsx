import { Card } from './ui/Card';

export const Benefits = () => {
  return (
    <section id="why-nord" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5  blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Why Choose Nord?
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
             Whether you're starting out or already a pro, we've built the perfect ecosystem for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Copiers */}
          <Card className="bg-[#0A0A0A] border-white/5 p-8 md:p-12 relative overflow-hidden group" hover>
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10  blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
            
            <div className="relative z-10">
                <div className="mb-8">
                <span className="inline-block px-4 py-1.5  bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                    For Beginners
                </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">
                Start Earning <span className="text-zinc-500">Without Trading</span>
                </h3>
                <ul className="space-y-6">
                {[
                    "No market knowledge required",
                    "Automated trade execution",
                    "Set your own risk limits",
                    "Transparent performance history",
                    "Stop any time instantly"
                ].map((item, i) => (
                    <li key={i} className="flex items-start group/item">
                    <div className="mt-1 mr-4 flex-shrink-0 w-5 h-5  bg-primary/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-zinc-300 group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
          </Card>

          {/* For Traders */}
          <Card className="bg-[#0A0A0A] border-white/5 p-8 md:p-12 relative overflow-hidden group" hover>
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5  blur-[80px] -translate-y-1/2 -translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500" />

             <div className="relative z-10">
                <div className="mb-8">
                <span className="inline-block px-4 py-1.5  bg-white/10 text-white text-sm font-semibold border border-white/20">
                    For Pro Traders
                </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">
                Monetize <span className="text-zinc-500">Your Skills</span>
                </h3>
                <ul className="space-y-6">
                {[
                    "Earn commissions on every copied trade",
                    "Build a loyal following",
                    "Performance-based reward tiers",
                    "Access to professional charting tools",
                    "Community recognition"
                ].map((item, i) => (
                    <li key={i} className="flex items-start group/item">
                    <div className="mt-1 mr-4 flex-shrink-0 w-5 h-5  bg-white/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-zinc-300 group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
