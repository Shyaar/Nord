import { Button } from './ui/Button';
import { Card } from './ui/Card';

const traders = [
  {
    name: "Alex M.",
    strategy: "Crypto Impulse",
    roi: "+142%",
    winRate: "78%",
    risk: "Medium",
    followers: "2.4k",
    avatar: "bg-gradient-to-br from-zinc-700 to-zinc-900",
  },
  {
    name: "Sarah K.",
    strategy: "Stable Growth",
    roi: "+45%",
    winRate: "92%",
    risk: "Low",
    followers: "5.1k",
    avatar: "bg-gradient-to-br from-zinc-700 to-zinc-900",
  },
  {
    name: "Davide R.",
    strategy: "Forex Swing",
    roi: "+89%",
    winRate: "65%",
    risk: "High",
    followers: "1.2k",
    avatar: "bg-gradient-to-br from-zinc-700 to-zinc-900",
  },
  {
    name: "Elena V.",
    strategy: "Global Macro",
    roi: "+67%",
    winRate: "81%",
    risk: "Medium",
    followers: "3.8k",
    avatar: "bg-gradient-to-br from-zinc-700 to-zinc-900",
  }
];

export const TradersShowcase = () => {
  return (
    <section id="top-traders" className="py-24 bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white/90 sm:text-4xl mb-4">
              Top Performing Traders
            </h2>
            <p className="text-zinc-500 text-lg">
              Choose from thousands of verified experts. Filter by risk, return, and strategy.
            </p>
          </div>
          <Button variant="outline" className="border-white/10 text-zinc-400 hover:text-white hover:border-white/30">
            View All Traders
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traders.map((trader, index) => (
            <Card key={index} hover className="flex flex-col bg-[#0A0A0A] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${trader.avatar} flex items-center justify-center text-white font-bold text-sm border border-white/10`}>
                  {trader.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-white">{trader.name}</h3>
                  <div className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                     <p className="text-xs text-zinc-500">{trader.strategy}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between items-end border-b border-white/5 pb-3">
                  <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider pl-1">Return (1Y)</span>
                  <span className="text-primary font-bold text-lg">{trader.roi}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider pl-1">Win Rate</span>
                  <span className="text-white">{trader.winRate}</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider pl-1">Followers</span>
                  <span className="text-white">{trader.followers}</span>
                </div>
              </div>

              <Button className="w-full text-sm font-semibold" variant="glow">
                Copy Trader
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
