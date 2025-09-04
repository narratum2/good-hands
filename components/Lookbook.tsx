import Image from 'next/image';
import lookbook from '../public/lookbook/lookbook.json';

type Look = {
  src: string;
  alt: string;
  blurDataURL?: string;
};

export function Lookbook() {
  const items: Look[] = lookbook as any;
  return (
    <section className="py-20 bg-porcelain">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Lookbook</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-harbor/40">
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={600}
                placeholder={item.blurDataURL ? 'blur' : undefined}
                blurDataURL={item.blurDataURL}
                className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}