import { motion } from 'framer-motion';
import { Code, Github, Mail, User, Award, MessageSquare, Zap } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'principles', label: 'Principles', icon: Award },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'technologies', label: 'Technologies', icon: Zap },
    { id: 'contributions', label: 'Contributions', icon: Github },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="text-green-400 font-bold text-xl"
            whileHover={{ scale: 1.05 }}
          >
            HS
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-green-500/20 text-green-400'
                    : 'text-gray-300 hover:bg-green-500/10 hover:text-green-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="md:hidden">
            <select
              onChange={(e) => scrollToSection(e.target.value)}
              className="bg-black/50 border border-green-500/30 text-green-400 rounded-lg px-3 py-2"
              value={activeSection}
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
