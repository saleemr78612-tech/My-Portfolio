import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Stripe payments, admin dashboard, and real-time inventory.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&fit=crop',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/saleemr78612-tech/ecommerce',
    live: 'https://ecommerce.saleemr.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Modern task manager with drag & drop, real-time collaboration, and PWA support.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop',
    category: 'frontend',
    technologies: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/saleemr78612-tech/task-manager',
    live: 'https://tasks.saleemr.com'
  },
  {
    id: 3,
    title: 'REST API with Auth',
    description: 'Secure REST API with JWT authentication, role-based access, and MongoDB integration.',
    image: 'https://images.unsplash.com/photo-1613564813171-802413a9db7a?w=800&fit=crop',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/saleemr78612-tech/api-auth',
    live: 'https://api.saleemr.com/docs'
  }
]

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  // ✅ NO useInView
  const filters = ['all', 'frontend', 'backend', 'fullstack']

  const handleFilter = (filter) => {
    setActiveFilter(filter)
    if (filter === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(p => p.category === filter))
    }
  }

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-slate-50/70 to-white dark:from-slate-900/50 dark:to-slate-900">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}  // ✅ Fixed
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mx-auto shadow-lg"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}  // ✅ Fixed
          transition={{ duration: 0.6 }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg border-2 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-pink-500/50 border-pink-300 dark:border-pink-700/50 scale-105'
                  : 'bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-200/50 dark:border-slate-700/50 hover:scale-105 hover:shadow-xl'
              }`}
              onClick={() => handleFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {filter === 'all' ? 'All Projects' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}  // ✅ Fixed
          transition={{ staggerChildren: 0.1 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group project-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}  // ✅ Fixed
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 right-6 space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="w-5 h-5 text-slate-900 dark:text-white" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className="w-5 h-5 text-slate-900 dark:text-white" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 lg:mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-pink-700 dark:text-pink-300 text-sm font-semibold rounded-2xl border border-pink-200/50 dark:border-pink-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                    <motion.button
                      className="w-full group/btn flex items-center justify-center text-left py-4 px-6 rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300"
                      whileHover={{ paddingLeft: 24 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-semibold text-slate-900 dark:text-white mr-3 group-hover/btn:text-pink-600 dark:group-hover/btn:text-pink-400">
                        View Project Details
                      </span>
                      <FiExternalLink className="w-5 h-5 text-slate-500 group-hover/btn:text-pink-600 dark:group-hover/btn:text-pink-400 transition-colors" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}