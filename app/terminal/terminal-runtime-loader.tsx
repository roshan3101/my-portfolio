"use client";

import { useEffect } from "react";

export default function TerminalRuntimeLoader() {
  useEffect(() => {
    void import("@/app/terminal/terminal-runtime");
  }, []);

  return null;
}
