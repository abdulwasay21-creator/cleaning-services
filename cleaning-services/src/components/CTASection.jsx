import { useState } from 'react';
import ctaPersonImage from '../images/premium_photo-1679500355537-955ff5b1f516-removebg-preview.png';

export default function CTASection() {
  const [hoveredBtn1, setHoveredBtn1] = useState(false);
  const [hoveredBtn2, setHoveredBtn2] = useState(false);

  return (
    <section className="relative font-sans">
      <div className="relative overflow-visible bg-[#b2e0d4] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1160px] gap-10 lg:grid-cols-[1.2fr_360px] lg:items-center">
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Need a Reliable Cleaning Partner?
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Whether you manage one building or multiple facilities, CleanEra can
              build a program that protects your standards and saves management time.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onMouseEnter={() => setHoveredBtn1(true)}
                onMouseLeave={() => setHoveredBtn1(false)}
                className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition duration-200"
                style={{ background: hoveredBtn1 ? '#0e9e7e' : '#12b996' }}
              >
                Request Proposal
              </button>
              <button
                onMouseEnter={() => setHoveredBtn2(true)}
                onMouseLeave={() => setHoveredBtn2(false)}
                className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition duration-200"
                style={{ background: hoveredBtn2 ? '#1A4D8D' : '#38bdf8' }}
              >
                Book Site Visit
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] lg:justify-self-end">
            <img
              src={ctaPersonImage}
              alt="Cleaning professional"
              className="h-[320px] w-full object-contain object-bottom sm:h-[380px] lg:h-[420px]"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute top-8 right-1/3 hidden h-28 w-28 rounded-full bg-white/10 md:block" />
        <div className="pointer-events-none absolute bottom-0 right-[38%] hidden h-20 w-20 rounded-full bg-white/5 md:block" />
      </div>

      <div className="bg-white px-4 py-6 text-center sm:px-6">
        <p className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Ready for fewer complaints and a space you're proud of?
        </p>
      </div>
    </section>
  );
}
