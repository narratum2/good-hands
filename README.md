# Good Hands – Beauty Concierge Platform

This repository contains the source code for **Good Hands**, a concierge platform tailored for beauty services in Lisbon. The application is built with Next.js 13 using the App Router, TypeScript, Tailwind CSS and Framer Motion. It includes a minimal API layer for booking requests and an OpenAPI specification for AI agents.

## Features

* **Landing page** with hero section, service cards, booking form, lookbook and FAQ.
* **Neighbourhood pages** for Chiado, Príncipe Real, Baixa, Avenida, Alfama, Belém, Sintra and Cascais.
* **Premium pages** for Weddings, Retreats, Corporate/VIP and Membership packages.
* **Booking API** (`/api/bookings`) that accepts POST requests with customer details.
* **OpenAPI spec** available at `/api/openapi.json` so AI agents can discover and call the booking endpoint.
* **Lookbook** images stored under `public/lookbook/source` with blur placeholders defined in `public/lookbook/lookbook.json`.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project structure

```
goodhands/
├── app/                    # App Router pages and API routes
│   ├── page.tsx            # Landing page
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── premium/…           # Premium package pages
│   ├── [area]/page.tsx     # Neighbourhood pages (chiado, baixa, etc.)
│   └── api/…               # API endpoints (bookings, openapi)
├── components/             # Reusable React components
├── public/
│   └── lookbook/           # Lookbook images and JSON manifest
├── styles/                 # Global CSS
├── scripts/                # Utility scripts (e.g. generate blurDataURL)
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Customization

* **Tokens & palette:** Modify `tailwind.config.js` to adjust colours, radii or easing curves. The default palette uses warm neutrals and pastels that evoke calm and trust.
* **Lookbook:** Replace images in `public/lookbook/source` and run the script in `scripts/generate_blurs.py` to regenerate blur placeholders and update the manifest.
* **Premium & area pages:** Adjust the copy or add packages by editing the files under `app/premium` and `app/{area}`.
* **API integration:** Extend `/api/bookings` to persist requests to your database or integrate with Intercom, WhatsApp or CRM.

## License

This project is provided as is for demonstration purposes.