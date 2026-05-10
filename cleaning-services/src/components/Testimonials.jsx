import { useState } from 'react';

const testimonials = [
  {
    name: 'Zara Momand',
    role: 'Manager Ariana, Denture Clinic',
    quote:
      '"The reliability and quality of service from CleanEra is exceptional. They\'ve maintained our clinic to the highest required standards for over 2 years."',
  },
  {
    name: 'Matthew Schwartz',
    role: 'Restaurant Manager, Chick-fil-A',
    quote:
      'Professional team, transparent pricing, and always on time. CleanEra understands our industry\'s unique cleaning requirements perfectly."',
  },
];

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-white font-sans px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
          Trusted by Businesses That Need<br />Reliability
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`rounded-[16px] bg-[#d1ede3] p-8 transition duration-200 ${hoveredCard === i ? 'shadow-[0_12px_32px_rgba(14,34,80,0.12)] -translate-y-1' : 'shadow-[0_2px_10px_rgba(14,34,80,0.05)]'}`}
          >
            <p className="mb-1 text-center text-base font-extrabold text-slate-950">
              {t.name}
            </p>
            <p className="mb-4 text-center text-sm text-slate-600">
              {t.role}
            </p>
            <div className="mb-4 h-px bg-slate-200" />
            <p className="text-center text-sm leading-7 text-slate-700 italic">
              {t.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
