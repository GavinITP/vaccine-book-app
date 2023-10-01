"use client";

import { Button } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import useWindowListener from "@/hooks/ useWindowListener";

const PromoteCard = () => {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div className="w-full bg-gray-200 flex justify-center gap-10 px-8 py-16">
      <VideoPlayer vdoSrc="./video/getvaccine.mp4" isPlaying={playing} />
      <div className="flex flex-col justify-around py-12 px-16">
        <p className="text-4xl font-extrabold">Get your vaccine today.</p>

        <Button
          variant="outlined"
          className="w-[100px] self-center"
          onClick={() => setPlaying((prev) => !prev)}
        >
          {playing ? "Pause" : "Play"}
        </Button>
      </div>
    </div>
  );
};

export default PromoteCard;
