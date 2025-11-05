'use client';

import { useState } from 'react';
import Image from 'next/image';
import Stripes from '@/public/images/stripes-dark.svg';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (res.ok) {
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setShowToast(false);
          setIsSubmitting(false);
        }, 3000);
      } else {
        setError(json.error || 'Submission failed.');
        setIsSubmitting(false);
      }
    } catch (err: any) {
      setError(err?.message || 'Network error.');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-32 mb-32">
      <div className="relative overflow-hidden rounded-2xl shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-br before:from-gray-900 before:to-blue-900">
        <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2">
          <div className="h-64 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl animate-pulse" />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform">
          <Image src={Stripes} width={768} height={432} alt="Stripes" className="opacity-50" />
        </div>
        <div className="px-4 py-12 md:px-12 md:py-20">
          <h2 className="mb-6 border-y text-3xl font-bold text-gray-100 md:mb-12 md:text-4xl">
            Contact Us
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-200">Reach Out to Fintec Solutions</h3>
              <p className="text-lg text-gray-300">We’re here to help you with innovative payment solutions. Connect with us today!</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 fill-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200">Location</h4>
                    <p className="text-gray-400">Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 fill-blue-500" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200">Phone</h4>
                    <p className="text-gray-400">+977 9801011137</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 fill-blue-500" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200">Email</h4>
                    <p className="text-gray-400">info@fintec.com.np</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-200">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border p-3 bg-gray-800/50 text-gray-200"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border p-3 bg-gray-800/50 text-gray-200"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-1 w-full rounded-md border p-3 bg-gray-800/50 text-gray-200"
                    placeholder="Your Message"
                    required
                  />
                </div>

                {error && <p className="text-red-400">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white py-3 rounded-md disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>

                {showToast && (
                  <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md">
                    Form submitted successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
