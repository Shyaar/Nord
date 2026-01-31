import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { TradersShowcase } from "@/components/TradersShowcase";
import { LearningHub } from "@/components/LearningHub";
import { Trust } from "@/components/Trust";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
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
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-orange-600 px-10 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,85,0,0.5)] shadow-lg shadow-primary/20"
              >
                Create Free Account
              </a>
          </div>
      </section>
      <Footer />
    </main>
  );
}
