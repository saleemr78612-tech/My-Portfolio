import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa'

export const Skills = () => {
  // ✅ NO useInView - Direct animations
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaReact,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 95, icon: FaReact },
        { name: 'Tailwind CSS', level: 95, icon: FaCss3Alt },
        { name: 'JavaScript', level: 92, icon: FaJsSquare }
      ]
    },
    {
      title: 'Backend',
      icon: FaNodeJs,
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Node.js', level: 90, icon: FaNodeJs },
        { name: 'Express.js', level: 88, icon: FaNodeJs },
        { name: 'MongoDB', level: 85, icon: FaDatabase }
      ]
    },
    {
      title: 'Tools',
      icon: FaGitAlt,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 88, icon: FaGitAlt },
        { name: 'VS Code', level: 95, icon: FaCss3Alt },
        { name: 'Figma', level: 80, icon: FaCss3Alt }
      ]
    }
  ]

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}  // ✅ Fixed
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Skills & Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto shadow-lg"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                className="skill-card p-8 lg:p-10 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}  // ✅ Fixed
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-8 group-hover:translate-x-2 transition-transform duration-300">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-all duration-300 mr-6 flex-shrink-0`}>
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white">{category.title}</h3>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        className="space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}  // ✅ Fixed
                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <SkillIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                            </div>
                            <span className="font-semibold text-lg text-slate-900 dark:text-white">{skill.name}</span>
                          </div>
                          <span className="font-mono text-sm font-bold text-slate-500 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}  // ✅ Fixed
                            transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: 'easeOut' }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}