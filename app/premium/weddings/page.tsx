export default function WeddingsPage() {
  return (
    <main className="py-20 px-6 bg-porcelain">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Weddings</h1>
        <p className="text-lg md:text-xl text-ink/70 mb-12">
          Curated packages designed to make your big day flawless. From trials to on-site touch‑ups, our artists ensure you look and feel your best from sunrise to sunset.
        </p>
        <div className="space-y-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-harbor/40">
            <h2 className="text-xl font-semibold mb-2">Bridal Command</h2>
            <p className="text-sm text-ink/70">Two‑day package including a pre‑wedding trial and full day‑of styling. Includes on‑site touch‑ups and a complimentary hair accessory.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-harbor/40">
            <h2 className="text-xl font-semibold mb-2">Golden Hour Belém</h2>
            <p className="text-sm text-ink/70">Capture the magic of Belém’s waterfront with a bridal look designed for golden‑hour photos. Includes makeup, hairstyling and veil placement.</p>
          </div>
        </div>
      </div>
    </main>
  );
}