"use client";

import { useEffect } from "react";
import { initHomeEffects } from "@/app/lib/home-effects";

export default function HomeEffects() {
  useEffect(() => {
    initHomeEffects();
  }, []);

  return null;
}
