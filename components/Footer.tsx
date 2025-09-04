const areas = [
  { slug: 'chiado', label: 'Chiado' },
  { slug: 'principe-real', label: 'Príncipe Real' },
  { slug: 'baixa', label: 'Baixa' },
  { slug: 'avenida', label: 'Avenida' },
  { slug: 'alfama', label: 'Alfama' },
  { slug: 'belem', label: 'Belém' },
  { slug: 'sintra', label: 'Sintra' },
  { slug: 'cascais', label: 'Cascais' }
];

const premiums = [
  { slug: '/premium/weddings', label: 'Weddings' },
  { slug: '/premium/retreats', label: 'Retreats' },
  { slug: '/premium/corporate', label: 'Corporate' },
  { slug: '/premium/membership', label: 'Membership' }
];

export function Footer() {
  return (
    <footer className="border-t border-harbor/50 mt-16">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Areas we serve</h3>
          <ul className="space-y-1">
            {areas.map(({ slug, label }) => (
              <li key={slug}>
                <a href={`/${slug}`} className="hover:text-gold transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Premium</h3>
          <ul className="space-y-1">
            {premiums.map(({ slug, label }) => (
              <li key={slug}>
                <a href={slug} className="hover:text-gold transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Get in touch</h3>
          <p className="leading-relaxed">
            WhatsApp: <a href="https://wa.me/351123456789" className="hover:text-gold">+351 123 456 789</a>
            <br />
            Email: <a href="mailto:concierge@goodhands.pt" className="hover:text-gold">concierge@goodhands.pt</a>
          </p>
        </div>
      </div>
    </footer>
  );
}