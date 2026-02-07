import { Card } from "../ui/Card";

const steps = [
  {
    number: "01",
    title: "Create an Account",
    description:
      "Sign up in seconds. Verify your identity to ensure a secure trading environment.",
  },
  {
    number: "02",
    title: "Choose a Pro",
    description:
      "Browse top-performing traders. Check their win rate, risk level, and return on investment.",
  },
  {
    number: "03",
    title: "Click 'Copy'",
    description:
      "Allocate funds and start copying. Their trades are automatically replicated in your account.",
  },
  {
    number: "04",
    title: "Earn & Learn",
    description:
      "Watch your portfolio grow. Stop copying anytime or learn from their strategies.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            How Nord Works
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Start earning like a pro in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative group bg-zinc-900/50 backdrop-blur-sm border-white/5"
              hover
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-lg" />
              <div className="relative z-10 pt-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary font-bold text-xl group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
