"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import { LenisProvider } from "@/providers/lenis-provider";
import { MotionProvider } from "@/providers/motion-provider";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";

interface Props {
  children: React.ReactNode;
}

export default function ProvidersWrapper({ children }: Props) {
  return (
    <ThemeProvider>
      <LenisProvider>
        <MotionProvider>
          <AnimatePresence>
            <motion.div className="min-h-screen bg-background text-foreground transition-colors duration-300">
              <Container>{children}</Container>
            </motion.div>
          </AnimatePresence>
        </MotionProvider>
      </LenisProvider>
    </ThemeProvider>
  );
}