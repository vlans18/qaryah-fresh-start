import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'How is QGT different from other crypto tokens?',
    answer: 'QGT is designed as a utility token with real-world backing. Unlike speculative cryptocurrencies, QGT is progressively anchored to physical gold reserves and integrated into a functional ecosystem serving the Muslim community. It combines the efficiency of digital transactions with the stability of tangible assets.',
  },
  {
    question: 'Is QGT Shariah-compliant?',
    answer: 'Qaryah is committed to Islamic principles. QGT is structured to comply with Shariah guidelines, avoiding interest (riba), excessive uncertainty (gharar), and prohibited activities. We work with Islamic finance scholars to ensure our token model, gold-backing mechanism, and business practices align with Islamic law.',
  },
  {
    question: 'How does the gold-backing work?',
    answer: 'QGT operates in progressive phases. Initially, tokens are minted when users enter via fiat and used within the ecosystem. In later phases, we allocate physical gold reserves to back QGT, creating a transparent audit trail. This phased approach ensures sustainable growth while building toward full asset-backing.',
  },
  {
    question: 'What security measures protect my QGT?',
    answer: 'Security is our top priority. QGT uses industry-standard blockchain security, multi-signature wallets, and regular third-party audits. The Khizanah Vault system provides transparent reserve tracking. We implement best practices in cryptography, access control, and continuous monitoring to safeguard user assets.',
  },
  {
    question: 'Can I convert QGT back to fiat currency?',
    answer: 'Yes, QGT is designed for liquidity. Users can convert QGT back to fiat through our platform, subject to standard processing times and any applicable fees. As the ecosystem matures and gold-backing increases, conversion mechanisms will become more robust and seamless.',
  },
  {
    question: 'Who is behind the Qaryah project?',
    answer: 'Qaryah is led by a team of experienced professionals in fintech, blockchain, Islamic finance, and product development. Our leadership brings decades of combined expertise from established institutions. We operate with full transparency and are committed to building long-term trust with our community.',
  },
  {
    question: 'How are funds and reserves audited?',
    answer: 'Transparency is fundamental to trust. We conduct regular third-party audits of our gold reserves and financial operations. Audit reports are published openly, and our Khizanah Vault provides real-time visibility into reserve allocations. We believe in accountability through verifiable proof.',
  },
  {
    question: 'What happens if the Qaryah platform fails?',
    answer: 'While we are committed to long-term success, we have contingency measures in place. Gold reserves are held in secure, segregated accounts. Token holders maintain ownership rights to their proportional share of backing assets. Our smart contracts include safeguards to protect users in various scenarios.',
  },
];

export function QaryahTrustFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="space-y-8">
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader eyebrow="Trust & Transparency" title="Frequently Asked Questions" />
      </div>

      <div className="space-y-4 mt-8">
        {faqData.map((faq, index) => {
          const delayClass = [
            '',
            'delay-75',
            'delay-150',
            'delay-200',
            'delay-300',
            'delay-300',
            'delay-300',
            'delay-300',
          ][index] || '';

          return (
            <div
              key={index}
              className={`transition-all duration-700 ${delayClass} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div
                className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 rounded-xl"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-sm text-zinc-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
