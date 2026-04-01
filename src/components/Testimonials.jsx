import { motion } from 'framer-motion';
import { MessageSquare, Star } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import Masonry from './Masonry';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Teacher',
      role: 'Jawahar Navodaya Vidyalaya',
      content: 'Harinand shows exceptional problem-solving skills and creativity. His ability to combine technology with real-world needs is remarkable for someone his age.',
      rating: 5
    },
    {
      name: 'Mentor',
      role: 'Tech Innovation Program',
      content: 'His dedication to building solutions that help people is inspiring. Harinand has a bright future ahead in technology.',
      rating: 5
    },
    {
      name: 'Classmate',
      role: 'Student',
      content: 'Working with Harinand on projects is amazing. He always comes up with innovative ideas and helps everyone understand complex concepts.',
      rating: 5
    }
  ];

  const masonryItems = [
    {
      id: "1",
      img: "/myphoto.png",
      url: "https://github.com/harinandsindukumar",
      height: 500,
    },
    {
      id: "2",
      img: "/download (8).jpg",
      url: "https://github.com/harinandsindukumar/explain-this-code",
      height: 350,
    },
    {
      id: "3",
      img: "/download (9).jpg",
      url: "https://github.com/harinandsindukumar/RoadRakshak2.0",
      height: 450,
    },
    {
      id: "4",
      img: "/proud-you-did-great-portrait-happy-impressed-attractive-supportive-armenian-girl-wearing-orange-tshirt-show-thumbsup-approval-agree-gesture-liking-awesome-prom-outfit-friend-bought-smiling.jpg",
      url: "https://github.com/harinandsindukumar/Encryptz.xyz",
      height: 400,
    },
    {
      id: "5",
      img: "/myphoto.png",
      url: "https://github.com/harinandsindukumar/pivalue",
      height: 550,
    },
    {
      id: "6",
      img: "/download (8).jpg",
      url: "https://github.com/harinandsindukumar/pivalue.world",
      height: 380,
    },
    {
      id: "7",
      img: "/download (9).jpg",
      url: "https://github.com/harinandsindukumar/vedicare",
      height: 420,
    },
    {
      id: "8",
      img: "/proud-you-did-great-portrait-happy-impressed-attractive-supportive-armenian-girl-wearing-orange-tshirt-show-thumbsup-approval-agree-gesture-liking-awesome-prom-outfit-friend-bought-smiling.jpg",
      url: "https://blime-online.vercel.app/",
      height: 480,
    },
    {
      id: "9",
      img: "/myphoto.png",
      url: "https://x.com/Harinand_404",
      height: 360,
    },
  ];

  return (
    <section id="testimonials" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-green-400">Testimonials</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
            What people say about my work
          </p>
        </motion.div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.15)" className="h-full">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-green-500/20 pt-4">
                  <h4 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Masonry Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-white">
            Gallery
          </h3>
          <div className="h-[500px] sm:h-[600px] md:h-[500px] lg:h-[600px] w-full">
            <Masonry
              items={masonryItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.95}
              blurToFocus
              colorShiftOnHover={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
