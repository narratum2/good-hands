import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { BookingForm } from '../components/BookingForm';
import { Lookbook } from '../components/Lookbook';
import { FAQ } from '../components/FAQ';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <section className="py-20 px-6 bg-porcelain">
        <div className="mx-auto max-w-4xl">
          <BookingForm />
        </div>
      </section>
      <Lookbook />
      <FAQ />
    </main>
  );
}