import { Instagram, Linkedin, Facebook, Phone, Mail } from "lucide-react";
// Use the uploaded public logo file.
const logoUrl = "/logo.svg.jpeg";

const destinations = [
  { label: "Study in United Kingdom", href: "/destinations/united-kingdom" },
  { label: "Study in United States", href: "/destinations/united-states" },
  { label: "Study in Australia", href: "/destinations/australia" },
  { label: "Study in Canada", href: "/destinations/canada" },
  { label: "Study in Europe", href: "/destinations/europe" },
  { label: "Study in Malaysia", href: "/destinations/malaysia" },
  { label: "Study in Turkey", href: "/destinations/turkey" },
];

export function SiteFooter() {
  const socialLinks = [
    "https://www.instagram.com/siaglobalconsults?igsh=MWVlNnN5c2U4enkzZA%3D%3D&utm_source=qr",
    "https://www.linkedin.com/company/siaglobalconsults/?viewAsMember=true",
    "https://www.facebook.com/profile.php?id=61580416598358",
  ];

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img
              src={logoUrl}
              alt="SIA Global Consults logo"
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Making international education accessible to everyone. Discover your path to success at
            top universities worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a
                key={i}
                href={socialLinks[i]}
                target="_blank"
                rel="noopener noreferrer"
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
            {destinations.map((d) => (
              <li key={d.label}>
                <a href={d.href} className="hover:text-primary">
                  {d.label}
                </a>
              </li>
            ))}
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
