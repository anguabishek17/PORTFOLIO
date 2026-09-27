import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'project' | 'hidden'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports touch
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');

      if (projectCard) {
        setCursorVariant('project');
        setCursorText('VIEW →');
      } else if (interactiveEl) {
        setCursorVariant('link');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant('hidden');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-40 flex items-center justify-center rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: cursorVariant === 'project' ? 76 : cursorVariant === 'link' ? 36 : 10,
        height: cursorVariant === 'project' ? 76 : cursorVariant === 'link' ? 36 : 10,
        backgroundColor: cursorVariant === 'default' ? '#174C3C' : cursorVariant === 'project' ? '#174C3C' : 'transparent',
        border: cursorVariant === 'link' ? '1.5px solid #174C3C' : 'none',
        opacity: cursorVariant === 'hidden' ? 0 : 0.9,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.4 }}
    >
      {cursorVariant === 'project' && (
        <span className="text-[11px] font-sans font-bold tracking-wider text-white select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};
