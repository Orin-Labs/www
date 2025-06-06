import { motion } from 'framer-motion';

import { MeshGradient } from '@paper-design/shaders-react';

import {
  COLORS,
  DARK_COLORS,
} from '../constants/colors';

interface BackgroundGradientProps {
  speed: number;
}

export function BackgroundGradient({ speed }: BackgroundGradientProps) {
  return (
    <>
      <motion.div
        className="absolute inset-0 md:p-6 dark:hidden block"
        initial={{
          opacity: 0,
          filter: "blur(10px) saturate(0) brightness(0.5)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px) saturate(1) brightness(0.85)",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:rounded-xl w-full h-full overflow-hidden">
          <MeshGradient
            color1={COLORS[0]}
            color2={COLORS[1]}
            color3={COLORS[2]}
            speed={speed}
            seed={0}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 md:p-6 hidden dark:block"
        initial={{
          opacity: 0,
          filter: "blur(10px) saturate(0) brightness(0.5)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px) saturate(1) brightness(0.8)",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:rounded-xl w-full h-full overflow-hidden">
          <MeshGradient
            color1={DARK_COLORS[0]}
            color2={DARK_COLORS[1]}
            color3={DARK_COLORS[2]}
            seed={1}
            speed={speed}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
