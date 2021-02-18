import { useEffect, useState } from "react";
import { useRouter } from "next/router";

/**
 * state of flutter frame loading
 */
type FlutterLoadingState =
  | "pre-warming"
  | "compiling"
  | "js-compiled"
  | "engine-loaded"
  | "drawing"
  | "complete"
  | "failed";

export default function () {
  const router = useRouter();

  // const [size, setSize] = useState({
  //     w: window.innerWidth,
  //     h: window.innerHeight
  // });

  const onIframeLoaded = () => {};

  return (
    <div>
      <iframe
        id="frame"
        src="flutter/frame-flutter.html"
        sandbox="allow-scripts allow-same-origin"
        onLoad={onIframeLoaded}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          border: "none",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          zIndex: 999999,
        }}
      />
    </div>
  );
}
