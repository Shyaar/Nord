import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none" />

      {/* Massive Eclipse Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-gradient-to-b from-[#FF5500]/20 via-[#FF5500]/5 to-transparent -[100%] blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mx-auto max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center  border border-white/5 bg-white/5 px-4 py-1.5 text-sm font-medium text-zinc-300 mb-8 backdrop-blur-md">
            <span className="mr-2 text-primary">●</span> New Standard in Copy
            Trading
          </div>

          <h1 className="text-6xl font-bold tracking-tight text-white sm:text-8xl mb-6 font-sans">
            Nord <span className="text-zinc-600">|</span> Trade Smarter, <br />
            <span className="text-gradient-primary">Faster, Safer.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 mb-10 leading-relaxed">
            The first fully integrated copy trading experience. No dashboards,
            no delays — Nord empowers you to trade directly alongside the best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg min-w-[160px]">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg min-w-[160px]"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Dashboard Preview / Visual */}
        <div
          className="mt-24 mx-auto max-w-6xl animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative -3xl border border-white/10 bg-[#0A0A0A]/80 p-2 shadow-2xl backdrop-blur-xl">
            {/* Glow behind the dashboard */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 -3xl blur-2xl -z-10 opacity-50" />

            <div className="-2xl bg-[#050505] border border-white/5 overflow-hidden aspect-[16/9] md:aspect-[21/9] relative flex flex-col">
              {/* Mock Header */}
              <div className="h-14 border-b border-white/5 flex items-center justify-between px-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3  bg-red-500/20 text-red-500 flex items-center justify-center text-[8px]">
                    ●
                  </div>
                  <div className="w-3 h-3  bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-[8px]">
                    ●
                  </div>
                  <div className="w-3 h-3  bg-green-500/20 text-green-500 flex items-center justify-center text-[8px]">
                    ●
                  </div>
                </div>
                <div className="text-xs text-zinc-600 font-mono">
                  nord_terminal.exe
                </div>
                <div className="w-16"></div>
              </div>

              {/* Mock Content */}
              <div className="flex-1 p-8 grid grid-cols-12 gap-6">
                {/* Sidebar */}
                <div className="hidden md:block col-span-2 space-y-4">
                  <div className="h-24 bg-white/5 -xl border border-white/5"></div>
                  <div className="h-24 bg-white/5 -xl border border-white/5"></div>
                  <div className="h-24 bg-white/5 -xl border border-white/5"></div>
                </div>
                {/* Main */}
                <div className="col-span-12 md:col-span-7 space-y-6">
                  <div className="h-16 bg-gradient-to-r from-primary/10 to-transparent -xl border-l-4 border-primary p-4 flex items-center justify-between">
                    <div>
                      <div className="h-2 w-24 bg-primary/20  mb-2"></div>
                      <div className="h-4 w-32 bg-white/10 "></div>
                    </div>
                    <div className="h-8 w-24 bg-primary  opacity-20"></div>
                  </div>
                  <div className="h-64 bg-white/5 -xl border border-white/5 relative overflow-hidden">
                    {/* Chart line mock */}
                    <svg
                      className="absolute bottom-0 w-full h-full text-primary"
                      fill="none"
                      viewBox="0 0 100 50"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="chartGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="currentColor"
                            stopOpacity="0.2"
                          />
                          <stop
                            offset="100%"
                            stopColor="currentColor"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 L10,45 L20,30 L30,35 L40,20 L50,25 L60,10 L70,15 L80,5 L90,10 L100,0 V50 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,50 L10,45 L20,30 L30,35 L40,20 L50,25 L60,10 L70,15 L80,5 L90,10 L100,0"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                </div>
                {/* Right Panel */}
                <div className="hidden md:block col-span-3 space-y-4">
                  <div className="h-full bg-white/5 -xl border border-white/5 p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8  bg-zinc-800"></div>
                      <div className="space-y-1">
                        <div className="h-2 w-16 bg-white/20 "></div>
                        <div className="h-2 w-10 bg-white/10 "></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 w-full bg-primary/20  border border-primary/20"></div>
                      <div className="h-8 w-full bg-white/5  border border-white/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
