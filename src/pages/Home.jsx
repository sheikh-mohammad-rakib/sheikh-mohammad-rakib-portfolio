
// Home/Landing Page
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] gap-10 px-4">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col gap-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-primary">Sheikh Mohammad Rakib</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
          A passionate <span className="font-semibold">Full Stack Developer</span> crafting modern web experiences with React, Tailwind CSS, and more. Let's build something amazing together!
        </p>
        <div className="flex gap-4 mt-2">
          <Button as="a" href="/projects" className="btn-primary">View Projects</Button>
          <Button as="a" href="/contact" className="btn-outline">Contact Me</Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/vite.svg"
          alt="Rakib Avatar"
          className="w-64 h-64 rounded-full shadow-lg object-cover border-4 border-primary bg-white/80"
        />
      </motion.div>
    </section>
  );
}
