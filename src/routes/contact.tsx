import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/seo";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  useSeo({
    title: "Contact — Joysmart Branding Services",
    description: "Get in touch with Joysmart Branding Services for quotes, samples and project timelines.",
    canonical: "/contact",
    meta: [
      { property: "og:title", content: "Contact — Joysmart Branding Services" },
      { property: "og:description", content: "Get in touch with Joysmart for quotes and samples." },
      { property: "og:url", content: "/contact" },
    ],
  });
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</div>
        <h1 className="mt-3 max-w-4xl text-display text-5xl md:text-7xl">
          Tell us what you need. <span className="text-primary">We'll handle it.</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-12">
        <div className="md:col-span-5 space-y-8">
          {[
            { Icon: Mail, label: "Email", value: "hello@joysmart.co" },
            { Icon: Phone, label: "Phone", value: "+254 700 000 000" },
            { Icon: MapPin, label: "Studio", value: "Nairobi, Kenya" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                <div className="text-lg font-semibold">{value}</div>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Facebook</div>
              <Link to="https://facebook.com/Joysmart-Branding-Services" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary">Joysmart Branding Services</Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tiktok"><path d="M9 12v10h4V12c0-1.7 1.3-3 3-3V5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v4c0 1.7 1.3 3 3 3z"/><path d="M12 12c0-1.7 1.3-3 3-3V5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v4c0 1.7 1.3 3 3 3z"/></svg>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">TikTok</div>
              <Link to="https://tiktok.com/@joysmartbranding" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary">@joysmartbranding</Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
              <Link to="https://instagram.com/Joysmartbranding" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary">@Joysmartbranding</Link>
            </div>
          </div>

          <div className="rounded-3xl bg-ink p-8 text-cream">
            <div className="text-display text-3xl">Hours</div>
            <div className="mt-4 space-y-1 text-sm text-cream/70">
              <div className="flex justify-between"><span>Mon – Fri</span><span>8:00 – 18:00</span></div>
              <div className="flex justify-between"><span>Saturday</span><span>9:00 – 14:00</span></div>
              <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-7 rounded-3xl bg-card p-8 shadow-brand md:p-10"
        >
          {sent ? (
            <div className="grid h-full place-items-center py-12 text-center">
              <div>
                <div className="text-display text-4xl text-primary">Thanks!</div>
                <p className="mt-3 text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name"><input required className="field" placeholder="Jane Doe" /></Field>
                <Field label="Organization"><input className="field" placeholder="Optional" /></Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email"><input required type="email" className="field" placeholder="you@company.com" /></Field>
                <Field label="Phone"><input className="field" placeholder="+254 …" /></Field>
              </div>
              <Field label="What are you branding?">
                <textarea required rows={5} className="field resize-none" placeholder="e.g. 100 polo t-shirts with embroidered logo, delivery in 3 weeks." />
              </Field>
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
                Send request <Send className="h-4 w-4" />
              </button>
            </div>
          )}
          <style>{`
            .field {
              width: 100%;
              border-radius: 0.75rem;
              border: 1px solid var(--color-border);
              background: var(--color-background);
              padding: 0.75rem 1rem;
              font-size: 0.95rem;
              color: var(--color-foreground);
              outline: none;
              transition: border-color .15s, box-shadow .15s;
            }
            .field:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 20%, transparent); }
          `}</style>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
