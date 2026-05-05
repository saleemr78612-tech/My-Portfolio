export const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="particles-container w-full h-full">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="particle absolute w-[2px] h-[2px] lg:w-[4px] lg:h-[4px] bg-gradient-to-r from-blue-400/30 to-purple-400/30 dark:from-blue-500/40 dark:to-purple-500/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}