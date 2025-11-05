'use client';

import { useState } from 'react';
import Image from 'next/image';
import Stripes from '@/public/images/stripes-dark.svg';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const form = e.currentTarget as HTMLFormElement;
      const data = new FormData(form);

      const res = await fetch('https://formsubmit.co/ajax/info@fintec.com.np', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        // reset native form fields
        form.reset();
        setTimeout(() => {
          setShowToast(false);
          setIsSubmitting(false);
        }, 3000);
      } else {
        setError(json.message || 'Submission failed. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err: any) {
      setError(err?.message || 'Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 mt-32 mb-32">
      <div
        className="relative overflow-hidden rounded-2xl shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-br before:from-gray-900 before:to-blue-900"
        data-aos="zoom-y-out"
      >
        {/* Glow effect */}
        <div
          className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
          aria-hidden="true"
        >
          <div className="h-64 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl animate-pulse" />
        </div>
        {/* Stripes illustration */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <Image
            className="max-w-none opacity-50"
            src={Stripes}
            width={768}
            height={432}
            alt="Stripes"
          />
        </div>
        <div className="px-4 py-12 md:px-12 md:py-20">
          <h2 className="mb-6 border-y text-3xl font-bold text-gray-100 [border-image:linear-gradient(to_right,transparent,--theme(--color-blue-500/.7),transparent)1] md:mb-12 md:text-4xl animate-[fadeIn_1s_ease-in-out]">
            Contact Us
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Details - Left Side */}
            <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
              <h3 className="text-2xl font-semibold text-gray-200">Reach Out to Fintec Solutions</h3>
              <p className="text-lg text-gray-300">
                We’re here to help you with innovative payment solutions. Connect with us today!
              </p>
              <div className="space-y-4">
                <article className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200">Location</h4>
                    <p className="text-gray-400">Kathmandu, Nepal</p>
                  </div>
                </article>
                <article className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200">Phone Number</h4>
                    <p className="text-gray-400">+977 9801011137</p>
                  </div>
                </article>
                <article className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200">Email</h4>
                    <p className="text-gray-400">info@fintec.com.np</p>
                  </div>
                </article>
              </div>
            </div>
            {/* Contact Form - Right Side */}
            <div className="relative" data-aos="fade-left" data-aos-delay="400">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* These hidden inputs configure FormSubmit.co behavior */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Fintec Solutions" />
                <input type="hidden" name="_template" value="table" />
                <div className="relative group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200 transition-all duration-300 group-focus-within:text-blue-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800/50 p-3 text-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 hover:bg-gray-800/70"
                    placeholder="Your Name"
                  />
                </div>
                <div className="relative group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200 transition-all duration-300 group-focus-within:text-blue-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800/50 p-3 text-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 hover:bg-gray-800/70"
                    placeholder="Your Email"
                  />
                </div>
                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-200 transition-all duration-300 group-focus-within:text-blue-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800/50 p-3 text-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 hover:bg-gray-800/70"
                    placeholder="Your Message"
                  />
                </div>
                {error && (
                  <p className="text-sm font-medium text-red-400 animate-[fadeIn_0.5s_ease-in-out]">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-3 text-white font-semibold hover:from-blue-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
                {showToast && (
                  <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg animate-[fadeIn_0.5s_ease-in-out] z-50">
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