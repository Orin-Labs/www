import { motion } from 'framer-motion';

import { MeshGradient } from '@paper-design/shaders-react';

import {
  COLORS,
  DARK_COLORS,
} from '../constants/colors';

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
    filter: "blur(10px) saturate(0) brightness(0.5)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px) saturate(1) brightness(0.85)",
  },
  transition: { duration: 0.5 },
};

const darkAnimationConfig = {
  ...animationConfig,
  animate: {
    ...animationConfig.animate,
    filter: "blur(0px) saturate(1) brightness(0.8)",
  },
};

export function BackgroundGradient({ speed }: BackgroundGradientProps) {
  return (
    <>
      <motion.div
        className="absolute inset-0 dark:hidden block z-0"
        {...animationConfig}
      >
        <div className="w-full h-full overflow-hidden">
          <MeshGradient
            color1={COLORS[0]}
            color2={COLORS[1]}
            color3={COLORS[2]}
            speed={speed}
            seed={0}
            style={gradientStyle}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute  inset-0 hidden dark:block z-0"
        {...darkAnimationConfig}
      >
        <div className="w-full h-full overflow-hidden">
          <MeshGradient
            color1={DARK_COLORS[0]}
            color2={DARK_COLORS[1]}
            color3={DARK_COLORS[2]}
            seed={1}
            speed={speed}
            style={gradientStyle}
          />
        </div>
      </motion.div>
    </>
  );
}
