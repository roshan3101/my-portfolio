"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Vapi from "@vapi-ai/web";

type Status = "idle" | "connecting" | "live";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

const MODEL_SRC = "/Assets/models/roshan_avatar.glb";

export default function VapiVoiceAgent() {
  const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
  const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;

  const vapiRef = useRef<any>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!publicKey || !assistantId) return;

    const vapi: any = new Vapi(publicKey);
    vapiRef.current = vapi;

    const handleCallStart = () => setStatus("live");
    const handleCallEnd = () => setStatus("idle");
    const handleError = () => setStatus("idle");

    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("error", handleError);

    return () => {
      vapi.off("call-start", handleCallStart);
      vapi.off("call-end", handleCallEnd);
      vapi.off("error", handleError);
      vapiRef.current = null;
    };
  }, [assistantId, publicKey]);

  const startCall = () => {
    if (!vapiRef.current || !assistantId) return;
    setStatus("connecting");
    (vapiRef.current as any).start(assistantId);
  };

  const stopCall = () => {
    if (!vapiRef.current) return;
    (vapiRef.current as any).stop();
    setStatus("idle");
  };

  if (!publicKey || !assistantId) return null;

  return (
    <>
      <Script
        id="model-viewer-script"
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
        strategy="lazyOnload"
      />

      <div className="fixed bottom-0 right-0 translate-x-4 translate-y-2 z-50 flex items-end">
        <div className="relative w-80 h-80">
          <div
            className="absolute inset-0 cursor-pointer z-20"
            onClick={startCall}
            aria-label="Start call"
          />
          <model-viewer
            src={MODEL_SRC}
            autoplay
            loop
            camera-controls
            disable-zoom
            disable-pan
            environment-image="neutral"
            shadow-intensity="0"
            exposure="1"
            poster-color="transparent"
            style={{ width: "100%", height: "100%", background: "transparent" }}
          />
          {status !== "idle" && (
            <button
              type="button"
              onClick={stopCall}
              className="absolute bottom-2 right-2 z-30 h-12 w-12 rounded-full bg-red-500 text-black font-bold shadow-2xl hover:bg-red-400 transition border-2 border-black"
              aria-label="End call"
            >
              X
            </button>
          )}
        </div>
      </div>
    </>
  );
}
