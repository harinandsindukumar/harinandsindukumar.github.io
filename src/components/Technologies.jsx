import { motion } from 'framer-motion';
import { LogoLoop } from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiJavascript, SiGit, SiGithub } from 'react-icons/si';

const Technologies = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  ];

  return (
    <section className="py-20 relative bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Technologies I <span className="text-green-400">Use</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
            Tools and technologies that power my projects
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-32 md:h-40"
          >
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={60}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technologies I use"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 hover:border-green-500/50 transition-all"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Frontend Development</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <SiReact className="w-8 h-8 text-blue-400" />
                <div>
                  <h4 className="text-white font-semibold">React</h4>
                  <p className="text-gray-400 text-sm">Building interactive user interfaces</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <SiNextdotjs className="w-8 h-8 text-white" />
                <div>
                  <h4 className="text-white font-semibold">Next.js</h4>
                  <p className="text-gray-400 text-sm">Full-stack React framework</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <SiTailwindcss className="w-8 h-8 text-cyan-400" />
                <div>
                  <h4 className="text-white font-semibold">Tailwind CSS</h4>
                  <p className="text-gray-400 text-sm">Modern utility-first styling</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/50 transition-all"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Backend & Tools</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <SiPython className="w-8 h-8 text-yellow-400" />
                <div>
                  <h4 className="text-white font-semibold">Python</h4>
                  <p className="text-gray-400 text-sm">AI/ML and backend development</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <SiJavascript className="w-8 h-8 text-yellow-300" />
                <div>
                  <h4 className="text-white font-semibold">JavaScript</h4>
                  <p className="text-gray-400 text-sm">Dynamic web functionality</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <SiGit className="w-8 h-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">Git & GitHub</h4>
                  <p className="text-gray-400 text-sm">Version control and collaboration</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
