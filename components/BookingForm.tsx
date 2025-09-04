"use client";

import { useState } from 'react';

const SERVICES = [
  { id: 'blowout', label: 'Signature Blowout' },
  { id: 'hairstyling', label: 'Event Hairstyling' },
  { id: 'makeup', label: 'Makeup & Glam' },
  { id: 'brows', label: 'Brow Styling' },
];

export function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].id,
    date: '',
    time: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      setSubmitted(true);
      setForm({ name: '', phone: '', service: SERVICES[0].id, date: '', time: '', notes: '' });
    } catch (error) {
      console.error('Booking submission failed', error);
      alert('There was an error submitting your request. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-shell p-6 rounded-2xl shadow-sm ring-1 ring-harbor/40">
        <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
        <p className="text-sm">Your request has been received. Our concierge will contact you shortly to confirm details.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-shell p-6 rounded-2xl shadow-sm ring-1 ring-harbor/40 space-y-4" id="booking">
      <h3 className="text-xl font-semibold mb-2">Book your service</h3>
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium" htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required className="p-2 rounded-md border border-harbor/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold" />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium" htmlFor="phone">Phone / WhatsApp</label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required className="p-2 rounded-md border border-harbor/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold" />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium" htmlFor="service">Service</label>
        <select id="service" name="service" value={form.service} onChange={handleChange} className="p-2 rounded-md border border-harbor/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold">
          {SERVICES.map(({ id, label }) => (
            <option key={id} value={id}>{label}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:gap-6">
        <div className="flex flex-col flex-1 gap-3">
          <label className="text-sm font-medium" htmlFor="date">Date</label>
          <input id="date" name="date" type="date" value={form.date} onChange={handleChange} className="p-2 rounded-md border border-harbor/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold" />
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <label className="text-sm font-medium" htmlFor="time">Time</label>
          <input id="time" name="time" type="time" value={form.time} onChange={handleChange} className="p-2 rounded-md border border-harbor/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium" htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handleChange} className="p-2 rounded-md border border-harbor/50 bg-white focus:outline-none focus:ring-2 focus:ring-gold"></textarea>
      </div>
      <button type="submit" disabled={submitting} className="w-full bg-gold text-ink font-medium py-2 px-4 rounded-md hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        {submitting ? 'Submitting…' : 'Send request'}
      </button>
    </form>
  );
}