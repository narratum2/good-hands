const FAQs = [
  {
    q: 'How fast can I book a service?',
    a: 'Typically within 2–3 hours, depending on availability. Our concierge will confirm your slot as soon as possible.'
  },
  {
    q: 'Do you accept walk‑ins?',
    a: 'We operate by appointment only to guarantee quality and readiness. Same‑day appointments are almost always available via our booking form.'
  },
  {
    q: 'Do stylists speak English?',
    a: 'Yes — all our artists are vetted for English fluency so you always feel understood.'
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-porcelain" id="faq">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQs.map(({ q, a }, idx) => (
            <details key={idx} className="bg-white rounded-2xl p-4 shadow-sm ring-1 ring-harbor/40">
              <summary className="font-medium cursor-pointer">{q}</summary>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}