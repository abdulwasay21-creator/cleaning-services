import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can you respond to urgent cleaning needs?',
    answer:
      'Fast our average emergency dispatch time is 90 minutes across the GTA. We maintain 24/7 on-call support and dedicated rapid response crews ready for spills, floods, and urgent situations. This ensures you are never left waiting during critical moments.',
  },
  {
    question: 'How fast can you take over from our current provider?',
    answer:
      'We can typically transition within 5â€“10 business days. Our onboarding team handles all scheduling, staffing, and site walkthroughs to ensure a seamless handover with zero disruption to your operations.',
  },
  {
    question: 'Do you clean after hours, weekends, or holidays?',
    answer:
      'Yes! We offer fully flexible scheduling including evenings, weekends, and statutory holidays. We work around your business hours to minimize any disruption to your team and clients.',
  },
  {
    question: 'What happens if our regular cleaner is unavailable?',
    answer:
      'We always have backup staff ready. If your assigned cleaner is unavailable, a trained replacement is dispatched automatically â€” so your cleaning schedule is never interrupted.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white px-4 py-16 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-sm text-slate-500 sm:text-base">
          Still need help?{' '}
          <a href="#contact" className="font-semibold text-[#1A4D8D] underline">
            Get Help Now
          </a>
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`overflow-hidden rounded-[14px] border transition duration-200 ${isOpen ? 'border-slate-300 bg-slate-100' : 'border-slate-200 bg-white'}`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-3 px-6 py-5 text-left"
              >
                <span className="flex-1 text-sm font-bold leading-6 text-slate-900">
                  {faq.question}
                </span>
                <span className="text-slate-500">
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 text-center text-sm leading-7 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
