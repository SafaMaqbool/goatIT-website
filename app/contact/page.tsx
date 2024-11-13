'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const { name, email, subject, message } = formData;

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.trim() || name.length < 3 || !nameRegex.test(name)) {
      newErrors.name = 'Name must be at least 3 characters long and contain only letters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!subject.trim() || subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters long.';
    }

    if (!message.trim() || message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      // Sending the message to the site owner or admin
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_subject: formData.subject,
          user_message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      );

      // Now send a confirmation email to the user (to_email is dynamic here)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_CONFIRMATION_TEMPLATE_ID!, // Your confirmation template
        {
          user_name: formData.name,
          to_email: formData.email, // Passing the dynamic email address to the template
          confirmation_message: 'Thank you for contacting us! We will get back to you soon.'
        },
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      );

      alert('Message sent successfully! A confirmation email has been sent to you.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Failed to send message, please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  };
  console.log({
    user_name: formData.name,
    to_email: formData.email,
    confirmation_message: 'Thank you for contacting us! We will get back to you soon.'
  });


  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 lg:p-16">
      <div className="text-center">
        <h2 className="mb-2 mt-8 text-4xl font-bold uppercase leading-snug tracking-wide text-blue-100">Contact Us</h2>
        <h1 className="mb-4 text-3xl font-bold uppercase leading-snug tracking-wide text-blue-100">
          We'd love to hear from you!
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          Continue your journey to explore, learn, and succeed with{' '}
          <span className="font-medium text-green-400">GOAT</span>
        </p>
      </div>

      <form
        className="w-full max-w-lg transform rounded-xl bg-gray-800 bg-opacity-90 p-8 shadow-2xl transition-transform"
        onSubmit={handleSubmit}
      >
        {/* Form Fields */}
        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold text-green-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-lg bg-gray-700 p-3 text-white placeholder-gray-500 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.name && <p className="mt-1 text-red-500">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-semibold text-green-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-lg bg-gray-700 p-3 text-white placeholder-gray-500 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && <p className="mt-1 text-red-500">{errors.email}</p>}
        </div>

        {/* Subject Input */}
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-semibold text-green-400">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-lg bg-gray-700 p-3 text-white placeholder-gray-500 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the subject"
          />
          {errors.subject && <p className="mt-1 text-red-500">{errors.subject}</p>}
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold text-green-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-lg bg-gray-700 p-3 text-white placeholder-gray-500 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Enter your message"
          ></textarea>
          {errors.message && <p className="mt-1 text-red-500">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`flex w-full items-center justify-center rounded-lg py-3 text-lg font-semibold text-white transition duration-300 ${
            loading ? 'cursor-not-allowed bg-green-700' : 'bg-green-600 hover:bg-green-500'
          }`}
        >
          {loading ? (
            <>
              <svg
                className="mr-2 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8H4z" />
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default Page;
