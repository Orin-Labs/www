import {
  HTMLProps,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  motion,
  TargetAndTransition,
  Transition,
} from 'framer-motion';
import {
  ArrowRightIcon,
  Pause,
  Play,
} from 'lucide-react';

import { Button } from '../Button';
import { cn } from '../utils';
import { BackgroundGradient } from './BackgroundGradient';
import FloatingNav from './FloatingNav';
import Nav from './Nav';
import { RotatingText } from './RotatingText';

const delayed = (
  delay: number
): {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
} => ({
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay,
    duration: 0.3,
    ease: "easeOut",
  },
});

interface HeroProps extends HTMLProps<HTMLElement> {
  headline: string;
  subheadline: string;
  speed: number;
}

export function Hero({
  headline,
  subheadline,
  speed,
  className,
  ...props
}: HeroProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={cn(
        "w-screen h-screen flex flex-col md:p-6 !pt-0 text-white",
        className
      )}
      {...props}
    >
      {/* Floating Navigation */}
      <FloatingNav isVisible={scrollY > 150} />

      <Nav />

      <audio ref={audioRef} src="/intro.wav" />
      <div className="w-full grow md:rounded-lg overflow-hidden relative flex flex-col justify-center items-center gap-4 px-2 md:px-4">
        <h1 className="text-6xl md:text-7xl font-bold z-10 text-center">
          {headline === "ROTATING_HEADLINE" ? <RotatingText /> : headline}
        </h1>
        <motion.h3
          {...delayed(0.1)}
          className="text-3xl md:text-4xl mb-12 z-10 text-center"
        >
          {subheadline}
        </motion.h3>

        <motion.button
          className={cn(
            "w-32 h-32 rounded-full flex justify-center items-center z-10 bg-transparent transition-shadow duration-50",
            `shadow-[4px_4px_8px_#00000044,_-4px_-4px_8px_#ffffff99] active:shadow-[2px_2px_1px_#00000022,_-2px_-2px_1px_#ffffff44]`,
            `dark:shadow-[4px_4px_4px_#00000044,_-4px_-4px_4px_#ffffff22] dark:active:shadow-[2px_2px_1px_#00000022,_-2px_-2px_1px_#ffffff22]`
          )}
          {...delayed(0.2)}
          onClick={() => {
            if (isPlaying) {
              audioRef.current?.pause();
            } else {
              audioRef.current?.play();
            }
          }}
        >
          {isPlaying ? (
            <Pause className="w-12 h-12 text-white" strokeWidth={1.5} />
          ) : (
            <Play className="w-12 h-12 text-white" strokeWidth={1.5} />
          )}
        </motion.button>
        <motion.small {...delayed(0.3)} className="text-white z-10">
          Hear introduction
        </motion.small>

        <motion.div
          className="flex flex-col gap-2 items-center z-10 mt-8"
          {...delayed(0.4)}
        >
          <Button
            shadow="neu"
            bg="transparent"
            className="gap-2"
            onClick={() => {
              document.getElementById("cta-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Free 2 week trial
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
          <small className="text-white">No credit card required</small>
        </motion.div>

        <BackgroundGradient speed={speed} />
        <div
          className={cn(
            "absolute inset-0 rounded-lg pointer-events-none z-10",
            "shadow-[inset_2px_2px_8px_#00000044,_inset_-2px_-2px_8px_#ffffffbb] dark:shadow-none"
          )}
        />
      </div>
    </section>
  );
}
