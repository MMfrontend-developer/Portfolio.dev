"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const title = "Crafting digital products with intent and precision.";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative pt-28 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-semibold uppercase tracking-wider mb-6"
          >
           UI/UX Designer & Frontend Developer
          </motion.div>

          {/* Heading */}
          <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-semibold tracking-[-0.02em] leading-[1.05] mb-8 flex flex-wrap">
            {title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={cn(
                  "mr-[0.2em]",
                  word === "intent" ? "text-accent italic font-serif" : ""
                )}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            I bridge the gap between design and development, creating high-performance web experiences 
            that are as beautiful as they are functional.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg">
              <Link href="#work">View Selected Work</Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base border"
            >
              <Link href="/about">My Process</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient Orb */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-[0.05] translate-x-1/3 -translate-y-1/4 pointer-events-none"
      >
        <svg
          width="900"
          height="900"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 400) rotate(90) scale(400)"
            >
              <stop stopColor="var(--accent)" />
              <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
}