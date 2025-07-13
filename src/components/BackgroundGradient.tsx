import { motion } from 'framer-motion';

import { MeshGradient } from '@paper-design/shaders-react';

import { COLORS } from '../constants/colors';

interface BackgroundGradientProps {
  speed: number;
}

const gradientStyle = {
  width: "100%",
  height: "100%",
};

const animationConfig = {
  initial: {
    opacity: 0,
    filter: "blur(5px) saturate(0.5) brightness(0.7)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px) saturate(1) brightness(0.85)",
  },
  transition: { duration: 0.8, delay: 0.2 },
};

export function BackgroundGradient({ speed }: BackgroundGradientProps) {
  return (
    <motion.div className="absolute inset-0 block z-0" {...animationConfig}>
      <div className="w-full h-full overflow-hidden">
        <MeshGradient
          color1={COLORS[0]}
          color2={COLORS[1]}
          color3={COLORS[2]}
          speed={speed}
          seed={1000}
          style={gradientStyle}
        />
      </div>
    </motion.div>
  );
}
