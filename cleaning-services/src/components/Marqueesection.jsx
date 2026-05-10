const items = [
  'Office Cleaning',
  'Retail Cleaning',
  'Warehouse Cleaning',
  'Day Portering',
  'Floor Care',
  'Window Cleaning',
  'Industrial Cleaning',
  'Healthcare Cleaning',
];

export default function MarqueeSection() {
  return (
    <section className="overflow-hidden py-4">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 20s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track px-4 sm:px-6 lg:px-8">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center whitespace-nowrap px-2 text-[clamp(1rem,3vw,3rem)] font-semibold uppercase tracking-[0.08em] text-transparent"
            style={{ WebkitTextStroke: '1px #000' }}
          >
            {item}
            <span className="ml-4 text-base text-[#2ec4b6]">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
