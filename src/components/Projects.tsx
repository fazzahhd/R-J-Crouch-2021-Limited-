import React from 'react';
import { PlaceholderImage } from './PlaceholderImage';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    { title: "Residential Renovation", category: "Plumbing & Gas", location: "Fendalton" },
    { title: "Commercial Roof Repair", category: "Roofing", location: "Sydenham" },
    { title: "New Build Installation", category: "Full Service", location: "Rolleston" },
    { title: "Industrial Maintenance", category: "Plumbing", location: "Hornby" },
    { title: "Kitchen Gas Upgrade", category: "Gasfitting", location: "Merivale" },
    { title: "Drainage Solution", category: "Drain Laying", location: "Cashmere" },
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Our Past Projects</h2>
            <p className="text-zinc-600 max-w-xl">
              Take a look at some of our recent work across Christchurch and the Canterbury region.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="px-6 py-3 bg-white border border-zinc-200 rounded-full font-bold text-zinc-900 shadow-sm">
              All Work
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-zinc-100">
              <div className="relative overflow-hidden">
                <PlaceholderImage aspectRatio="aspect-video" text={`Insert ${project.title} Photo Here`} className="group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sky-600 uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{project.title}</h3>
                <p className="text-zinc-500 text-sm flex items-center gap-1">
                  <ExternalLink size={14} /> {project.location}, Christchurch
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
