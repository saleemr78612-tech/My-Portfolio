import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

export const Navbar = ({ activeSection, isScrolled, theme, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  // ✅ NO useContext - Using props directly

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 shadow-lg border-b border-slate-200/50 dark:border-slate-800/50' 
          : 'bg-white/80 dark:bg-slate-900/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-2xl">
              SR
            </div>
            <span className="hidden lg:block font-bold text-xl bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Saleem R
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`relative font-medium py-2 px-1 text-sm transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === link.id 
                    ? 'text-blue-600 dark:text-blue-400 !font-semibold' 
                    : 'text-slate-700 dark:text-slate-300'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.id)
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    layoutId="activeNavIndicator"
                    initial={false}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Side - Theme & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}  // ✅ Using prop
              className="p-2.5 lg:p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-sm transition-all duration-200 text-slate-700 dark:text-slate-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <FiSun className="w-5 h-5 lg:w-6 lg:h-6 block dark:hidden" />
              <FiMoon className="w-5 h-5 lg:w-6 lg:h-6 hidden dark:block" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2.5 lg:p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-sm transition-all duration-200 text-slate-700 dark:text-slate-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMenu className={`w-6 h-6 lg:w-7 lg:h-7 ${mobileOpen ? 'hidden' : 'block'}`} />
              <FiX className={`w-6 h-6 lg:w-7 lg:h-7 ${mobileOpen ? 'block' : 'hidden'}`} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  className={`w-full text-left py-4 px-4 rounded-2xl font-medium text-lg transition-all duration-200 ${
                    activeSection === link.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-800/50'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ paddingLeft: 20 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}