import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CalendarDays, Wallet, Home, Briefcase, CheckCircle2, GraduationCap } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ApplyDialog } from "@/components/site/ApplyDialog";
import { destinations, getDestination } from "@/lib/destinations";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = getDestination(params.slug);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Destination not found | SIA Global Consultants" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const d = loaderData.destination;
    const title = `Study in ${d.name} | SIA Global Consultants`;
    const description = `${d.tagline}. Universities, intakes, tuition, visa requirements and scholarship guidance for Pakistani students planning to study in ${d.name}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: DestinationNotFound,
  component: DestinationPage,
});

function DestinationNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-28 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Destination not found</h1>
        <p className="mt-4 text-muted-foreground">
          The destination you are looking for isn't available yet.
        </p>
        <Link
          to="/"
          hash="destinations"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Browse all destinations <ArrowRight className="size-4" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function DestinationPage() {
  const { destination: d } = Route.useLoaderData();
  const others = destinations.filter((x) => x.slug !== d.slug).slice(0, 4);

  const facts = [
    { icon: CalendarDays, label: "Intakes", value: d.intakes },
    { icon: Wallet, label: "Tuition", value: d.tuition },
    { icon: Home, label: "Living cost", value: d.living },
    { icon: Briefcase, label: "Work rights", value: d.work },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-soft-gradient">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">
            <div>
              <Link
                to="/"
                hash="destinations"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary"
              >
                <ArrowLeft className="size-4" /> All destinations
              </Link>
              <h1 className="mt-5 font-recoleta text-4xl font-bold leading-[1.05] sm:text-5xl">
                <span className="mr-2">{d.flag}</span>
                Study in <span className="text-gradient">{d.name}</span>
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">{d.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ApplyDialog>
                  <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5">
                    Get a free consultation <ArrowRight className="size-4" />
                  </button>
                </ApplyDialog>
                <Link
                  to="/"
                  hash="contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Talk to a counsellor
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-hero-gradient opacity-20" />
              <img
                src={d.img}
                alt={`Study in ${d.name}`}
                width={1024}
                height={768}
                className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
              />
            </div>
          </div>
        </section>

        {/* Key facts */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="grid size-10 place-items-center rounded-xl bg-hero-gradient text-primary-foreground">
                  <f.icon className="size-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {f.label}
                </p>
                <p className="mt-1 text-sm font-semibold">{f.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why + universities */}
        <section className="bg-secondary/50 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Why {d.name}
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{d.tagline}</h2>
              <ul className="mt-6 grid gap-3">
                {d.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold">
                <GraduationCap className="size-5 text-primary" /> Popular universities
              </h3>
              <ul className="mt-5 grid gap-3">
                {d.universities.map((u) => (
                  <li
                    key={u}
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    {u}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Plus 100+ partner institutions — we shortlist based on your profile and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Admission & visa
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What you'll need</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {d.requirements.map((r, i) => (
              <div key={r} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="font-display text-2xl font-extrabold text-aqua">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm">{r}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other destinations */}
        <section className="bg-secondary/50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold sm:text-3xl">Explore other destinations</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/destinations/$slug"
                  params={{ slug: o.slug }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={o.img}
                      alt={`Study in ${o.name}`}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                    <h3 className="absolute bottom-3 left-3 font-display text-base font-bold text-background">
                      {o.flag} {o.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-hero-gradient px-6 py-14 text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to start your {d.name} application?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl opacity-90">
              Book a free profile assessment and get a realistic plan for admission, scholarships
              and your visa.
            </p>
            <div className="mt-8 flex justify-center">
              <ApplyDialog>
                <button className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5">
                  Get a free consultation <ArrowRight className="size-4" />
                </button>
              </ApplyDialog>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
