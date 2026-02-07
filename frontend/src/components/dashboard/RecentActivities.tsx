"use client";

const followedTrades = [
  {
    id: 1,
    trader: "Viking_Alpha",
    asset: "BTC/USDT",
    side: "LONG",
    leverage: "20x",
    roi: "+45.2%",
    time: "2m ago",
    amount: "$1,250",
  },
  {
    id: 2,
    trader: "ShieldMaiden_01",
    asset: "ETH/USDT",
    side: "SHORT",
    leverage: "10x",
    roi: "+12.8%",
    time: "5m ago",
    amount: "$3,400",
  },
  {
    id: 3,
    trader: "Nordic_Whale",
    asset: "SOL/USDT",
    side: "LONG",
    leverage: "50x",
    roi: "-5.4%",
    time: "12m ago",
    amount: "$12,000",
  },
  {
    id: 4,
    trader: "OdinTrading",
    asset: "ARB/USDT",
    side: "LONG",
    leverage: "5x",
    roi: "+82.1%",
    time: "18m ago",
    amount: "$850",
  },
];

export const RecentActivities = () => {
  return (
    <aside className="w-60 flex-shrink-0 border-l border-white/5 bg-black hidden xl:flex flex-col h-screen sticky top-0 overflow-hidden">
      {/* Feed Header */}
      <div className="p-6 border-b border-white/5 bg-zinc-900/20">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest">
            Followed Traders
          </h3>
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
        </div>
        <p className="text-[10px] text-zinc-500 mt-1 uppercase">
          Live signals from your roster
        </p>
      </div>

      {/* Trades Feed */}
      <div className="flex-1 overflow-y-auto divide-y divide-white/5">
        {followedTrades.map((trade) => (
          <div
            key={trade.id}
            className="p-4 hover:bg-white/[0.02] transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-zinc-800 rounded-sm flex items-center justify-center text-[9px] font-bold text-zinc-400">
                  {trade.trader[0]}
                </div>
                <span className="text-[11px] font-bold text-white">
                  {trade.trader}
                </span>
              </div>
              <span className="text-[9px] text-zinc-600 uppercase font-mono">
                {trade.time}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-[10px]">
              <div className="space-y-1">
                <p className="text-zinc-500 uppercase">Pair / Leverage</p>
                <p className="text-white font-mono">
                  {trade.asset} <span className="text-zinc-600">|</span>{" "}
                  {trade.leverage}
                </p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-zinc-500 uppercase">ROI / Size</p>
                <p
                  className={`font-mono font-bold ${trade.roi.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                >
                  {trade.roi}{" "}
                  <span className="text-zinc-600 font-normal">
                    ({trade.amount})
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div
                className={`px-2 py-1 text-[9px] font-bold border ${
                  trade.side === "LONG"
                    ? "border-green-500/20 text-green-500 bg-green-500/5"
                    : "border-red-500/20 text-red-500 bg-red-500/5"
                }`}
              >
                {trade.side}
              </div>
              <button className="flex-1 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold hover:bg-primary hover:text-white transition-all uppercase tracking-tighter">
                Instant Copy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Utility */}
      <div className="p-4 border-t border-white/5">
        <button className="w-full py-2 text-[10px] font-bold text-zinc-500 border border-white/5 hover:text-white hover:border-white/10 transition-colors uppercase">
          Manage Following (42)
        </button>
      </div>
    </aside>
  );
};
