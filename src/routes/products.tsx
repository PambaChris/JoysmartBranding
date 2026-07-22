import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/seo";
import hero from "@/assets/hero-merch.jpg";
import { localProducts } from "@/data/products";

export default function ProductsPage() {
  useSeo({
    title: "Products — Joysmart Branding Services",
    description: "Premium polo t-shirts, premium caps, hoodies, reflectors, mugs, glasses, leso and more — all brand-ready.",
    canonical: "/products",
    meta: [
      { property: "og:title", content: "Products — Joysmart Branding Services" },
      { property: "og:description", content: "Premium promotional merchandise, brand-ready." },
      { property: "og:url", content: "/products" },
    ],
  });
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-12 md:grid-cols-12 md:pt-24">
        <div className="md:col-span-7">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Products</div>
          <h1 className="mt-3 text-display text-5xl md:text-7xl">
            Brand-ready merchandise, <span className="text-primary">built to last.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            We deal in a wide range of premium promotional merchandise. Every item can be
            printed, embroidered or engraved with your brand identity.
          </p>
        </div>
        <div className="md:col-span-5">
          <img src={hero} alt="Range of branded merchandise" loading="lazy" width={1600} height={1200} className="aspect-video w-full rounded-3xl object-cover shadow-brand md:aspect-square" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {localProducts.map((p, i) => (
            <li key={p.node.id}>
              <Link
                to={`/product/${p.node.handle}`}
                className="group flex h-full items-center justify-between gap-6 bg-card p-7 transition-colors hover:bg-ink hover:text-cream"
              >
                <div>
                  <div className="text-xs text-muted-foreground group-hover:text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-display text-2xl">{p.node.title}</div>
                </div>
                <span className="text-2xl text-primary opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] gradient-warm p-10 md:p-16">
          <h2 className="max-w-2xl text-display text-4xl text-primary-foreground md:text-6xl">
            Don't see it here? Ask us — we probably brand it.
          </h2>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream">
            Ask about an item →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
