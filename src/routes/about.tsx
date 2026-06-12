import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/seo";
import printing from "@/assets/printing.jpg";

export default function AboutPage() {
  useSeo({
    title: "About — Joysmart Branding Services",
    description: "Joysmart Branding Services is a trusted branding and promotional merchandise company helping businesses build strong, memorable brands.",
    canonical: "/about",
    meta: [
      { property: "og:title", content: "About — Joysmart Branding Services" },
      { property: "og:description", content: "Trusted branding and promotional merchandise partner." },
      { property: "og:url", content: "/about" },
    ],
  });

  const team = [
    { 
      name: "Namalwa Chesoli", 
      role: "CEO & Founder", 
      image: "/Namalwa CEO.jpg",
      bio: "Visionary leader with over 10 years of experience in brand strategy and corporate identity."
    },
    { 
      name: "David Mwangi", 
      role: "Creative Director", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      bio: "Award-winning designer focused on creating visual stories that resonate with audiences."
    },
    { 
      name: "Sarah Njeri", 
      role: "Operations Manager", 
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
      bio: "Efficiency expert ensuring every project is delivered on time and to the highest standards."
    },
    { 
      name: "Kevin Otieno", 
      role: "Lead Graphic Designer", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
      bio: "Technical specialist with a passion for precision and innovative branding solutions."
    },
  ];

  const clientLogos = [
    { name: "Darka", src: "/darka logo.png" },
    { name: "Sukar", src: "/Sukar Logo.png" },
    { name: "The Big Fish", src: "/Thebigfish logo.png" },
    { name: "Tourlast", src: "/tourlast logo.png" },
    { name: "KNQA", src: "/Knqa logo.png" },
    { name: "Zion", src: "/zion logo.png" },
  ];

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">About us</div>
        <h1 className="mt-3 max-w-4xl text-display text-5xl md:text-7xl">
          A trusted partner for brands that want to be <span className="text-primary">remembered.</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-3xl bg-muted p-12">
          <img src="/joysmart-logo.svg" alt="Joysmart Logo" className="w-full max-w-[300px] object-contain" />
        </div>
        <div className="flex flex-col justify-center gap-6 text-lg text-muted-foreground">
          <p>
            JOYSMART Branding Services is a trusted branding and promotional merchandise
            company dedicated to helping businesses, organizations, institutions and
            individuals build strong and memorable brands.
          </p>
          <p>
            We specialize in high-quality promotional products, creative branding
            solutions and professional graphic design services tailored to meet diverse
            marketing and corporate identity needs.
          </p>
          <p className="text-foreground">
            With a commitment to quality, creativity and customer satisfaction, we
            transform ideas into impactful branded products that enhance visibility and
            leave lasting impressions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-border bg-card/30 rounded-[3rem] my-12">
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">The people behind the magic</div>
          <h2 className="mt-3 text-display text-5xl md:text-6xl">Meet our team</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Our diverse team of experts brings together creativity, strategy, and technical 
            excellence to deliver branding solutions that make a difference.
          </p>
        </div>
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 items-center">
          {team.map((member) => (
            <div key={member.name} className="group flex flex-col items-center text-center">
              {member.name === "Namalwa Chesoli" ? (
                <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-2xl bg-muted shadow-sm transition-all duration-300 group-hover:shadow-brand group-hover:-translate-y-1">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    loading="lazy" 
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ) : null}
              <div className="px-1">
                <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mt-1">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-y border-border bg-ink py-10 text-cream overflow-hidden">
        <div className="flex w-max gap-16 marquee whitespace-nowrap items-center">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="flex h-12 w-40 items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Our mission</div>
              <h2 className="mt-3 text-display text-4xl">Empower brands to stand out and grow.</h2>
            </div>
            <p className="md:col-span-2 text-xl text-cream/80">
              To provide innovative, high-quality and affordable branding solutions
              that empower businesses and organizations to stand out and grow — through
              merchandise, design and outdoor presence that's unmistakably theirs.
            </p>
          </div>
          <Link to="/contact" className="mt-12 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground">
            Work with us →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
