import { Hero } from "@/components/Landing_Page/Hero";
import { HowItWorks } from "@/components/Landing_Page/HowItWorks";
import { Benefits } from "@/components/Landing_Page/Benefits";
import { TradersShowcase } from "@/components/Landing_Page/TradersShowcase";
import { LearningHub } from "@/components/Landing_Page/LearningHub";
import { Trust } from "@/components/Landing_Page/Trust";
import { Testimonials } from "@/components/Landing_Page/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Hero />
      <HowItWorks />
      <Benefits />
      <TradersShowcase />
      <LearningHub />
      <Trust />
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent -z-10 pointer-events-none"></div>
        {/* Bottom Glow */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-lg text-zinc-400 mb-10">
            Join thousands of users who are earning passively with Nord.
          </p>
          <a
            href="#"
            className="bg-gradient-to-r from-[#FF5500] to-[#FF8000] text-white hover:shadow-[0_0_20px_rgba(255,85,0,0.4)] hover:scale-105 active:scale-95 border border-white/10 p-4"
          >
            Create Free Account
          </a>
        </div>
      </section>
    </main>
  );
}
