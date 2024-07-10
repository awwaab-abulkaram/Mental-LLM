import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { id: 1, title: 'Title 1', subtitle: 'Subtitle 1' },
  { id: 2, title: 'Title 2', subtitle: 'Subtitle 2' },
  { id: 3, title: 'Title 3', subtitle: 'Subtitle 3' },
];

const MoreInfo = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {items.map(item => (
        <motion.div 
          key={item.id} 
          layoutId={item.id.toString()} 
          onClick={() => setSelectedId(item.id)} 
          style={{ cursor: 'pointer', padding: '20px', margin: '10px', border: '1px solid black' }}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            layoutId={selectedId.toString()} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            style={{ position: 'fixed', top: '20%', left: '50%', transform: 'translateX(-50%)', background: 'white', padding: '20px', border: '1px solid black' }}
          >
            <motion.h5>{items.find(item => item.id === selectedId).subtitle}</motion.h5>
            <motion.h2>{items.find(item => item.id === selectedId).title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MoreInfo;
