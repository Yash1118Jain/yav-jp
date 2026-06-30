"use client";

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import Lenis from "lenis";

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      lenisRef.current = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 1,
      });
      setLenis(lenisRef.current);

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenisRef.current?.destroy();
        setLenis(null);
      };
    }
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error("useLenis must be used within a LenisProvider");
  }
  return context;
}