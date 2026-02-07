import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export const LearningHub = () => {
  return (
    <section id="learning" className="py-24 bg-surface/30 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span>🎓 Nord Academy</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Learn at your own pace
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              We believe financial freedom starts with education. Access our
              library of courses, market analysis, and webinars—completely free
              for Nord users.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <span className="text-zinc-200">Beginner-friendly guides</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <span className="text-zinc-200">
                  Market analysis & insights
                </span>
              </div>
            </div>
            <div className="mt-10">
              <Button
                variant="outline"
                className="border-white/10 hover:bg-white/5"
              >
                Visit Learning Hub
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card
              className="bg-[#111] p-6 h-full flex flex-col justify-between border-white/5"
              hover
            >
              <div>
                <div className="text-xs text-primary mb-2 font-mono uppercase tracking-wider">
                  Course
                </div>
                <h3 className="font-bold text-white mb-2 text-xl">
                  Trading 101
                </h3>
                <p className="text-zinc-500 text-sm">
                  Master the basics of copy trading and risk management.
                </p>
              </div>
              <div className="mt-4 text-xs text-zinc-400">
                30 mins • Beginner
              </div>
            </Card>
            <Card
              className="bg-[#111] p-6 h-full flex flex-col justify-between translate-y-8 border-white/5"
              hover
            >
              <div>
                <div className="text-xs text-primary mb-2 font-mono uppercase tracking-wider">
                  Article
                </div>
                <h3 className="font-bold text-white mb-2 text-xl">
                  Crypto vs Forex
                </h3>
                <p className="text-zinc-500 text-sm">
                  Understanding which market fits your goals.
                </p>
              </div>
              <div className="mt-4 text-xs text-zinc-400">5 mins read</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
