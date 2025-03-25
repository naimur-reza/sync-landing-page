"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../assets/Synk.svg";

interface SparkleProps {
  delay?: number;
  style?: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({ delay = 0, style }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className="absolute w-1 h-1 bg-primary/80 rounded-full"
    style={style}
  />
);

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] relative overflow-clip flex items-center flex-col justify-center pt-16">
      {/* Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -inset-y-[30%] -right-24 flex w-full flex-col xl:-right-4 xl:w-[1200px] [mask-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(255,255,255))]"
      >
        <div className="flex flex-col w-full h-full blur">
          <div className="grow [background:conic-gradient(from_180deg_at_99%_40%_in_lab,white_18deg,rgb(178,102,255)_36deg,transparent_90deg,transparent_342deg,white_360deg)]" />
          <div className="grow [background:conic-gradient(from_0deg_at_99%_60%_in_lab,white_0deg,transparent_18deg,transparent_270deg,rgb(178,102,255)_324deg,white_342deg)]" />
        </div>
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-[80%] max-w-2xl mx-auto [mask-image:linear-gradient(80deg,rgba(255,255,255,0),rgb(255,255,255))]"
      >
        <Image
          className="w-full h-full"
          src="/Synk.svg"
          width={200}
          height={200}
          alt="hero_image"
          priority
        />
        {/* Fixed Small Sparkles */}
        <Sparkle delay={0.2} style={{ top: "15%", left: "15%" }} />
        <Sparkle delay={0.4} style={{ top: "25%", right: "15%" }} />
        <Sparkle delay={0.6} style={{ bottom: "25%", left: "25%" }} />
        <Sparkle delay={0.8} style={{ top: "45%", right: "25%" }} />
        <Sparkle delay={1} style={{ bottom: "35%", right: "35%" }} />
      </motion.div>

      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-xl relative z-10 mt-10 px-4"
      >
        <input
          type="text"
          className="w-full h-14 lg:h-[68px] rounded-full border border-primary/20 pl-6 pr-16 
          focus:outline-none focus:ring-2 focus:ring-white/50 bg-background/80 backdrop-blur-sm
          text-primary placeholder:text-primary/50"
          placeholder="Ask Sync anything..."
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Submit"
          type="submit"
          className="absolute top-1/2 -translate-y-1/2 right-6  lg:right-8 flex items-center justify-center 
          w-10 h-10 rounded-full bg-primary text-background hover:bg-primary/80 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-6xl flex items-end justify-between gap-6 md:py-10 z-10 lg:min-h-[160px] px-4 mt-auto"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="size-6 my-2"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
        <div className="flex flex-col items-end gap-6 sm:gap-8 lg:gap-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-lg hidden sm:block"
          >
            <p>
              We are thrilled to unveil Sync 3, our most advanced model yet,
              blending superior reasoning with extensive pretraining knowledge.
            </p>
          </motion.div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/api"
                className="relative isolate items-center justify-center border text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none px-4 py-2 sm:text-sm gap-x-3 bg-transparent text-primary border-primary/25 hover:bg-secondary/20 rounded-full hidden lg:flex transition-colors"
              >
                <span>Build with Sync</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                href="/"
                className="relative isolate inline-flex items-center justify-center border text-base uppercase font-mono tracking-widest shrink-0 focus:outline-none px-4 py-2 sm:text-sm gap-x-3 bg-transparent text-primary border-primary/25 hover:bg-secondary/20 rounded-full transition-colors"
              >
                <span>Learn more</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
