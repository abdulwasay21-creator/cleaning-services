import { useState } from 'react';
import { Star } from 'lucide-react';

const allBadges = [
  {
    icon: (
      <img
        src="https://cdn.vectorstock.com/i/750p/37/58/shield-check-mark-logo-icon-design-template-vector-29003758.avif"
        alt="WSIB"
        className="h-10 w-10 object-contain"
      />
    ),
    label: 'WSIB Compliant',
  },
  {
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/2693/2693507.png"
        alt="Scheduling"
        className="h-10 w-10 object-contain"
      />
    ),
    label: 'Flexible Scheduling',
  },
  {
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/15090/15090928.png"
        alt="Insured"
        className="h-10 w-10 object-contain"
      />
    ),
    label: 'Insured & Bonded',
  },
  {
    icon: <Star className="h-10 w-10 text-[#2ec4b6]" />,
    label: '5-Star Rated',
  },
  {
    icon: <Star className="h-10 w-10 text-[#2ec4b6]" />,
    label: 'Trusted Professionals',
  },
  {
    icon: <Star className="h-10 w-10 text-[#2ec4b6]" />,
    label: 'Reliable Service',
  },
];

const ITEMS_PER_PAGE = 3;

export default function TrustBadgesSection() {
  const [activeDot, setActiveDot] = useState(0);

  const totalDots = Math.ceil(allBadges.length / ITEMS_PER_PAGE);

  const visibleBadges = allBadges.slice(
    activeDot * ITEMS_PER_PAGE,
    activeDot * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section
      className="relative flex justify-center px-4 pb-16"
      style={{
        background: '#f0f4fa',
        fontFamily: "'Segoe UI', sans-serif",
        marginTop: '-40px',
      }}
    >
      {/* Main Card */}
      <div
        className="
          relative z-10
          w-full max-w-6xl
          rounded-[28px]
          bg-white
          px-4 py-6
          sm:px-6 sm:py-8
          lg:px-10 lg:py-10
        "
        style={{
          boxShadow: '0 10px 40px rgba(26,77,141,0.10)',
        }}
      >
        {/* Badges Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {visibleBadges.map((badge, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center text-center
                sm:flex-row sm:items-center sm:text-left
                gap-4
                rounded-2xl
                border border-gray-100
                bg-white
                px-4 py-5
                sm:px-5
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              {/* Icon */}
             <div
  className="
    flex h-14 w-14 flex-shrink-0
    items-center justify-center
    rounded-xl bg-[#f7fafc]
    self-center sm:self-auto
    mx-auto sm:mx-0
  "
>
  {badge.icon}
</div>

              {/* Text */}
              <div className="min-w-0">
                <p
                  className="
                    text-sm sm:text-[15px]
                    font-semibold
                    leading-snug
                    text-[#071536]
                  "
                >
                  {badge.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveDot(i)}
              className="
                h-2.5 w-2.5 rounded-full
                transition-all duration-300
              "
              style={{
                background: i === activeDot ? '#60BF91' : '#d1d5db',
                transform: i === activeDot ? 'scale(1.3)' : 'scale(1)',
              }}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-7 flex justify-center">
          <button
            className="
              rounded-xl
              bg-[#071536]
              px-6 py-3
              text-sm font-semibold
              text-white
              transition-all duration-300
              hover:scale-[1.02]
              hover:opacity-95
              sm:px-8
            "
          >
            Claim My 6-Month Offer
          </button>
        </div>
      </div>
    </section>
  );
}