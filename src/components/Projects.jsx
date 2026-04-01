import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Heart, Users, Code } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Projects = () => {
  const projects = [
    {
      title: 'Explain This Code',
      description: 'AI-powered tool to explain complex code in simple terms',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/harinandsindukumar/explain-this-code',
      link: '#'
    },
    {
      title: 'Road Rakshak 2.0',
      description: 'Advanced road safety solution for accident prevention and emergency response',
      icon: Heart,
      color: 'from-red-500 to-orange-500',
      github: 'https://github.com/harinandsindukumar/RoadRakshak2.0',
      link: '#'
    },
    {
      title: 'Encryptz.xyz',
      description: 'Secure encryption tool for data protection',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      github: 'https://github.com/harinandsindukumar/Encryptz.xyz',
      link: '#'
    },
    {
      title: 'PiValue',
      description: 'A repo with collaborative way to calculate the value of pi',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/harinandsindukumar/pivalue',
      link: '#'
    },
    {
      title: 'PiValue World',
      description: 'Global collaborative platform for Pi calculation',
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      github: 'https://github.com/harinandsindukumar/pivalue.world',
      link: '#'
    },
    {
      title: 'Vedicare',
      description: 'Smart health device specifically designed for elderly people',
      icon: Heart,
      color: 'from-green-500 to-emerald-500',
      github: 'https://github.com/harinandsindukumar/vedicare',
      link: 'https://vedicare-smart-watch-prototype.base44.app/'
    },
    {
      title: 'Blime',
      description: 'Experimental platform for students to express ideas and emotions',
      icon: Users,
      color: 'from-yellow-500 to-amber-500',
      github: 'https://github.com/harinandsindukumar/blime',
      link: 'https://blime-online.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            My <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
            Building solutions that matter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.1)" className="overflow-hidden h-full">
                <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-6">
                  <div className={`${project.color.split(' ')[0].replace('from-', 'text-')} mb-4`}>
                    <project.icon className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                    
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Visit Project
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
