export const metadata = {
  title: 'Alfama — Good Hands'
};

export default function AlfamaPage() {
  return (
    <main className="py-20 px-6 bg-porcelain">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Alfama</h1>
        <p className="text-lg md:text-xl text-ink/70 mb-8">
          Navigate the maze of Alfama with ease. We bring the salon to you, so you can soak in the history without worrying about your look.
        </p>
        <a href="/#booking" className="inline-block px-6 py-3 bg-gold text-ink font-medium rounded-md hover:bg-gold/90 transition-colors">
          Book a service
        </a>
      </div>
    </main>
  );
}