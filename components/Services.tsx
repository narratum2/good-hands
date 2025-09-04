const services = [
  {
    id: 'blowout',
    name: 'Signature Blowout',
    time: '45–60 min',
    price: '€30–€55',
    description: 'Smooth, bouncy finish tailored to your hair type.'
  },
  {
    id: 'hairstyling',
    name: 'Event Hairstyling',
    time: '45–75 min',
    price: '€40–€85',
    description: 'Updo, waves or pony. Styles that last all night.'
  },
  {
    id: 'makeup',
    name: 'Makeup & Glam',
    time: '45–90 min',
    price: '€45–€95',
    description: 'From natural glow to full glam. Always photograph-ready.'
  },
  {
    id: 'brows',
    name: 'Brow Styling',
    time: '20–30 min',
    price: '€15–€30',
    description: 'Shape, tint and set for defined, balanced brows.'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-shell" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {services.map(service => (
            <div key={service.id} className="flex flex-col justify-between bg-white rounded-2xl shadow-sm ring-1 ring-harbor/40 p-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-ink">{service.name}</h3>
                <p className="text-sm text-ink/70 mb-4">{service.description}</p>
              </div>
              <div className="mt-auto">
                <p className="text-sm font-medium text-ink">
                  {service.time}
                  <span className="mx-1">·</span>
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}