import { useState } from 'react';

const industries = [
  {
    number: '01',
    icon: '📋',
    title: 'Corporate\nOffices',
    description:
      'We are experienced in bringing adventures to their journey, with all outdoor destinations.',
  },
  {
    number: '02',
    icon: '🏭',
    title: 'Warehouses',
    description:
      'We are experienced in bringing adventures to their journey, with all outdoor destinations.',
  },
  {
    number: '03',
    icon: '🏗️',
    title: 'Manufacturing\nPlants',
    description:
      'We are experienced in bringing adventures to their journey, with all outdoor destinations.',
  },
  {
    number: '04',
    icon: '🏥',
    title: 'Medical Clinics',
    description:
      'We are experienced in bringing adventures to their journey, with all outdoor destinations.',
  },
];

export default function ProcessSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <section className="bg-white px-4 py-16 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
          Trusted Across Multiple<br />Industries
        </h2>
      </div>

      <div className="mx-auto mt-12 grid gap-6 max-w-[980px] sm:grid-cols-2 xl:grid-cols-4">
        {industries.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`rounded-[14px] border p-6 text-center transition duration-200 ${hoveredCard === i ? 'shadow-[0_12px_36px_rgba(14,34,80,0.14)] -translate-y-1' : 'shadow-[0_2px_12px_rgba(14,34,80,0.06)]'}`}
          >
            <div className="flex w-[55%] items-start justify-between text-4xl sm:w-2/3">
              <span className="text-2xl font-bold tracking-[0.05em] text-[#0E2250]">{item.number}</span>
              <span>{item.icon}</span>
            </div>
            <p className="mb-3 mt-4 text-lg font-medium leading-6 text-slate-950 whitespace-pre-line">
              {item.title}
            </p>
            <p className="text-sm leading-7 text-slate-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
          className="inline-flex rounded-lg bg-[#2796CF] px-10 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(46,196,182,0.25)] transition duration-200 hover:bg-[#2796CF]"
        >
          Book An Appointment
        </button>
      </div>
    </section>
  );
}
