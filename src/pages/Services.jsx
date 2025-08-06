// Services Page
// ...existing code...
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web apps using React, Tailwind CSS, and best practices.',
    icon: '💻',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive, user-centered design with a focus on accessibility and seamless experience.',
    icon: '🎨',
  },
  {
    title: 'Performance Optimization',
    description: 'Speed up your site with code splitting, lazy loading, and advanced optimization techniques.',
    icon: '⚡',
  },
  {
    title: 'API Integration',
    description: 'Robust integration with REST, GraphQL, and third-party APIs for dynamic data-driven apps.',
    icon: '🔗',
  },
  {
    title: 'Consulting',
    description: 'Expert advice on architecture, best practices, and scaling your frontend projects.',
    icon: '🧑‍💼',
  },
];

export default function Services() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        I offer a range of services to help you build, launch, and grow your digital presence. Whether you need a stunning website, a high-performance web app, or expert consulting, I can help you achieve your goals.
      </motion.p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Card className="flex flex-col items-center text-center gap-4 h-full">
              <span className="text-5xl mb-2">{service.icon}</span>
              <h3 className="font-semibold text-xl mb-1">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-300">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
