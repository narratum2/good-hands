export default function MembershipPage() {
  return (
    <main className="py-20 px-6 bg-porcelain">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Membership</h1>
        <p className="text-lg md:text-xl text-ink/70 mb-12">
          Make self‑care a habit with our monthly membership. Enjoy priority booking, member‑only rates and complimentary treatments tailored to your goals.
        </p>
        <div className="space-y-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-harbor/40">
            <h2 className="text-xl font-semibold mb-2">Local Glow Plan</h2>
            <p className="text-sm text-ink/70">Four treatments per month of your choice, priority booking and access to exclusive member events. Available for residents of Lisbon metropolitan area.</p>
          </div>
        </div>
      </div>
    </main>
  );
}