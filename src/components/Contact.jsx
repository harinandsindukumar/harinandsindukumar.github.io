import { motion } from 'framer-motion';
import { Mail, Github, MapPin, Send } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Get In <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
            Let's collaborate and build something amazing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.15)">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
              <a 
                href="mailto:harinandsindukumarkg@gmail.com"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                harinandsindukumarkg@gmail.com
              </a>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.15)">
              <div className="flex items-center gap-4 mb-4">
                <Github className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">GitHub</h3>
              </div>
              <a 
                href="https://github.com/harinandsindukumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                github.com/harinandsindukumar
              </a>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(168, 85, 247, 0.15)">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Location</h3>
              </div>
              <p className="text-gray-300">
                Idukki, Kerala, India
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.1)" className="h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full bg-black/50 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full bg-black/50 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full bg-black/50 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
