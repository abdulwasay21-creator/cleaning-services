import { useState } from 'react';
import { FileText, Monitor, Database, Briefcase } from 'lucide-react';

const steps = [
  {
    icon: <FileText size={28} color="#2ec4b6" />,
    bg: '#e6faf8',
    label: 'Request a Quote',
  },
  {
    icon: <Monitor size={28} color="#a78bfa" />,
    bg: '#ede9fe',
    label: 'Site Visit / Needs Assessment',
  },
  {
    icon: <Database size={28} color="#93c5fd" />,
    bg: '#dbeafe',
    label: 'Custom Cleaning Plan/ Scope',
  },
  {
    icon: <Briefcase size={28} color="#2ec4b6" />,
    bg: '#e6faf8',
    label: 'Launch & Ongoing Quality Control',
  },
];

export default function OnboardingProcess() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <section className="bg-white px-4 py-16 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
          Our Simple Onboarding<br />Process
        </h2>
      </div>

      <div className="mx-auto mt-12 grid gap-6 max-w-[960px] sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`flex min-h-[170px] flex-col items-center justify-center gap-5 rounded-[16px] border p-6 text-center transition duration-200 ${hoveredCard === i ? 'shadow-[0_12px_32px_rgba(14,34,80,0.13)] -translate-y-1' : 'shadow-[0_2px_10px_rgba(14,34,80,0.05)]'}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-[12px]" style={{ background: step.bg }}>
              {step.icon}
            </div>
            <p className="text-sm font-bold leading-6 text-slate-950">{step.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
          className="inline-flex rounded-lg bg-[#2796CF] px-10 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(46,196,182,0.25)] transition duration-200 hover:bg-[#2796CF]"
        >
          Schedule Assessment
        </button>
      </div>
    </section>
  );
}
