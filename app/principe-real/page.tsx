export const metadata = {
  title: 'Príncipe Real — Good Hands'
};

export default function PrincipeRealPage() {
  return (
    <main className="py-20 px-6 bg-porcelain">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Príncipe Real</h1>
        <p className="text-lg md:text-xl text-ink/70 mb-8">
          Nestled between the gardens and boutiques of Príncipe Real, we provide on‑demand beauty services at your home, hotel or event space.
        </p>
        <a href="/#booking" className="inline-block px-6 py-3 bg-gold text-ink font-medium rounded-md hover:bg-gold/90 transition-colors">
          Book a service
        </a>
      </div>
    </main>
  );
}