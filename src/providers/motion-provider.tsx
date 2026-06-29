"use client";

import { motion, Variants } from "framer-motion";
import { createContext, useContext, ReactNode } from "react";

interface MotionContextType {
  containerVariants: Variants;
  itemVariants: Variants;
  staggerContainer: (staggerChildren?: number, delayChildren?: number) => Variants;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export function MotionProvider({ children }: { children: ReactNode }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const staggerContainer = (
    staggerChildren: number = 0.1,
    delayChildren: number = 0.2
  ): Variants => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

  return (
    <MotionContext.Provider
      value={{
        containerVariants,
        itemVariants,
        staggerContainer,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotion must be used within a MotionProvider");
  }
  return context;
}