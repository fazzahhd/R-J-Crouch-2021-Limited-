import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black tracking-tighter">R J CROUCH</h2>
              <p className="text-sky-400 font-bold text-sm uppercase tracking-widest">Plumbing & Gas</p>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Your trusted local plumbers, gasfitters, and roofers in Christchurch. Serving the Canterbury region with excellence for over 40 years.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/RJCrouchLtd/" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-3 rounded-xl hover:bg-sky-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-zinc-800 p-3 rounded-xl hover:bg-sky-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:admin@rjcrouch.co.nz" className="bg-zinc-800 p-3 rounded-xl hover:bg-sky-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="https://builderscrack.co.nz/tradies/4hdxw53w/r-j-crouch-2021-limited" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Builderscrack Profile</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>Residential Plumbing</li>
              <li>Gasfitting & Heating</li>
              <li>Roofing & Spouting</li>
              <li>Drainage & CCTV</li>
              <li>Emergency Repairs</li>
              <li>New Home Installs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-sky-400 mt-1" />
                <span>027 535 5163</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-sky-400 mt-1" />
                <span>admin@rjcrouch.co.nz</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sky-400 mt-1" />
                <span>8B Wordsworth Street,<br />Sydenham, Christchurch 8023</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
          <p>© 2026 R J Crouch 2021 Limited. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built by</span>
            <a 
              href="https://www.verrawebstudio.co.nz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 font-bold transition-colors"
            >
              Verra Web Studio 2026
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
