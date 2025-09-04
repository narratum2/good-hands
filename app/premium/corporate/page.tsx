export default function CorporatePage() {
  return (
    <main className="py-20 px-6 bg-porcelain">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Corporate & VIP</h1>
        <p className="text-lg md:text-xl text-ink/70 mb-12">
          From boardroom to dinner, our corporate packages keep you camera‑ready for every pitch, panel and gala. Ideal for keynote speakers, executives and VIP guests.
        </p>
        <div className="space-y-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-harbor/40">
            <h2 className="text-xl font-semibold mb-2">Boardroom‑to‑Dinner Express</h2>
            <p className="text-sm text-ink/70">Full day retainer including morning prep, midday retouch and evening glam. Available in‑office or at your hotel.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-harbor/40">
            <h2 className="text-xl font-semibold mb-2">Greenroom Service</h2>
            <p className="text-sm text-ink/70">On‑call beauty concierge for conferences and events. Includes styling and makeup for speakers and hosts.</p>
          </div>
        </div>
      </div>
    </main>
  );
}