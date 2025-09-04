export const metadata = {
  title: 'Avenida — Good Hands'
};

export default function AvenidaPage() {
  return (
    <main className="py-20 px-6 bg-porcelain">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Avenida</h1>
        <p className="text-lg md:text-xl text-ink/70 mb-8">
          Our concierge team covers Avenida da Liberdade and surrounding streets with prompt, discreet beauty services for shoppers and business travellers alike.
        </p>
        <a href="/#booking" className="inline-block px-6 py-3 bg-gold text-ink font-medium rounded-md hover:bg-gold/90 transition-colors">
          Book a service
        </a>
      </div>
    </main>
  );
}