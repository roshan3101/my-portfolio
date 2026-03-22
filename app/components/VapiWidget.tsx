"use client";

import Script from "next/script";
import React from "react";

// Allow TSX to understand the custom element exposed by the Vapi widget UMD bundle.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vapi-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "public-key": string;
        "assistant-id"?: string;
        mode?: "voice" | "chat";
        theme?: "light" | "dark";
        position?: "right" | "left";
        "bottom-offset"?: string;
        "right-offset"?: string;
        "button-base-color"?: string;
        "button-text-color"?: string;
      };
    }
  }
}

const VapiWidget = () => {
  const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
  const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;

  // Fail silently if the required credentials are missing so builds don't break.
  if (!publicKey || !assistantId) return null;

  return (
    <>
      <Script
        id="vapi-widget-script"
        src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
        strategy="afterInteractive"
      />

      {/*
        The widget renders itself as a floating bubble (defaults to bottom-right).
        suppressHydrationWarning avoids mismatches while the custom element hydrates on the client.
      */}
      <div suppressHydrationWarning>
        <vapi-widget
          public-key={publicKey}
          assistant-id={assistantId}
          mode="voice"
          theme="dark"
          position="right"
          bottom-offset="18px"
          right-offset="18px"
        />
      </div>
    </>
  );
};

export default VapiWidget;
