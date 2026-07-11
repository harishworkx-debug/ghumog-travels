import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../lib/data';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="glass rounded-2xl overflow-hidden transition-all duration-300">
          <button
            onClick={() => toggle(index)}
            className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-forest-900 pr-4">{faq.question}</span>
            <span className="text-forest-500 shrink-0">
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
          
          <div 
            className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-forest-700 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
