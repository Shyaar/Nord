export const Trust = () => {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-3  bg-white/5 mb-8">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-12">
          Built on Trust & Transparency
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-2">Bank-Grade Security</h3>
            <p className="text-zinc-500 max-w-xs">
              Your funds are protected with state-of-the-art encryption and cold storage protocols.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-2">Verified Traders</h3>
            <p className="text-zinc-500 max-w-xs">
              Every trader on our platform passes a strict vetting process before they can be copied.
            </p>
          </div>

           <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-2">Transparent Data</h3>
            <p className="text-zinc-500 max-w-xs">
              No hidden fees or manipulated stats. Real-time performance data you can verify instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
