import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/seo";
import { Sparkles, Palette, Award, ArrowUpRight } from "lucide-react";
import printing from "@/assets/printing.jpg";
import design from "@/assets/design.jpg";
import outdoor from "@/assets/outdoor.jpg";

const services = [
  {
    icon: Sparkles, n: "01", title: "Promotional Merchandise Branding", img: printing,
    desc: "Custom-branded merchandise designed to market your brand effectively and professionally — printed, embroidered or engraved with precision.",
    items: [
      { title: "Screen printing", desc: "Durable, vibrant prints ideal for large apparel orders." },
      { title: "Embroidery", desc: "Premium needlework for a professional, long-lasting finish." },
      { title: "Heat transfer", desc: "Perfect for complex, multi-color designs on any fabric." },
      { title: "Engraving", desc: "Precise, permanent marking for metal, wood, and glass." },
    ],
  },
  {
    icon: Palette, n: "02", title: "Graphic Design", img: design,
    desc: "Creative and modern designs for logos, marketing materials, company profiles, posters, banners and digital branding.",
    items: [
      { title: "Logo design", desc: "Unique brand identities that stand out." },
      { title: "Company profiles", desc: "Professional layouts for your business story." },
      { title: "Posters & banners", desc: "Attention-grabbing marketing materials." },
      { title: "Digital branding", desc: "Cohesive visuals across all digital platforms." },
    ],
  },
  {
    icon: Award, n: "03", title: "Outdoor Branding", img: outdoor,
    desc: "Professional outdoor advertising and branding solutions that increase brand visibility and attract attention.",
    items: [
      { title: "Billboards", desc: "High-impact advertising for major visibility." },
      { title: "Signage", desc: "Custom shop and office signs that direct and brand." },
      { title: "Vehicle branding", desc: "Turn your fleet into moving billboards." },
      { title: "Banners & flags", desc: "Durable solutions for events and promotions." },
    ],
  },
];

export default function ServicesPage() {
  useSeo({
    title: "Services — Joysmart Branding Services",
    description: "Promotional merchandise branding, graphic design and outdoor branding services from Joysmart.",
    canonical: "/services",
    meta: [
      { property: "og:title", content: "Services — Joysmart Branding Services" },
      { property: "og:description", content: "Promotional merchandise, graphic design and outdoor branding." },
      { property: "og:url", content: "/services" },
    ],
  });
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">Services</div>
        <h1 className="mt-3 max-w-4xl text-display text-5xl md:text-7xl">
          Everything your brand needs to <span className="text-primary">show up.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-6 pb-24">
        {services.map((s, i) => (
          <article key={s.n} className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className={`md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}>
              <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="aspect-[5/4] w-full rounded-3xl object-cover shadow-brand" />
            </div>
            <div className="md:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-display text-primary">
                <s.icon className="h-6 w-6" />
                <span>{s.n}</span>
              </div>
              <h2 className="mt-4 text-display text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{s.desc}</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {s.items.map((it) => (
                  <div key={it.title} className="flex flex-col gap-1">
                    <h3 className="font-bold text-foreground">{it.title}</h3>
                    <p className="text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] bg-ink p-10 text-cream md:p-16">
          <h2 className="max-w-2xl text-display text-4xl md:text-6xl">Got a project? Let's price it.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground">
            Request a quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
