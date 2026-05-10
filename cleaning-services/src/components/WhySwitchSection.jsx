import { useState } from 'react';

const services = [
  {
    label: 'General Commercial Cleaning',
    image: 'https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Cleaning for Health',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: 'Deep Cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: 'High-Touch Point Disinfection',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: 'Wall & Window',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80',
  },
];

const DOTS = 4;
const CENTER = 2;

export default function WhySwitchSection() {
  const [activeDot, setActiveDot] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const [hoveredDiscover, setHoveredDiscover] = useState(null);

  return (
    <section className="overflow-hidden bg-white px-4 py-12 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-12 overflow-x-auto pb-10 scrollbar-none sm:gap-6">
        <div className="flex min-w-full items-end justify-center gap-6 sm:gap-8 lg:justify-between">
          {services.map((svc, i) => {
            const isCenter = i === CENTER;
            const isLeft1 = i === CENTER - 1;
            const isLeft2 = i === CENTER - 2;
            const isRight1 = i === CENTER + 1;
            const isRight2 = i === CENTER + 2;

            let rotate = 0;
            if (isLeft2) rotate = -8;
            else if (isLeft1) rotate = -4;
            else if (isRight1) rotate = 4;
            else if (isRight2) rotate = 8;

            let translateY = 0;
            if (isLeft1 || isRight1) translateY = 20;
            if (isLeft2 || isRight2) translateY = 40;

            const width = isCenter ? 200 : 170;
            const height = isCenter ? 340 : 290;
            const zIndex = isCenter ? 10 : isLeft1 || isRight1 ? 8 : 5;

            const isHovered = hoveredCard === i;
            const shadow = isHovered
              ? '0 20px 50px rgba(14,34,80,0.22)'
              : isCenter
              ? '0 16px 48px rgba(14,34,80,0.20)'
              : '0 6px 24px rgba(14,34,80,0.10)';

            return (
              <div
                key={i}
                className="flex flex-col items-center flex-shrink-0"
                style={{
                  zIndex,
                  transform: `rotate(${rotate}deg) translateY(${translateY}px)`,
                  minWidth: `${width}px`,
                }}
              >
                <div
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="overflow-hidden rounded-[20px] border border-slate-200 bg-white cursor-pointer transition duration-300"
                  style={{
                    width,
                    height,
                    boxShadow: shadow,
                  }}
                >
                  <img
                    src={svc.image}
                    alt={svc.label}
                    className="h-full w-full object-cover"
                    style={{ height: isCenter ? '62%' : '65%' }}
                  />
                  <div className="flex flex-col justify-between p-3">
                    <p
                      className="font-bold text-[#0e2250]"
                      style={{ fontSize: isCenter ? '1rem' : '0.85rem' }}
                    >
                      {svc.label}
                    </p>
                    {isCenter && (
                      <button
                        onMouseEnter={() => setHoveredBtn(true)}
                        onMouseLeave={() => setHoveredBtn(false)}
                        className="mt-3 w-full rounded-xl bg-[#0284C7] py-2 text-[0.8rem] font-semibold text-white transition duration-200"
                        style={{ opacity: hoveredBtn ? 0.85 : 1 }}
                      >
                        Get a Custom Scope
                      </button>
                    )}
                  </div>
                </div>
                {!isCenter && (
                  <span
                    onMouseEnter={() => setHoveredDiscover(i)}
                    onMouseLeave={() => setHoveredDiscover(null)}
                    className={`mt-2 text-[0.8rem] font-medium transition ${hoveredDiscover === i ? 'text-[#1A4D8D] underline' : 'text-slate-500'}`}
                  >
                    Discover More
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: DOTS }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveDot(i)}
            className={`rounded-full transition-all duration-300 ${i === activeDot ? 'h-2 w-7 bg-[#60BF91]' : 'h-2 w-2 bg-slate-300'}`}
          />
        ))}
      </div>
    </section>
  );
}
