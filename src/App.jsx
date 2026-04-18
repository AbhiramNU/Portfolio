import React from 'react';
import VSCodeLayout from './layout/VSCodeLayout';
import { TabProvider } from './hooks/useTabs';
import { useCursor } from './hooks/useCursor';
import { motion } from 'framer-motion';

function App() {
  const { x, y, isHovering, isVisible } = useCursor();

  return (
    <TabProvider>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border-[1.5px] border-vs-accent pointer-events-none z-[9999] rounded-sm hidden md:flex items-center justify-center mix-blend-difference"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
          borderColor: isHovering ? '#ffffff' : '#007acc',
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 122, 204, 0.05)',
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 20 },
          rotate: { type: 'spring', stiffness: 200, damping: 15 },
          borderColor: { duration: 0.15 },
        }}
      >
        <div className={`w-1 h-1 rounded-full ${isHovering ? 'bg-white' : 'bg-[#007acc]'} transition-colors duration-200`} />
      </motion.div>
      <VSCodeLayout />
    </TabProvider>
  );
}

export default App;
