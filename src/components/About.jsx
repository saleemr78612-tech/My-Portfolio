import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'

export const About = () => {
  // ✅ NO useInView needed - Direct animations
  const skills = [
    { name: 'React.js', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'JavaScript (ES6+)', level: 92 },
    { name: 'Git & GitHub', level: 88 }
  ]

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-900">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header - Fixed */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}  // ✅ Direct true
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto shadow-lg"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image - Fixed */}
          <motion.div 
            className="relative mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}  // ✅ Direct true
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-xl border-4 border-white/30 dark:border-white/20 shadow-2xl mx-auto group-hover:scale-105 transition-all duration-700 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-inner"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl lg:text-5xl font-black text-white shadow-2xl border-8 border-white/50">
                    SR
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content - Fixed */}
          <motion.div 
            className="space-y-8 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}  // ✅ Direct true
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <p className="text-xl lg:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed">
                Passionate <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Full Stack Developer</span> 
                with 2+ years of experience crafting scalable web applications using modern technologies.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I specialize in the <span className="font-semibold text-blue-600 dark:text-blue-400">MERN stack</span> and love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div 
                className="group p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <FaGraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Education</h4>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold">B.Tech Computer Science</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="group p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <FaBriefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Experience</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">2+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-3xl shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-3">Download CV</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L7.5 18M7.5 18l1-1m-6 1V7a4 4 0 014-4h8a4 4 0 014 4v8m-9 0v1a3 3 0 003 3h1" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}