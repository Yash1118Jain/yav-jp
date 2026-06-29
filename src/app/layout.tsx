import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { LenisProvider } from "@/providers/lenis-provider";
import { MotionProvider } from "@/providers/motion-provider";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YAV-JP Portfolio",
  description: "Yash Jain's professional portfolio showcasing projects, research, and leadership",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
      </body>
    </html>
  );
}