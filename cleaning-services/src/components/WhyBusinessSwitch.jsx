import { useState } from 'react';

const topCards = [
  {
    label: 'Dedicated account management',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: 'Trained and Background checked staff',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80',
  },
];

const bottomCards = [
  {
    label: 'Reliable scheduling systems',
    image: 'https://plus.unsplash.com/premium_photo-1722945611742-096d5d1d6351?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Quality inspections',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: 'Fast issue resolution',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: 'Scalable multi-site service',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=400&q=80',
  },
];

function FeatureCard({ item, hoveredCard, setHoveredCard, id }) {
  return (
    <div
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`rounded-[14px] border border-slate-200 bg-white p-6 text-center transition duration-200 ${hoveredCard === id ? 'shadow-[0_10px_32px_rgba(14,34,80,0.13)] -translate-y-1' : 'shadow-[0_2px_10px_rgba(14,34,80,0.05)]'}`}
    >
      <div className="mx-auto mb-4 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-slate-200">
        <img src={item.image} alt={item.label} className="h-full w-full object-cover" />
      </div>
      <p className="text-base font-medium leading-6 text-slate-950">
        {item.label}
      </p>
    </div>
  );
}

export default function WhyBusinessSwitch() {
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-white px-4 py-16 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:items-start">
          <div className="pt-2">
            <h2 className="text-3xl font-medium leading-tight text-slate-950 sm:text-4xl">
              Why Businesses Switch to CleanEra
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Many companies chose CleanEra after dealing with poor communication,
              missed cleans, staffing issues, or lack of accountability.
            </p>
            <button
              onMouseEnter={() => setHoveredBtn(true)}
              onMouseLeave={() => setHoveredBtn(false)}
              className="mt-6 inline-flex rounded-lg bg-[#2796CF] px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(46,196,182,0.25)] transition duration-200"
              style={{ background: '#2796CF' }}
            >
              Talk to Our Team
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {topCards.map((item, i) => (
              <FeatureCard
                key={i}
                item={item}
                id={`top-${i}`}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bottomCards.map((item, i) => (
            <FeatureCard
              key={i}
              item={item}
              id={`bottom-${i}`}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
