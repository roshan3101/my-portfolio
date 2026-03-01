"use client";

import { useEffect } from "react";

export default function PeaceRuntimeLoader() {
  useEffect(() => {
    const run = async () => {
      const mod = await import("@/app/peace/peace-runtime");
      await mod.initPeaceRuntime();
    };

    void run();
  }, []);

  return null;
}
