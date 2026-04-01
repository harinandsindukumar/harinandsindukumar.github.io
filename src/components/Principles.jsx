import { motion } from 'framer-motion';
import { Lightbulb, Target, Heart, Zap } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Principles = () => {
  const principles = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Creating novel solutions to real-world problems through creative thinking and technology.',
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      title: 'Purpose',
      description: 'Every project serves a meaningful goal - to make the world a better place.',
      color: 'text-red-400'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'Understanding user needs and building solutions that truly help people.',
      color: 'text-pink-400'
    },
    {
      icon: Zap,
      title: 'Impact',
      description: 'Focusing on projects that create positive change in society.',
      color: 'text-blue-400'
    }
  ];

  return (
    <section id="principles" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            My <span className="text-green-400">Principles</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
            The core values that guide my work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.15)" className="h-full">
                <div className={`${principle.color} mb-4`}>
                  <principle.icon className="w-12 h-12" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${principle.color}`}>
                  {principle.title}
                </h3>
                <p className="text-gray-400">
                  {principle.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
