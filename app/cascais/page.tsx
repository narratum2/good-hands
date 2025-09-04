export const metadata = {
  title: 'Cascais — Good Hands'
};

export default function CascaisPage() {
  return (
    <main className="py-20 px-6 bg-porcelain">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Cascais</h1>
        <p className="text-lg md:text-xl text-ink/70 mb-8">
          Enjoy seaside chic in Cascais with our signature blowouts and makeup looks that withstand the ocean breeze. Perfect for events and editorial shoots.
        </p>
        <a href="/#booking" className="inline-block px-6 py-3 bg-gold text-ink font-medium rounded-md hover:bg-gold/90 transition-colors">
          Book a service
        </a>
      </div>
    </main>
  );
}