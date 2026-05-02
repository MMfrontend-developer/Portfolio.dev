"use client";

import { motion } from "framer-motion";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex-1"
    >
      {children}
    </motion.main>
  );
}
