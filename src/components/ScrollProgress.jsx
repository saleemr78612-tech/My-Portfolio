import { motion, useScroll } from 'framer-motion'

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[9999] origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
      style={{ scaleX: scrollYProgress }}
    />
  )
}