"use client";

import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setWindowSize({ width, height });
      }
    });

    // Observe o tamanho do elemento raiz (pode ser o body ou outro elemento)
    const rootElement = document.documentElement;
    resizeObserver.observe(rootElement);

    return () => {
      resizeObserver.unobserve(rootElement);
    };
  }, []);

  return windowSize;
}
