import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Admissions', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.message.trim()) newErrors.message = 'Message required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-card max-w-md">
          <span className="material-symbols-outlined text-5xl text-secondary">check_circle</span>
          <h2 className="mt-4 text-2xl font-semibold">Message Sent!</h2>
          <p className="mt-2 text-text-secondary">We'll respond within 24 hours.</p>
          <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: 'Admissions', message: '' }); }} className="mt-6 text-secondary font-medium">Send another</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Contact</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-primary">Get in Touch</h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">We're here to help with any inquiries.</p>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Info Cards */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white shadow-card flex gap-4">
            <span className="material-symbols-outlined text-3xl text-secondary">location_on</span>
            <div>
              <h3 className="font-semibold text-primary">Campus</h3>
              <p className="text-sm text-text-secondary">123 Education Avenue, Minna, Niger State</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white shadow-card flex gap-3 items-center">
              <span className="material-symbols-outlined text-secondary">call</span>
              <div>
                <h4 className="font-medium text-primary text-sm">Phone</h4>
                <p className="text-xs text-text-secondary">+234 800 123 4567</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white shadow-card flex gap-3 items-center">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <div>
                <h4 className="font-medium text-primary text-sm">Email</h4>
                <p className="text-xs text-text-secondary">info@falalu.edu.ng</p>
              </div>
            </div>
          </div>
          {/* Map placeholder */}
          <div className="h-64 rounded-2xl bg-neutral-200 flex items-center justify-center text-text-muted">
            [Map Placeholder]
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-card">
          <h2 className="text-2xl font-semibold text-primary mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-border'} px-4 py-3`} />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-border'} px-4 py-3`} />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <select name="subject" value={form.subject} onChange={handleChange} className="w-full rounded-lg border border-border px-4 py-3">
                <option>Admissions</option>
                <option>Academic Calendar</option>
                <option>General</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} className={`w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-border'} px-4 py-3`}></textarea>
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}