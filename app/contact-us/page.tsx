'use client';

import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-purple-950 mb-4">Contact Us</h1>
        <div className="w-24 h-1 bg-purple-700"></div>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-gray-700 text-lg mb-8">
          We&apos;d love to hear from you! Whether you have a question about our content or you&apos;re interested in collaborating, we&apos;re here to help.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                autoComplete="off"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                autoComplete="off"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              autoComplete="off"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 transition-colors duration-300"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-600">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
