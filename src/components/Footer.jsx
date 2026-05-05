import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer className="py-16 lg:py-24 bg-gradient-to-t from-slate-900/20 via-slate-900/10 to-transparent dark:from-slate-900/50 dark:via-slate-800/30 dark:to-transparent border-t border-slate-200/20 dark:border-slate-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo & Name */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-2xl">
              SR
            </div>
            <h1 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Saleem R
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer crafting pixel-perfect, scalable web applications with modern technologies.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: FiGithub, href: 'https://github.com/saleemr78612-tech', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/saleemr', label: 'LinkedIn' },
              { icon: FiTwitter, href: 'https://twitter.com/saleemr', label: 'Twitter' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 bg-white/20 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-xl hover:shadow-2xl hover:bg-white/40 dark:hover:bg-slate-700/60 border border-white/30 dark:border-slate-700/50 transition-all duration-500 hover:-translate-y-2 hover:rotate-12"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-7 h-7 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-slate-200/30 dark:border-slate-800/50">
            <p className="text-lg text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Saleem R. Crafted with ❤️ using React + Tailwind.
            </p>
            <p className="text-sm text-slate-400 mt-2">
              Designed & Developed by me 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}