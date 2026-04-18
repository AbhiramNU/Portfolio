import React from 'react';
import VSCodeLayout from './layout/VSCodeLayout';
import { TabProvider } from './hooks/useTabs';
import { useCursor } from './hooks/useCursor';
import { motion } from 'framer-motion';

function App() {
  const { position, isHovering } = useCursor();

  return (
    <TabProvider>
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 border-2 border-vs-accent pointer-events-none z-[9999] rounded-sm hidden md:flex items-center justify-center shadow-[0_0_10px_rgba(0,122,204,0.5)] bg-vs-accent/20"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#ffffff' : '#007acc',
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      <VSCodeLayout />
    </TabProvider>
  );
}

export default App;
