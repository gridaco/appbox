import React from "react";
import Webcam from "react-webcam";
import useMeasure from "react-use-measure";

export default function FullScreenWebCamPage() {
  const [ref, bounds] = useMeasure();

  // get zoom factor by bounds and camsize. make it to fit width and height (the bigger value)
  // we can't get camera's size info for now..
  let zoom = 2;

  return (
    <div
      ref={ref}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Webcam
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "center",
        }}
        width={"100%"}
        height={"100%"}
        videoConstraints={{
          width: bounds?.width ?? 1280,
          height: bounds?.height ?? 720,
        }}
        audio={false}
      />
    </div>
  );
}
