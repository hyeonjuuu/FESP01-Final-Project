import { VideoSnippet } from "interface";
import React from "react";

export interface VideoDetailItemProps {
  item: VideoSnippet;
  imageUrl: string;
}

function VideoDetailItem({ item, imageUrl }: VideoDetailItemProps) {
  return (
    <>
      <img
        src={imageUrl}
        alt=""
        aria-labelledby="title"
        className="w-full h-auto min-w-[360px]"
      />
      <li
        id="title"
        className="text-lg font-semibold mo:w-[70%] tb:w-full min-w-[360px]"
      >
        {item.title}
      </li>
      <li className="text-sm mo:w-[70%] tb:w-full min-w-[360px]">
        {item.channelTitle}
      </li>
      <li className="text-base mo:w-[70%] tb:w-full min-w-[360px] text-ellipsis overflow-hidden truncate">
        {item.description}
      </li>
    </>
  );
}

export default VideoDetailItem;
