import { CheckCircle } from 'lucide-react';
import cleanEraLogo from '../images/image__1_-removebg-preview.png';

const features = [
  'Dedicated Account Manager',
  'Supervisor Audits',
  'Photo Verified Checklists',
  'Consistent Quality',
  'Weekly/Monthly Reports',
  '24/7 On-Call Support',
  'Background checked Cleaning Teams',
  'WHMIS Trained Staff',
];

export default function ProblemsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-16 font-sans sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute top-10 left-0 h-44 w-44 rounded-full bg-[#2ec4b6]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-5 right-0 h-40 w-36 rounded-full bg-slate-900/10 blur-3xl" />

      <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto w-full max-w-[520px] h-[420px] sm:h-[460px]">
          <img
            src={cleanEraLogo}
            alt="Clean Era logo"
            className="absolute left-[-100px] top-4 w-44 -translate-x-6 -rotate-90 opacity-90"
          />

          <div className="absolute left-4 top-0 h-[360px] w-[260px] overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(26,77,141,0.15)] sm:w-[300px] sm:h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80"
              alt="Cleaner at work"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-0 h-[200px] w-[160px] overflow-hidden rounded-[16px] border-4 border-white shadow-[0_8px_30px_rgba(26,77,141,0.18)] sm:w-[180px] sm:h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80"
              alt="Cleaning professional"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-[-140px] top-0 text-[5rem] text-[#1A4D8D]/10">✌️</div>
          <div className="absolute bottom-0 right-[-480px] translate-x-40 text-[5rem] text-[#1A4D8D]/10">🔫</div>
        </div>

        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight text-[#0e2250] sm:text-4xl">
            Cleaning Problems That Hurt Operations
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            If your current provider is inconsistent, understaffed, hard to reach,
            or failing inspections, it creates risk, complaints, downtime, and
            wasted management time. CleanEra provides structured cleaning programs
            with accountability, trained teams, task checklists, and responsive
            management.
          </p>

          <h3 className="mt-6 text-xl font-medium text-[#0e2250]">
            Professional cleaning solutions for commercial spaces of every size
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle size={16} className="mt-1 text-[#2ec4b6]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 inline-flex rounded-lg bg-[#0284C7] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Fix My Cleaning Issues
          </button>
        </div>
      </div>
    </section>
  );
}
