import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, GraduationCap, Quote } from "lucide-react";

type Story = {
  name: string;
  course: string;
  university: string;
  country: string;
  flag: string;
  quote: string;
};

const stories: Story[] = [
  {
    name: "Ayesha Siddiqui",
    course: "MSc Data Science",
    university: "University of Manchester",
    country: "United Kingdom",
    flag: "🇬🇧",
    quote:
      "I had almost given up after one rejection. SIA rebuilt my SOP, shortlisted the right programmes and I ended up with three offers — plus a partial scholarship I did not even know existed.",
  },
  {
    name: "Hamza Tariq",
    course: "MS Computer Science",
    university: "Arizona State University",
    country: "United States",
    flag: "🇺🇸",
    quote:
      "The visa interview was the part that scared me most. Two mock sessions with my counsellor and I walked in calm. Approved in under five minutes.",
  },
  {
    name: "Fatima Noor",
    course: "Master of Public Health",
    university: "University of Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    quote:
      "Everything was transparent — fees, timelines, chances. No false promises. That honesty is why I trusted them with my whole application.",
  },
  {
    name: "Bilal Ahmed",
    course: "MBA",
    university: "University of Toronto",
    country: "Canada",
    flag: "🇨🇦",
    quote:
      "They handled my financial documents and GIC step by step. I moved from first counselling session to landing in Toronto in seven months.",
  },
  {
    name: "Zainab Raza",
    course: "BSc Architecture",
    university: "TU Delft",
    country: "Netherlands",
    flag: "🇳🇱",
    quote:
      "As an undergraduate applicant I needed a lot of hand-holding. My counsellor replied on WhatsApp even on weekends until my portfolio was ready.",
  },
  {
    name: "Usman Shahid",
    course: "MSc Mechanical Engineering",
    university: "Istanbul Technical University",
    country: "Turkey",
    flag: "🇹🇷",
    quote:
      "I wanted quality education on a tight budget. SIA found me a scholarship-backed programme in Turkey that my family could comfortably afford.",
  },
  {
    name: "Angela Daniel",
    course: "Master's Program",
    university: "London Metropolitan University",
    country: "United Kingdom",
    flag: "🇬🇧",
    quote:
      "I would like to express my heartfelt gratitude to SIA Global Consultants for helping me achieve my dream and guiding me toward a brighter future. A few years back, a friend recommended this consultancy to me. When I first visited their office, Mr. Jonathan guided me throughout the entire journey and made the process completely hassle-free. The entire team supported me step by step — from admission to visa processing, all the way to my departure — ensuring everything was done smoothly and without mistakes. Their communication was always clear, and they were incredibly polite and patient in answering my many questions. Today, I am successfully enrolled in a Master's program at London Metropolitan University. It truly feels like a dream come true to begin this new chapter of my life in the UK.",
  },
  {
    name: "Adil Amanat",
    course: "Study Abroad Guidance",
    university: "SIA Global Consultants",
    country: "Pakistan",
    flag: "🇵🇰",
    quote:
      "I'm writing this on behalf of my friend who used SIA Global Consultants for study abroad guidance. Overall, their experience was good. The team helped with the application process, documentation, and provided proper guidance at each step. They were supportive and responsive most of the time, which made things easier. That said, I'd still suggest doing your own research alongside. Overall, it was a positive experience for my friend.",
  },
  {
    name: "Jonathan Matthew",
    course: "University Admission",
    university: "Turkey",
    country: "Turkey",
    flag: "🇹🇷",
    quote:
      "My sister got admitted into Turkey with the help of one of the finest consultants in Pakistan I could have found. We were quite stressed regarding her case, but it went seamless and with almost zero tension. The team is very, very helpful — every day we got updates from the admission department, and the visa compliance team was always joyful and kept the same positive attitude throughout. Really appreciated, thanks guys.",
  },
];

export function SuccessStories() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const set = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const maxIndex = Math.max(0, stories.length - perView);
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);
  const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);

  return (
    <section id="stories" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Success stories
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Students who made it abroad with SIA Global Consultants
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real journeys from Pakistan to campuses around the world — admissions, scholarships and
            visas handled end to end.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous success story"
            className="grid size-11 place-items-center rounded-full border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next success story"
            className="grid size-11 place-items-center rounded-full border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {stories.map((s) => (
            <article
              key={s.name}
              className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
            >
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary hover:shadow-lift">
                <Quote className="size-7 text-aqua" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{s.quote}”
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-base font-bold">{s.name}</p>
                  <p className="mt-1 inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <GraduationCap className="size-3.5 text-primary" />
                    {s.course}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-primary">
                    {s.country}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-aqua"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
