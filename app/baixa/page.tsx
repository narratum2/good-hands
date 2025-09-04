export const metadata = {
  title: 'Baixa — Good Hands'
};

export default function BaixaPage() {
  return (
    <main className="py-20 px-6 bg-porcelain">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Baixa</h1>
        <p className="text-lg md:text-xl text-ink/70 mb-8">
          Whether you’re headed to a meeting or an evening out, our Baixa‑based artists will have you ready on time with minimal stress.
        </p>
        <a href="/#booking" className="inline-block px-6 py-3 bg-gold text-ink font-medium rounded-md hover:bg-gold/90 transition-colors">
          Book a service
        </a>
      </div>
    </main>
  );
}