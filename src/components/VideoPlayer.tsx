"use client";

import { useEffect, useRef } from "react";

interface Props {
  vdoSrc: string;
  isPlaying: boolean;
}

const VideoPlayer = ({ vdoSrc, isPlaying }: Props) => {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) vdoRef.current?.play();
    else vdoRef.current?.pause();
  });

  return (
    <video ref={vdoRef} src={vdoSrc} className="w-[40%]" controls loop muted />
  );
};

export default VideoPlayer;
