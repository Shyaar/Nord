import { Card } from "../ui/Card";

const testimonials = [
  {
    content:
      "I didn't know anything about trading, but Nord made it so easy. I just picked a trader and started seeing returns in a week.",
    author: "Jessica T.",
    role: "Freelance Designer",
  },
  {
    content:
      "Finally, a platform that doesn't feel like a casino. The transparency and risk controls give me total peace of mind.",
    author: "Michael B.",
    role: "Software Engineer",
  },
  {
    content:
      "I've tried other copy trading apps, but Nord is by far the most user-friendly. The learning hub is a huge bonus too.",
    author: "Amir S.",
    role: "Studio Artist",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12 text-center">
          Loved by beginners and pros
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <Card key={index} className="bg-[#111] border-white/5" hover>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 mb-6 italic text-lg leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-sm text-zinc-500">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
