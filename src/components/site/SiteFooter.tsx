import { Instagram, Linkedin, Facebook, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-hero-gradient text-sm font-bold text-primary-foreground">
              S
            </span>
            <span className="font-display text-base font-bold">SIA Global Consults</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Making international education accessible to everyone. Discover your path to success at
            top universities worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#contact"
                aria-label="Social link"
                className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Destinations</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["United Kingdom", "United States", "Australia", "Canada", "Europe", "Malaysia", "Turkey"].map(
              (d) => (
                <li key={d}>
                  <a href="#destinations" className="hover:text-primary">
                    Study in {d}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="tel:+923032252569" className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="size-4" /> +92 303 225 2569
              </a>
            </li>
            <li>
              <a
                href="mailto:info@globalsiaconsults.com"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Mail className="size-4" /> info@globalsiaconsults.com
              </a>
            </li>
            <li>Mon – Sat · 10:30 AM to 6:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SIA Global Consults. All rights reserved.
      </div>
    </footer>
  );
}
