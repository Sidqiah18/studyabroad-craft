import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowRight, GraduationCap, Wallet, Star } from "lucide-react";
import aboutImg from "@/assets/about-students.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ApplyDialog } from "@/components/site/ApplyDialog";
import { CountUp } from "@/components/site/CountUp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | SIA Global Consults" },
      {
        name: "description",
        content:
          "SIA Global Consultants is one of Pakistan's most trusted study abroad partners — transparent, expert guidance for admissions, scholarships and visas.",
      },
      { property: "og:title", content: "About Us | SIA Global Consults" },
      {
        property: "og:description",
        content:
          "Transparent, expert guidance for students planning their education overseas. No false promises, just a holistic plan built around your profile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Transparent counselling",
    body: "Clear, honest advice with no false promises — only realistic plans built around your profile and budget.",
  },
  {
    icon: GraduationCap,
    title: "British Council-trained & certified",
    body: "Our counsellors are certified and deeply familiar with international education systems, visa processes and scholarships.",
  },
  {
    icon: Wallet,
    title: "End-to-end process assistance",
    body: "From university shortlisting to visa filing and pre-departure briefing, we handle every step for you.",
  },
  {
    icon: Star,
    title: "Scholarship opportunities",
    body: "We actively shortlist and pursue scholarships so cost never blocks your plan to study abroad.",
  },
];

// timeline milestones removed per request

function AboutPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-soft-gradient">
          <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-aqua/30 blur-3xl" />
          <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              About us
            </span>
            <h1 className="mt-5 font-recoleta text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              One of Pakistan's most trusted{" "}
              <span className="text-gradient">study abroad partners.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              At SIA Global Consultants we specialise in clear, transparent and expert guidance for
              students planning their education overseas — no false promises, just a holistic plan
              built around your profile and budget.
            </p>
          </div>
        </section>

        {/* Intro + image */}
        <section className="mx-auto max-w-6xl px-6 py-20">
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
                Who we are
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Expert guidance, grounded in integrity
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our counsellors know international education systems, visa processes and scholarship
                opportunities inside out. Every case is handled with integrity and professionalism —
                a realistic plan built around your profile and budget, not one-size-fits-all advice.
              </p>
              <p className="mt-4 text-muted-foreground">
                From choosing the right university to landing your visa, SIA Global Consultants
                guides you through every step with transparent, expert advice.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: 10, prefix: "$", suffix: "M+", l: "Scholarships won" },
                  { v: 99, prefix: "", suffix: "%", l: "Visa success rate" },
                  { v: 100, prefix: "", suffix: "+", l: "University partners" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <dt className="font-display text-xl font-bold text-primary">
                      <CountUp value={s.v} prefix={s.prefix} suffix={s.suffix} />
                    </dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
                  </div>
                ))}
              </dl>

              <ApplyDialog>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5">
                  Get a free consultation <ArrowRight className="size-4" />
                </button>
              </ApplyDialog>
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="services" className="bg-secondary/50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                What sets us apart
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Why students trust SIA Global Consultants
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary hover:shadow-lift"
                >
                  <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-within:opacity-100" />
                  <div className="relative">
                    <span className="grid size-11 place-items-center rounded-xl bg-hero-gradient text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:bg-none group-hover:bg-background/20">
                      <v.icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold transition-colors duration-500 group-hover:text-primary-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/90">
                      {v.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our journey timeline removed */}

        {/* CTA */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="overflow-hidden rounded-3xl bg-hero-gradient p-8 text-center text-primary-foreground shadow-lift sm:p-12">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to start your study abroad journey?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl opacity-90">
                Book a free consultation and get a realistic plan for your admission, scholarship and
                visa — no obligations.
              </p>
              <ApplyDialog>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary shadow-lift transition-transform hover:-translate-y-0.5">
                  Get a free consultation <ArrowRight className="size-4" />
                </button>
              </ApplyDialog>
              <p className="mt-4 text-sm opacity-80">
                Prefer to explore?{" "}
                <Link to="/" className="underline">
                  Back to home
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
