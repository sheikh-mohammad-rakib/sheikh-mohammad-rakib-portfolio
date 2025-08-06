// About Page
// ...existing code...
import { motion } from 'framer-motion';
import SkillBadge from '../components/feature/SkillBadge';

const skills = [
  { skill: 'JavaScript', level: 'Expert' },
  { skill: 'React', level: 'Advanced' },
  { skill: 'Node.js', level: 'Advanced' },
  { skill: 'Tailwind CSS', level: 'Advanced' },
  { skill: 'TypeScript', level: 'Intermediate' },
  { skill: 'Framer Motion', level: 'Intermediate' },
];

const experience = [
  {
    year: '2024 - Present',
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators',
    description: 'Leading UI/UX and frontend architecture for SaaS products.'
  },
  {
    year: '2022 - 2024',
    title: 'Full Stack Developer',
    company: 'Web Solutions Ltd.',
    description: 'Built scalable web apps and APIs using React and Node.js.'
  },
  {
    year: '2020 - 2022',
    title: 'Frontend Developer',
    company: 'Creative Studio',
    description: 'Developed interactive websites and landing pages.'
  },
];

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I'm Rakib, a passionate developer with a knack for building beautiful, performant web applications. I love working with modern JavaScript frameworks and always strive to deliver pixel-perfect, user-friendly experiences.
      </motion.p>
      <motion.div
        className="mb-10 flex flex-wrap justify-center gap-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills.map((s) => (
          <SkillBadge key={s.skill} skill={s.skill} level={s.level} />
        ))}
      </motion.div>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Experience Timeline</h3>
        <ol className="relative border-l-2 border-primary/30 ml-4">
          {experience.map((exp, idx) => (
            <li key={idx} className="mb-8 ml-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-5 top-2 border-2 border-white"></div>
              <div className="glass-card p-4 rounded-xl">
                <span className="text-primary font-bold text-sm">{exp.year}</span>
                <h4 className="font-semibold text-lg">{exp.title} <span className="text-gray-500 dark:text-gray-400 font-normal">@ {exp.company}</span></h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
