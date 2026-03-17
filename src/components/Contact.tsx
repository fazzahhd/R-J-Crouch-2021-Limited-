import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo routing to Verra Web Studio
    window.location.href = "mailto:demo@verrawebstudio.co.nz?subject=Lead from R J Crouch Plumbing Mockup";
  };

  return (
    <section id="contact" className="py-20 bg-sky-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Get In Touch</h2>
              <p className="text-zinc-600 text-lg">
                Need a plumber, gasfitter, or roofer in Christchurch? Contact Tom and the team today for a free quote or emergency repair.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-sky-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Call Us</p>
                  <a href="tel:0275355163" className="text-xl font-bold text-zinc-900 hover:text-sky-600 transition-colors">027 535 5163</a>
                  <p className="text-zinc-500">Tom Crouch - Certifying Plumber & Gasfitter</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-sky-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Email Us</p>
                  <a href="mailto:admin@rjcrouch.co.nz" className="text-xl font-bold text-zinc-900 hover:text-sky-600 transition-colors">admin@rjcrouch.co.nz</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-sky-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Visit Us</p>
                  <p className="text-xl font-bold text-zinc-900">8B Wordsworth Street</p>
                  <p className="text-zinc-500">Sydenham, Christchurch 8023</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-64 border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.956847119052!2d172.6329483766649!3d-43.54457797110752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a383f9e9999%3A0x9f9f9f9f9f9f9f9f!2s8B%20Wordsworth%20St%2C%20Sydenham%2C%20Christchurch%208023!5e0!3m2!1sen!2snz!4v1710650000000!5m2!1sen!2snz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="R J Crouch Plumbing Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-sky-100">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 text-center">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-zinc-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-zinc-700">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    placeholder="027 123 4567"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-zinc-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-zinc-700">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                >
                  <option>Plumbing</option>
                  <option>Gas Services</option>
                  <option>Roofing</option>
                  <option>Drainage</option>
                  <option>Emergency Repair</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-zinc-700">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required 
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-sky-700 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Enquiry <Send size={20} />
              </button>
              <p className="text-xs text-zinc-400 text-center mt-4">
                By submitting this form, you agree to being contacted regarding your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
