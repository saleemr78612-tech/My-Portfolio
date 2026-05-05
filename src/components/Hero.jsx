// Hero.jsx - Fixed for src/assets/profile.png

import { motion } from 'framer-motion'
import ProfileImage from '../assets/profile.png'  // ✅ Fixed import

export const Hero = () => {
  // ... same useEffect code (text typing)

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* ... same background elements */}

      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content - same as before */}
        <motion.div /* ... same content ... */>
          {/* Hero content same */}
        </motion.div>

        {/* Right - Profile Image - FIXED */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <motion.img
              src={ProfileImage}  // ✅ Imported image
              alt="Saleem - Full Stack Developer"
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000 rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Glassmorphism Ring - same */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-3xl backdrop-blur-sm border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Available Badge - same */}
            <motion.div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl border-4 border-white/50">
              Available
              <div className="w-3 h-3 bg-green-400 rounded-full ml-2 inline-block animate-ping" />
            </motion.div>

            {/* Shine Effect - same */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-40 group-hover:translate-x-[500px] transition-transform duration-1000 opacity-75" />
          </div>

          {/* Tech Stack Badges - same */}
          <motion.div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
            {['React', 'Next.js', 'Tailwind', 'Node.js', 'Framer'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold rounded-full text-sm shadow-md hover:shadow-lg cursor-default transition-all duration-200 hover:scale-105"
                whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}