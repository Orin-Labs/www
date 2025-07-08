import { HTMLProps } from 'react';

import { motion } from 'framer-motion';

import { cn } from '../utils';
import { BackgroundGradient } from './BackgroundGradient';
import {
  Message,
  Phone,
} from './Phone';

interface SeamlessCoordinationProps extends HTMLProps<HTMLElement> {
  speed: number;
}

const coordinationMessages: Message[] = [
  {
    id: "coord1",
    text: "Hi Sarah! Just wanted to check in on how Charlie's math session went yesterday. How did he feel about the algebra concepts we covered?",
    isFromUser: false,
    timestamp: new Date(),
  },
  {
    id: "coord2",
    text: "it went really well! he said you explained it much better than his teacher. he's actually excited for the next session",
    isFromUser: true,
    timestamp: new Date(),
  },
  {
    id: "coord3",
    text: "That's fantastic! I'm so glad he's feeling more confident. I noticed he struggled with quadratic equations, so I've prepared some extra practice problems for our next session.",
    isFromUser: false,
    timestamp: new Date(),
  },
  {
    id: "coord3b",
    text: "When works best for you this week?",
    isFromUser: false,
    timestamp: new Date(),
  },
  {
    id: "coord4",
    text: "can you do thursday at 4 again?",
    isFromUser: true,
    timestamp: new Date(),
  },
  {
    id: "coord5",
    text: "Perfect! I've got Charlie booked for Thursday at 4pm. I'll send you both a reminder 30 minutes before, and we'll focus on those quadratic equations. See you then! 📚",
    isFromUser: false,
    timestamp: new Date(),
  },
];

const features = [
  "Real-time progress updates",
  "Flexible scheduling coordination",
  "Quick questions and clarifications",
];

export function SeamlessCoordination({
  speed,
  className,
  ...props
}: SeamlessCoordinationProps) {
  return (
    <section
      className={cn(
        "w-full bg-gray-50 border-t border-gray-100 md:h-screen min-h-[500px] py-8 md:p-16",
        className
      )}
      {...props}
    >
      <div className="grid grid-cols-1 h-full md:grid-cols-2 items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 space-y-6 flex flex-col justify-center p-8 md:p-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Seamless Coordination
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Stay connected with Orin through SMS or email.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Phone Component */}
        <motion.div className="flex-1 h-full flex justify-center relative rounded-lg overflow-hidden py-12 px-4">
          <div className="hidden md:block">
            <BackgroundGradient speed={speed} />
          </div>
          <div
            className={cn(
              "absolute inset-0 rounded-lg pointer-events-none z-10 hidden md:block",
              "shadow-[inset_2px_2px_8px_#00000044,_inset_-2px_-2px_8px_#ffffffbb]"
            )}
          />
          <Phone messages={coordinationMessages} />
        </motion.div>
      </div>
    </section>
  );
}
