"use client";

import { HTMLProps } from 'react';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/Button';

import {
  cn,
  delayed,
} from '../utils';
import { Families } from './Families';
import FloatingNav from './FloatingNav';
import Nav from './Nav';

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
  return (
    <section
      className={cn(
        "w-screen flex flex-col py-12 md:p-6 !pt-0 text-white",
        className
      )}
      {...props}
    >
      {/* Floating Navigation */}
      <FloatingNav />

      <Nav />

      <div className="grid md:grid-cols-2 gap-8 h-full my-16">
        <div className="flex flex-col gap-4 text-gray-900 justify-center px-8">
          <h1 className="text-6xl md:text-7xl font-bold z-10">
            <span dangerouslySetInnerHTML={{ __html: headline }} />
          </h1>
          <motion.h3 {...delayed(0.1)} className="text-xl md:text-2xl z-10">
            <span dangerouslySetInnerHTML={{ __html: subheadline }} />
          </motion.h3>

          <Families />

          <motion.div
            className="flex flex-col gap-2 z-10 w-fit items-center"
            {...delayed(0.4)}
          >
            <Link href="/signup">
              <Button shadow="neu" bg="gray" className="gap-2">
                Try for Free
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </Link>
            <small className="text-gray-500">No credit card required</small>
          </motion.div>
        </div>

        <img
          src="/hero.avif"
          alt="Hero"
          className="overflow-hidden hidden md:block rounded-lg object-cover h-full"
        />
      </div>
    </section>
  );
}
