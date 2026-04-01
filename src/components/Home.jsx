import { motion } from 'framer-motion';
import { Github, Mail, MapPin, GraduationCap } from 'lucide-react';
import DecryptedText from './DecryptedText';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight flex items-center gap-2 md:gap-4 flex-wrap justify-center">
              <DecryptedText 
                text="Harinand"
                speed={50}
                maxIterations={10}
                sequential={true}
                revealDirection="start"
                animateOn="hover"
                className="text-green-400 font-bold inline-block"
                encryptedClassName="text-gray-600"
                parentClassName="inline-block"
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
              />
              <span className="text-gray-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">|</span>
              <DecryptedText 
                text="Sindukumar"
                speed={50}
                maxIterations={10}
                sequential={true}
                revealDirection="start"
                animateOn="hover"
                className="text-blue-400 font-bold inline-block"
                encryptedClassName="text-gray-600"
                parentClassName="inline-block"
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
              />
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              14-year-old innovator from Jawahar Navodaya Vidyalaya, Idukki
            </p>
            
            <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
              Passionate about combining technology to create a better world through innovative solutions and creative problem-solving.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="https://github.com/harinandsindukumar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-6 py-3 rounded-lg border border-green-500/50 transition-all"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
              
              <motion.a
                href="mailto:harinandsindukumarkg@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-6 py-3 rounded-lg border border-blue-500/50 transition-all"
              >
                <Mail className="w-5 h-5" />
                Email
              </motion.a>

              <motion.a
                href="https://x.com/Harinand_404"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 px-6 py-3 rounded-lg border border-purple-500/50 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X/Twitter
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-green-400" />
                <span>Jawahar Navodaya Vidyalaya</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Idukki, Kerala</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-green-500/50 shadow-2xl shadow-green-500/20">
                <img 
                  src="/myphoto.png" 
                  alt="Harinand Sindukumar"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
