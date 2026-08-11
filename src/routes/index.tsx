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
import destUk from "@/assets/dest-uk.jpg";
import destUsa from "@/assets/dest-usa.jpg";
import destAustralia from "@/assets/dest-australia.jpg";
import destCanada from "@/assets/dest-canada.jpg";
import destEurope from "@/assets/dest-europe.jpg";
import destMalaysia from "@/assets/dest-malaysia.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";
import destUae from "@/assets/dest-uae.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CountUp } from "@/components/site/CountUp";
import { ApplyDialog } from "@/components/site/ApplyDialog";
import { SuccessStories } from "@/components/site/SuccessStories";


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
  { name: "United Kingdom", flag: "🇬🇧", note: "1-year master's, post-study work", img: destUk },
  { name: "United States", flag: "🇺🇸", note: "Top-ranked research universities", img: destUsa },
  { name: "Australia", flag: "🇦🇺", note: "Generous post-study work rights", img: destAustralia },
  { name: "Canada", flag: "🇨🇦", note: "Affordable, PR-friendly pathways", img: destCanada },
  { name: "Europe", flag: "🇪🇺", note: "Low tuition, English-taught degrees", img: destEurope },
  { name: "Malaysia", flag: "🇲🇾", note: "Budget-friendly quality education", img: destMalaysia },
  { name: "Turkey", flag: "🇹🇷", note: "Scholarships & rich culture", img: destTurkey },
  { name: "UAE", flag: "🇦🇪", note: "Global campuses close to home", img: destUae },
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

const officeAddress =
  "Office No. D-4, 4th Floor, 24th Commercial Street, DHA Phase 5 Tauheed Commercial Area, Defence V, Clifton, Karachi, 75500, Pakistan";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=SIA+Global+Consultants&query_place_id=ChIJU9xNTgA9sz4Rk1BEzMO1U7k";
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.620240216349!2d67.03665677436291!3d24.808454147338516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d004e4ddc53%3A0xb953b5c3cc445093!2sSIA%20Global%20Consultants!5e0!3m2!1sen!2s!4v1786349303159!5m2!1sen!2s";

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
              <h1 className="mt-5 font-recoleta text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Making international education{" "}
                <span className="text-gradient">accessible to everyone.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
                From choosing the right university to landing your visa, SIA Global Consults guides
                you through every step with transparent, expert advice.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ApplyDialog>
                  <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5">
                    Apply now <ArrowRight className="size-4" />
                  </button>
                </ApplyDialog>

                <a
                  href="#destinations"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Explore destinations
                </a>
              </div>

              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
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
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-lift focus:outline-none focus-visible:border-primary"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={d.img}
                      alt={`Study in ${d.name}`}
                      loading="lazy"
                      width={768}
                      height={512}
                      className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-40" />
                    {/* Sky blue tint that washes over the image on hover/tap */}
                    <div className="absolute inset-0 bg-aqua/60 mix-blend-multiply opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2 py-1 text-sm transition-transform duration-300 group-hover:scale-110">
                      {d.flag}
                    </span>
                    <h3 className="absolute bottom-3 left-3 right-3 font-display text-base font-bold text-background transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:tracking-wide group-hover:drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                      {d.name}
                      <span className="mt-1 block h-0.5 w-0 rounded-full bg-background/90 transition-all duration-500 ease-out group-hover:w-12" />
                    </h3>
                  </div>

                  <div className="p-5">
                    <p className="text-xs text-muted-foreground">{d.note}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Learn more{" "}
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
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
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary hover:shadow-lift"
              >
                <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-within:opacity-100" />
                <div className="relative">
                  <span className="grid size-11 place-items-center rounded-xl bg-hero-gradient text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:bg-none group-hover:bg-background/20">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold transition-colors duration-500 group-hover:text-primary-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/90">
                    {s.body}
                  </p>
                </div>
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

        <SuccessStories />

        {/* Contact / CTA */}
        <section id="contact" className="py-20">
          <div className="w-full bg-hero-gradient px-6 py-14 text-primary-foreground shadow-lift">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                Your study abroad journey starts with SIA Global Consults
              </h2>
              <p className="mx-auto mt-4 max-w-2xl opacity-90">
                Book a free consultation and get a realistic plan for your admission, scholarship
                and visa — no obligations.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <div className="mt-10 overflow-hidden rounded-3xl bg-hero-gradient p-8 text-primary-foreground shadow-lift sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>

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
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0" />
                    <span>
                      Office No. D-4, 4th Floor, 24th Commercial Street, DHA Phase 5, Tauheed
                      Commercial Area, Defence V, Clifton, Karachi 75500, Pakistan
                      <br />
                      Mon–Sat 10:30–18:30
                    </span>
                  </li>
                </ul>

                <div className="mt-8 overflow-hidden rounded-2xl border border-primary-foreground/20 shadow-lift">
                  <iframe
                    title="SIA Global Consultants office location map"
                    src={mapsEmbedUrl}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="h-64 w-full border-0"
                  />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between bg-background px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    Get directions on Google Maps
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

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
                    Submit enquiry
                  </button>

                </div>
              </form>
            </div>
            </div>
          </div>

        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
