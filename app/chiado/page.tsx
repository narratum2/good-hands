export const metadata = {
  title: 'Chiado — Good Hands'
};

export default function ChiadoPage() {
  return (
    <main className="py-20 px-6 bg-porcelain">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Chiado</h1>
        <p className="text-lg md:text-xl text-ink/70 mb-8">
          Our artists operate in the historic Chiado neighbourhood, bringing salon‑quality hair, makeup and brow services directly to you.
        </p>
        <a href="/#booking" className="inline-block px-6 py-3 bg-gold text-ink font-medium rounded-md hover:bg-gold/90 transition-colors">
          Book a service
        </a>
      </div>
    </main>
  );
}