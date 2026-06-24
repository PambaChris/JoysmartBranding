import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src="/joysmart-logo.svg" alt="JOYSMART" className="h-10 w-auto invert brightness-0" />
            <p className="mt-4 max-w-sm text-sm text-cream/70">
              Branding & promotional merchandise that turns your identity into something
              people can wear, hold, and remember.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/products" className="hover:text-primary">Products</Link></li>
              <li><Link to="/store" className="hover:text-primary">Store</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>Joysmartventure@gmail.com</li>
              <li>+254 119 128 907</li>
              <li>+254 734 236 242</li>
              <li>Nairobi, Kenya</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="https://facebook.com/Joysmart-Branding-Services" target="_blank" rel="noopener noreferrer"><img src="/icons8-facebook-50.png" alt="Facebook" className="h-6 w-6 brightness-0 invert" /></a>
              <a href="https://instagram.com/Joysmartbranding" target="_blank" rel="noopener noreferrer"><img src="/icons8-instagram-50.png" alt="Instagram" className="h-6 w-6 brightness-0 invert" /></a>
              <a href="https://wa.me/254119128907" target="_blank" rel="noopener noreferrer"><img src="/Whatsapp.png" alt="WhatsApp" className="h-6 w-6 brightness-0 invert" /></a>
              <a href="https://tiktok.com/@joysmartbranding" target="_blank" rel="noopener noreferrer"><img src="/tiktok.png" alt="TikTok" className="h-6 w-6 brightness-0 invert" /></a>
              <a href="https://youtube.com/@joysmartbranding" target="_blank" rel="noopener noreferrer"><img src="/youtube.png" alt="YouTube" className="h-6 w-6 brightness-0 invert" /></a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Joysmart Branding Services. All rights reserved.</span>
          <span>Brand it. Wear it. Own it.</span>
        </div>
      </div>
    </footer>
  );
}
