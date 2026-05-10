import { useState } from 'react';
import Button from './Button';
import { navigationLinks } from '../data/siteContent';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import cleaneraLogo from '../images/cleanera-logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-8 max-w-7xl">
        <a href="#top" className="flex items-center gap-3">
          <img src={cleaneraLogo} alt="CleanEra Logo" className="h-12 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-sm">
            <Phone color="#67c196" />
            <p className="font-semibold text-[#1A4D8D]">289-207-9500</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail color="#67c196" />
            <p className="font-semibold text-[#1A4D8D]">support@getcleanera.com</p>
          </div>
        </div>

        <div className="hidden lg:block">
          <Button href="#cta">Get a Quote &amp; Site Visit</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 transition hover:border-sky-300 hover:text-sky-700 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-600 transition hover:text-slate-950"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#cta" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
              Get a Quote &amp; Site Visit
            </Button>
          </nav>
        </div>
      ) : null}

      <nav className="hidden justify-center gap-8 border-t border-slate-100 py-5 lg:flex">
        {navigationLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-semibold text-[#1A4D8D] transition hover:text-slate-950"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
