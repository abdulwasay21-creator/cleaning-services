import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
  {
    label: 'Workstations & common areas',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Washroom sanitation',
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Garbage removal',
    image:
      'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Floor care',
    image:
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Kitchen & breakroom',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
  },
];

export default function OfficeCleaning() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir * 280,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      style={{
        background: '#fff',
        fontFamily: "'Barlow', 'Segoe UI', sans-serif",
        overflow: 'hidden',
        paddingTop: '30px',
      }}
    >
      {/* Heading */}
      <div
        className="container"
        style={{
          maxWidth: 1580,
          margin: '0 auto',
          paddingBottom: '30px !important',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          What's Included in Our Office
          <br />
          Cleaning
        </h1>
      </div>

      <div
        style={{
          maxWidth: 1600,
          margin: '0 auto',
         paddingTop: '30px',
        }}
      >
        <div style={{ position: 'relative' }}>
          {/* Arrow Buttons */}
          <div
            style={{
              position: 'absolute',
              top: 30,
              right: '8%',
              display: 'flex',
              gap: 10,
              zIndex: 10,
            }}
            className="desktop-arrows"
          >
            {[ChevronLeft, ChevronRight].map((Icon, i) => (
              <button
                key={i}
                onClick={() => scroll(i === 0 ? -1 : 1)}
                style={{
                  background: 'transparent',
                  border: '1.5px solid #cbd5e1',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#94a3b8',
                  transition: 'all 0.2s',
                }}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>

          {/* Navy Box */}
          <div
            style={{
              background: '#0e2250',
              padding: '40px 32px 220px',
              width: '58%',
              minHeight: 380,
              position: 'relative',
              zIndex: 1,
              borderRadius: 8,
            }}
            className="office-box"
          >
            <h2
              style={{
                color: '#fff',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1,
                margin: 0,
                letterSpacing: '-1px',
              }}
            >
              Office Cleaning
              <br />
              Includes:
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="office-scroll"
            style={{
              display: 'flex',
              gap: 18,
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              marginTop: -190,
              paddingBottom: 10,
              position: 'relative',
              zIndex: 2,
            }}
          >
            <style>{`
              .office-scroll::-webkit-scrollbar {
                display: none;
              }

              .office-card {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }

              .office-card:hover {
                transform: translateY(-6px);
                box-shadow: 0 16px 40px rgba(14,34,80,0.22) !important;
              }

              @media (max-width: 1024px) {
                .office-box {
                  width: 100% !important;
                  min-height: 320px !important;
                  padding: 32px 24px 180px !important;
                }

                .desktop-arrows {
                  right: 24px !important;
                  top: 24px !important;
                }
              }

              @media (max-width: 768px) {
                .office-box {
                  padding: 28px 20px 140px !important;
                  min-height: 260px !important;
                }

                .desktop-arrows {
                  display: none !important;
                }

                .office-scroll {
                  margin-top: -120px !important;
                  gap: 14px !important;
                }
              }

              @media (max-width: 640px) {
                .office-scroll {
                  padding-left: 4px;
                }
              }
            `}</style>

            {cards.map((card, i) => (
              <div
                key={i}
                className="office-card"
                style={{
                  position: 'relative',
                  minWidth:
                    window.innerWidth < 640
                      ? 240
                      : window.innerWidth < 1024
                      ? 280
                      : 320,
                  height:
                    window.innerWidth < 640
                      ? 300
                      : window.innerWidth < 1024
                      ? 340
                      : 400,
                  borderRadius: 18,
                  overflow: 'hidden',
                  flexShrink: 0,
                  cursor: 'pointer',
                  boxShadow: '0 6px 24px rgba(14,34,80,0.12)',
                }}
              >
                {/* Image */}
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

                {/* Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(8,20,55,0.85) 0%, rgba(8,20,55,0.15) 55%, transparent 100%)',
                  }}
                />

                {/* Text */}
                <p
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    margin: 0,
                    lineHeight: 1.4,
                    textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                  }}
                >
                  {card.label}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div
            style={{
              display: 'none',
              justifyContent: 'center',
              gap: 12,
              marginTop: 24,
            }}
            className="mobile-arrows"
          >
            <button
              onClick={() => scroll(-1)}
              style={{
                border: '1px solid #d1d5db',
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll(1)}
              style={{
                border: '1px solid #d1d5db',
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronRight size={18} />
            </button>

            <style>{`
              @media (max-width: 768px) {
                .mobile-arrows {
                  display: flex !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}