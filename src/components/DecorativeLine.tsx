import React from 'react'

interface DecorativeLineProps {
  isInView: boolean;
}

const DecorativeLine: React.FC<DecorativeLineProps> = ({ isInView }) => {
  return (
    <div className="relative flex items-center justify-center w-32 md:w-40 gap-4">
      {/* Left Line */}
      <div className={`h-0.5 bg-secondary-accent intro-animate-expandFromCenter ${isInView ? 'animate animation-delay-400' : ''}`} 
           style={{ width: '0', animationFillMode: 'forwards' }}></div>
      
      {/* Center Dot */}
      <div className={`w-2 h-2 bg-secondary-accent rounded-full intro-animate-fadeInUp ${isInView ? 'animate animation-delay-200' : ''}`}></div>
      
      {/* Right Line */}
      <div className={`h-0.5 bg-secondary-accent intro-animate-expandFromCenter ${isInView ? 'animate animation-delay-600' : ''}`} 
           style={{ width: '0', animationFillMode: 'forwards' }}></div>
    </div>
  )
}

export default DecorativeLine