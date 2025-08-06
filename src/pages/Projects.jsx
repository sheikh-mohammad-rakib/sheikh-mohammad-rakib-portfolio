// Projects Page
import { motion } from 'framer-motion';
import { useState } from 'react';
// Removed unused import
import ProjectCard from '../components/feature/ProjectCard';

const allProjects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with React, Tailwind CSS, and Framer Motion.',
    image: '/vite.svg',
    technologies: ['React', 'Tailwind', 'Framer Motion'],
    category: 'Web',
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce app with cart, checkout, and admin dashboard.',
    image: '/vite.svg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Web',
    link: '#',
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracker with real-time analytics.',
    image: '/vite.svg',
    technologies: ['React Native', 'Expo'],
    category: 'Mobile',
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'A fast, SEO-friendly blog platform with markdown support.',
    image: '/vite.svg',
    technologies: ['Next.js', 'Tailwind'],
    category: 'Web',
    link: '#',
  },
];

const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn btn-sm rounded-full px-4 ${filter === cat ? 'btn-primary glass-card' : 'btn-ghost'}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {filtered.map((project) => (
          <motion.div
            key={project.title}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <ProjectCard project={project} onClick={() => window.open(project.link, '_blank')} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
