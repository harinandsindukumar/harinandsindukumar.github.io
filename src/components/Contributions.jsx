import { motion } from 'framer-motion';
import { Github, Calendar, Activity } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Contributions = () => {
  return (
    <section id="contributions" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            GitHub <span className="text-green-400">Contributions</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
            My coding journey and activity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.15)" className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <Github className="w-12 h-12 text-green-400" />
                <h3 className="text-2xl font-bold text-white">GitHub Profile</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Active contributor on GitHub with multiple projects focused on solving real-world problems.
              </p>
              <a
                href="https://github.com/harinandsindukumar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-6 py-3 rounded-lg border border-green-500/50 transition-all"
              >
                <Github className="w-5 h-5" />
                View Profile
              </a>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.15)" className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-12 h-12 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Active Since</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Consistently contributing to open source projects and building innovative solutions since starting my coding journey.
              </p>
              <div className="text-4xl font-bold text-blue-400">
                2024
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <SpotlightCard spotlightColor="rgba(168, 85, 247, 0.15)" className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <Activity className="w-12 h-12 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Focus Areas</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">AI & Machine Learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Web Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Healthcare Tech</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Road Safety</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Contribution Graph
            </h3>
            <p className="text-gray-400 mb-6">
              Check out my GitHub contributions graph for a visual representation of my coding activity
            </p>
            <div className="aspect-video w-full max-w-3xl mx-auto bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/30 flex items-center justify-center">
              <div className="text-center">
                <Github className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <p className="text-gray-400">
                  Visit my GitHub profile to see the full contribution graph
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contributions;
