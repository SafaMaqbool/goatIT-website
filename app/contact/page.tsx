'use client';
import React, { useState } from 'react';

// Define the type for the form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Page: React.FC = () => {
  // State to hold form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State to hold validation messages
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // State to indicate loading status
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors for the field being updated
    setErrors({ ...errors, [name]: '' });
  };

  // Function to validate form data
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const { name, email, subject, message } = formData;

    // Name validation
    const nameRegex = /^[A-Za-z\s]+$/; // Allow only letters and spaces
    if (!name.trim() || name.length < 3 || !nameRegex.test(name)) {
      newErrors.name = 'Name must be at least 3 characters long and contain only letters.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Subject validation
    if (!subject.trim() || subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters long.';
    }

    // Message validation
    if (!message.trim() || message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    return newErrors;
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop form submission if there are errors
    }

    // Set loading state
    setLoading(true);

    // Send form data to the API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Check the response status
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset the form
      } else {
        alert('Error sending message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="mt-16 p-16">
      <h2 className="text-center text-2xl font-bold uppercase leading-tight tracking-wider text-black dark:text-white">
        Contact Us
      </h2>
      <h1 className="text-center text-5xl font-semibold tracking-tight">Get in touch!</h1>
      <p className="mt-1 text-center text-xl tracking-wide">
        Continue your journey to explore, learn, and succeed with GOAT
      </p>

      {/* Contact Form Start */}
      <form className="mx-auto mt-10 max-w-lg rounded-lg bg-gray-800 p-6 shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-gray-600 bg-gray-700 p-2 text-white"
          />
          {errors.name && <p className="mt-1 text-red-400">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-gray-600 bg-gray-700 p-2 text-white"
          />
          {errors.email && <p className="mt-1 text-red-400">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-semibold text-white">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-gray-600 bg-gray-700 p-2 text-white"
          />
          {errors.subject && <p className="mt-1 text-red-400">{errors.subject}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-gray-600 bg-gray-700 p-2 text-white"
            rows={4}
          ></textarea>
          {errors.message && <p className="mt-1 text-red-400">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={loading} // Disable the button while loading
          className={`flex w-full items-center justify-center rounded py-2 text-white transition duration-200 ${loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-500'}`}
        >
          {loading ? (
            <>
              {/* Updated Loader Icon */}
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
      {/* Contact Form End */}
    </div>
  );
};

export default Page;
