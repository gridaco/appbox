import React from "react";
import Webcam from "react-webcam";

export default function FullScreenWebCamPage() {
  return <Webcam width={"100%"} height={"100%"} audio={false} />;
}
