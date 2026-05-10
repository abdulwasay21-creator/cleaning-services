import { Shield, Calendar, Lock } from 'lucide-react';

const trustBadges = [
  { icon: Shield, label: 'WSIB Compliant' },
  { icon: Calendar, label: 'Flexible Scheduling' },
  { icon: Lock, label: 'Insured & Bonded' },
];

function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden min-h-[680px] sm:min-h-[740px] lg:min-h-[780px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80"
          alt="Cleaning staff"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(12,35,80,0.85)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[680px] flex-col items-center justify-center px-6 py-24 text-center sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Professional Office Cleaning for{' '}
          <span className="text-[#2ec4b6]">Businesses in GTA</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">
          Reliable, fully managed cleaning services designed for offices,
          industrial sites, retail spaces, healthcare environments, and
          multi-site operations.
        </p>

        <a
          href="#process"
          className="mt-8 inline-block rounded px-8 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#1A4D8D]"
          style={{ border: '1.5px solid #2ec4b6' }}
        >
          Book a Site Walkthrough
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
