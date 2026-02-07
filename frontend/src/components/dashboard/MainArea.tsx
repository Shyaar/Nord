"use client";

const traders = [
  {
    name: "zip8h...VnR3",
    orders: "3,867 orders",
    completion: "95.20% completion",
    rate: "95.20% Avg. release 15 min",
    price: "50.998",
    available: "1,123.40 USDT",
    limit: "500.00 - $1,121.00",
    bank: "Bank Transfer",
    rating: "3,867 orders",
  },
  {
    name: "X9q7z...T5pP",
    orders: "1,453 orders",
    completion: "99.80% completion",
    rate: "99.28% Avg. release 15 min",
    price: "$1.001",
    available: "37,450.13 USDT",
    limit: "520 - $5,000.00",
    bank: "ACLEDA Bank",
    rating: "1,453 orders",
  },
  {
    name: "7DM4s...Qx19",
    orders: "4,170 orders",
    completion: "100.00% completion",
    rate: "93.02% Avg. release 15 min",
    price: "$0.998",
    available: "792.00 USDT",
    limit: "5150.00 - $785.00",
    bank: "Citibank",
    rating: "4,170 orders",
  },
  {
    name: "9Re2m...G6W9",
    orders: "1,613 orders",
    completion: "100.00% completion",
    rate: "100% Avg. release 10 min",
    price: "$0.997",
    available: "1,310.99 USDT",
    limit: "320.00 - $1,287.00",
    bank: "ACLEDA Bank",
    rating: "1,613 orders",
  },
  {
    name: "1Hz3z...PtJ1",
    orders: "2,185 orders",
    completion: "100.00% completion",
    rate: "98.28% Avg. release 15 min",
    price: "$1.002",
    available: "5,352.27 USDT",
    limit: "320.00 - $3,000.00",
    bank: "PNC Bank",
    rating: "2,185 orders",
  },
];

export const MainArea = () => {
  return (
    <div className="flex-1 flex flex-col bg-[#050505] min-h-screen">
      {/* Top Professional Header */}
      <header className="h-14 border-b border-white/5 bg-black flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            {["All Assets", "Markets", "Trade", "Tools"].map((item) => (
              <button
                key={item}
                className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1"
              >
                {item}
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ))}
            <button className="text-xs font-medium text-zinc-400 hover:text-white">
              More
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* Icons */}
          <div className="flex items-center gap-4 text-zinc-500">
            <button className="hover:text-white">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="hover:text-white">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="hover:text-white">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </button>
            <button className="hover:text-white">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Tabs Section */}
      <div className="px-8 pt-8 pb-4">
        <div className="flex items-center gap-2 mb-8">
          {["Express", "P2P", "Block"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1.5 text-xs font-bold transition-colors ${tab === "P2P" ? "bg-white text-black" : "bg-zinc-900 text-zinc-500 hover:text-white"}`}
            >
              {tab}
            </button>
          ))}
          <div className="ml-8 flex items-center gap-4 text-xs">
            <span className="text-white font-bold">USDT</span>
            <span className="text-zinc-600">BTC</span>
            <span className="text-zinc-600">USDC</span>
            <svg
              className="w-3 h-3 text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs">
              <span className="text-white font-mono">0.00</span>
              <span className="text-zinc-500">USDC</span>
              <svg
                className="w-3 h-3 text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <button className="p-1 text-zinc-500 hover:text-white border border-white/5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-8 mb-6 text-xs border-b border-white/5 pb-4">
          <div className="flex items-center gap-1">
            <span className="text-white">Buy</span>
            <svg
              className="w-3 h-3 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-zinc-500">All payment methods</span>
            <svg
              className="w-3 h-3 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-zinc-500">Price</span>
            <svg
              className="w-3 h-3 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* High Density Table */}
      <div className="px-8 flex-1">
        <table className="w-full text-left text-[11px]">
          <thead>
            <tr className="text-zinc-600 uppercase border-b border-emerald-500/0">
              <th className="pb-4 font-medium w-64">Type</th>
              <th className="pb-4 font-medium">Price</th>
              <th className="pb-4 font-medium">Available/Order Limit</th>
              <th className="pb-4 font-medium">Bank</th>
              <th className="pb-4 font-medium">Rating</th>
              <th className="pb-4 font-medium text-right pr-4">Trade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {traders.map((trader, i) => (
              <tr
                key={trader.name}
                className="group hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-500">
                      {trader.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-bold">{trader.name}</p>
                      <p className="text-[10px] text-zinc-500 mt-0.5">
                        {trader.rate}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-white font-mono font-bold">
                    {trader.price}
                  </p>
                </td>
                <td>
                  <p className="text-zinc-300 font-medium">
                    {trader.available}
                  </p>
                  <p className="text-zinc-600 mt-0.5">320.00 - $1,121.00</p>
                </td>
                <td>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-3 bg-orange-500" />
                    <span className="text-zinc-300 font-medium">
                      {trader.bank}
                    </span>
                  </div>
                  {i % 2 === 0 && (
                    <p className="text-[10px] text-zinc-600 mt-1 uppercase">
                      KHQR
                    </p>
                  )}
                </td>
                <td>
                  <p className="text-zinc-400">{trader.rating}</p>
                  <p className="text-[10px] text-zinc-600 mt-0.5">
                    99.20% completion
                  </p>
                </td>
                <td className="text-right pr-4">
                  <button className="px-4 py-1.5 bg-white text-black text-[10px] font-bold hover:bg-primary hover:text-white transition-all shadow-[2px_2px_0_rgba(255,85,0,0.8)] border border-black">
                    Buy USDT
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
