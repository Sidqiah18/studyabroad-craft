import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  Wallet,
  FileCheck2,
  Plane,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero-student.jpg";
import aboutImg from "@/assets/about-students.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIA Global Consults | Study Abroad Consultants in Pakistan" },
      {
        name: "description",
        content:
          "Expert study abroad guidance for admissions, scholarships and visas. 99% visa success, 100+ university partners across the UK, USA, Australia, Canada and Europe.",
      },
      { property: "og:title", content: "SIA Global Consults | Study Abroad Consultants" },
      {
        property: "og:description",
        content:
          "Personalised university selection, scholarship support and visa preparation for students going abroad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const destinations = [
  { name: "United Kingdom", flag: "🇬🇧", note: "1-year master's, post-study work" },
  { name: "United States", flag: "🇺🇸", note: "Top-ranked research universities" },
  { name: "Australia", flag: "🇦🇺", note: "Generous post-study work rights" },
  { name: "Canada", flag: "🇨🇦", note: "Affordable, PR-friendly pathways" },
  { name: "Europe", flag: "🇪🇺", note: "Low tuition, English-taught degrees" },
  { name: "Malaysia", flag: "🇲🇾", note: "Budget-friendly quality education" },
  { name: "Turkey", flag: "🇹🇷", note: "Scholarships & rich culture" },
  { name: "UAE", flag: "🇦🇪", note: "Global campuses close to home" },
];

const services = [
  {
    icon: GraduationCap,
    title: "Tailored Pathway",
    body: "Personalised university and course selection matched to your profile, budget and career goals.",
  },
  {
    icon: Wallet,
    title: "Smart Funding",
    body: "Scholarship shortlisting and financial documentation guidance so cost never blocks your plan.",
  },
  {
    icon: FileCheck2,
    title: "Smart Application",
    body: "SOP and document preparation, application submission and offer letter follow-up.",
  },
  {
    icon: ShieldCheck,
    title: "Confident & Prepared",
    body: "Complete visa file building plus mock interview coaching with experienced counsellors.",
  },
  {
    icon: Plane,
    title: "Smooth Transition",
    body: "Pre-departure briefing, accommodation help and settling-in advice for your first weeks.",
  },
  {
    icon: Star,
    title: "Lifetime Support",
    body: "Guidance that continues after arrival — extensions, part-time work rules and next steps.",
  },
];

const steps = [
  { n: "01", t: "Free profile assessment", d: "We review academics, budget and goals to map realistic options." },
  { n: "02", t: "University shortlist", d: "A curated list of programmes with intakes, fees and scholarships." },
  { n: "03", t: "Application & offers", d: "We prepare, submit and track every application until offers land." },
  { n: "04", t: "Visa & departure", d: "Financials, interview prep and pre-departure support all the way." },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-soft-gradient">
          <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-aqua/30 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Study abroad consultants
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                Making international education{" "}
                <span className="text-gradient">accessible to everyone.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
                From choosing the right university to landing your visa, SIA Global Consults guides
                you through every step with transparent, expert advice.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  Get free consultation <ArrowRight className="size-4" />
                </a>
                <a
                  href="#destinations"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Explore destinations
                </a>
              </div>

              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
                {[
                  ["$10M+", "Scholarships won"],
                  ["99%", "Visa success rate"],
                  ["100+", "University partners"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <dt className="font-display text-xl font-bold text-primary">{v}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-hero-gradient opacity-20" />
              <img
                src={heroImg}
                alt="International student on a university campus"
                width={1408}
                height={1600}
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
              />
              <div className="absolute -bottom-5 left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-lift sm:left-8">
                <p className="text-xs text-muted-foreground">Next intake counselling</p>
                <p className="font-display text-sm font-bold">Fall & Spring 2027 open</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src={aboutImg}
              alt="Students walking through a university building"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-3xl object-cover shadow-soft"
            />
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                About us
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                One of Pakistan's most trusted study abroad partners
              </h2>
              <p className="mt-4 text-muted-foreground">
                At SIA Global Consults we specialise in clear, transparent and expert guidance for
                students planning their education overseas. Our counsellors know international
                education systems, visa processes and scholarship opportunities inside out.
              </p>
              <p className="mt-4 text-muted-foreground">
                Every case is handled with integrity and professionalism — no false promises, just a
                realistic plan built around your profile and budget.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Transparent, honest counselling",
                  "Certified expert counsellors",
                  "End-to-end visa assistance",
                  "Scholarship-first approach",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section id="destinations" className="bg-secondary/50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Favourite destinations
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Destinations for international students
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ready to launch the next phase of your academic and professional growth? Pick a
                destination and let us take the wheel.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {destinations.map((d) => (
                <a
                  key={d.name}
                  href="#contact"
                  className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lift"
                >
                  <span className="text-2xl">{d.flag}</span>
                  <h3 className="mt-3 font-display text-base font-bold">{d.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{d.note}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Learn more{" "}
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              What we do
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              How SIA Global Consults helps you
            </h2>
            <p className="mt-4 text-muted-foreground">
              We make your entire study abroad journey easy — from shortlisting universities to
              getting your visa approved.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-hero-gradient text-primary-foreground">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-secondary/50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold sm:text-4xl">Your journey in four steps</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-display text-3xl font-extrabold text-aqua">{s.n}</span>
                  <h3 className="mt-3 font-display text-base font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="overflow-hidden rounded-3xl bg-hero-gradient p-8 text-primary-foreground shadow-lift sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Your study abroad journey starts with SIA
                </h2>
                <p className="mt-4 max-w-md opacity-90">
                  Book a free consultation and get a realistic plan for your admission, scholarship
                  and visa — no obligations.
                </p>
                <ul className="mt-8 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Phone className="size-4" />
                    <a href="tel:+923032252569" className="hover:underline">
                      +92 303 225 2569
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="size-4" />
                    <a href="mailto:info@globalsiaconsults.com" className="hover:underline">
                      info@globalsiaconsults.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="size-4" /> Lahore, Pakistan · Mon–Sat 10:30–18:30
                  </li>
                </ul>
              </div>

              <form
                className="rounded-2xl bg-background p-6 text-foreground"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-4">
                  <input
                    required
                    placeholder="Full name"
                    className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                  <input
                    placeholder="Phone number"
                    className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                  <select
                    defaultValue=""
                    className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    <option value="" disabled>
                      Preferred destination
                    </option>
                    {destinations.map((d) => (
                      <option key={d.name}>{d.name}</option>
                    ))}
                  </select>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your study plans"
                    className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Request free consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
