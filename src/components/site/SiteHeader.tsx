import { useState } from "react";
import { Menu, X, Mail, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ApplyDialog } from "./ApplyDialog";

type NavLink = { label: string; to?: string; href?: string };

const links: NavLink[] = [
  { label: "About", to: "/about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Success stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <a href="mailto:info@globalsiaconsults.com" className="inline-flex items-center gap-2 opacity-90 hover:opacity-100">
            <Mail className="size-3.5" /> info@globalsiaconsults.com
          </a>
          <span className="inline-flex items-center gap-2 opacity-90">
            <Clock className="size-3.5" /> 10:30 AM – 6:30 PM · Sunday off
          </span>
        </div>
      </div>

      <div className="border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-hero-gradient text-sm font-bold text-primary-foreground">
              S
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold">SIA Global Consults</span>
              <span className="block text-[11px] text-muted-foreground">Study abroad experts</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ApplyDialog>
              <button className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-block">
                Get a free consultation
              </button>
            </ApplyDialog>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-xl border border-border lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-medium last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <ApplyDialog>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft"
                >
                  Get a free consultation
                </button>
              </ApplyDialog>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
