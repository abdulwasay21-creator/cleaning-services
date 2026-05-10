import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
  {
    label: 'Production floor cleaning',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Warehouse aisles',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Break rooms',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Locker rooms',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94aca55b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Loading docks',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Restrooms & washrooms',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
  },
];

export default function IndustriesSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir * 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      style={{
        background: '#f0f4fa',
        fontFamily: "'Barlow', 'Segoe UI', sans-serif",
        overflow: 'hidden',
        paddingTop: 60,
        paddingBottom: 70,
      }}
    >
      <style>{`
        /* Hide scrollbar completely */
        .industrial-scroll {
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        .industrial-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
          width: 0;
          height: 0;
        }

        .industrial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .industrial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 44px rgba(14,34,80,0.22) !important;
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .industrial-box {
            width: 100% !important;
            height: auto !important;
            min-height: 280px;
          }
          .industrial-arrows {
            left: 30px !important;
            top: 20px !important;
          }
          .industrial-title {
            font-size: 2.2rem !important;
            position: relative !important;
            top: auto !important;
            left: auto !important;
          }
        }

        @media (max-width: 768px) {
          .industrial-box {
            padding: 28px 22px !important;
          }
          .industrial-title {
            font-size: 1.8rem !important;
          }
          .industrial-scroll {
            margin-top: -80px !important;
            gap: 14px !important;
          }
          .industrial-arrows {
            display: none !important;
          }
          .industrial-card {
            min-width: 240px !important;
            height: 300px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .industrial-card {
            min-width: 280px !important;
            height: 340px !important;
          }
        }

        @media (min-width: 1025px) {
          .industrial-card {
            min-width: 320px !important;
            height: 380px !important;
          }
        }
      `}</style>

      <div style={{ position: 'relative' }}>
        {/* Navy Box */}
        <div
          className="industrial-box"
          style={{
            background: '#0e2250',
            marginLeft: 'auto',
            width: '65%',
            height: 400,
            padding: '38px 42px',
            position: 'relative',
            zIndex: 1,
            borderRadius: '10px 0 0 10px',
          }}
        >
          <h2
            className="industrial-title"
            style={{
              color: '#fff',
              fontSize: '3rem',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              position: 'absolute',
              top: 38,
              left: 42,
            }}
          >
            Industrial Includes:
          </h2>
        </div>

        {/* Arrows */}
        <div
          className="industrial-arrows"
          style={{
            position: 'absolute',
            top: 48,
            left: 140,
            display: 'flex',
            gap: 12,
            zIndex: 10,
          }}
        >
          {[ChevronLeft, ChevronRight].map((Icon, i) => (
            <button
              key={i}
              onClick={() => scroll(i === 0 ? -1 : 1)}
              style={{
                background: 'transparent',
                border: '1.5px solid #cbd5e1',
                borderRadius: '50%',
                width: 42,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#94a3b8',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1A4D8D';
                e.currentTarget.style.color = '#1A4D8D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.color = '#94a3b8';
              }}
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>

      {/* Cards - scrollable with NO visible scrollbar */}
      <div
        ref={scrollRef}
        className="industrial-scroll"
        style={{
          display: 'flex',
          gap: 18,
          overflowX: 'auto',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          marginTop: -250,
          paddingBottom: 0,
          position: 'relative',
          zIndex: 2,
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="industrial-card"
            style={{
              position: 'relative',
              minWidth: '320px', // fallback, overridden by media queries
              height: '380px',
              borderRadius: 16,
              overflow: 'hidden',
              flexShrink: 0,
              cursor: 'pointer',
              boxShadow: '0 6px 24px rgba(14,34,80,0.12)',
            }}
          >
            <img
              src={card.image}
              alt={card.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(8,20,55,0.82) 0%, rgba(8,20,55,0.05) 55%, transparent 100%)',
              }}
            />
            <p
              style={{
                position: 'absolute',
                bottom: 20,
                left: 18,
                right: 18,
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
                margin: 0,
                lineHeight: 1.4,
                textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                textAlign: 'center',
              }}
            >
              {card.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <button
          style={{
            background: '#0284C7',
            border: '1.5px solid #0284C7',
            color: '#fff',
            borderRadius: 10,
            padding: '12px 38px',
            fontSize: '0.95rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#0369a1';
            e.currentTarget.style.borderColor = '#0369a1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0284C7';
            e.currentTarget.style.borderColor = '#0284C7';
          }}
        >
          Get a Custom Scope
        </button>
      </div>
    </section>
  );
}