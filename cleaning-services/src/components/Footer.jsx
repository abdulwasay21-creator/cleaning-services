import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import cleanEraLogo from '../images/cleanera-logo.png';

export default function Footer() {
  return (
    <footer className="font-sans">
      <div className="flex justify-center bg-white pb-0">
        <div className="relative z-10 -mb-20 flex h-44 w-44 items-center justify-center rounded-full border-4 border-[#2ec4b6] bg-white shadow-[0_4px_24px_rgba(14,34,80,0.12)]">
          <p className="text-center text-sm font-bold leading-6 text-slate-950">
            Request a Tailored<br />Cleaning Plan
          </p>
        </div>
      </div>

      <div className="bg-[#0e2250] px-4 pt-24 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1050px] gap-10 sm:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-5">
            <img src={cleanEraLogo} alt="Clean Era logo" className="w-28" />
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <Phone size={14} className="mt-1 text-[#2ec4b6]" />
                <span>416-207-9500</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={14} className="mt-1 text-[#2ec4b6]" />
                <span>support@getcleanera.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 text-[#2ec4b6]" />
                <span className="break-words">
                  Suite 750 should be on the same line as the "Robert Speck Parkway
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">Quick Link</h4>
            {['About Us', 'Services', 'Facilities Served', 'Locations', 'Blog', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm text-slate-300 transition hover:text-[#2ec4b6]"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">Services</h4>
            {['Commercial Cleaning', 'Specialized Cleaning Services'].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm text-slate-300 transition hover:text-[#2ec4b6]"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">Business Hours</h4>
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <Clock size={14} className="mt-1 text-[#2ec4b6]" />
              <span>Office: Monday - Friday 9 AM - 5 PM</span>
            </div>
            <p className="text-sm text-slate-300">Cleaning services available 24/7</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 bg-[#091a40] px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-xs text-slate-400">Copyright © 2026. Design & Developed by Geeks Root.</p>
        <div className="flex flex-wrap items-center gap-2">
          {[
            {
              label: 'LinkedIn',
              svg: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              ),
            },
            {
              label: 'Facebook',
              svg: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              ),
            },
            {
              label: 'Instagram',
              svg: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              ),
            },
          ].map((s, i) => (
            <a
              key={i}
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-[#2ec4b6]/20"
            >
              {s.svg}
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
