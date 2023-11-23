import { VideoSnippet } from "interface";
import React, { useMemo, useState } from "react";

export interface VideoDetailItemProps {
  item: VideoSnippet;
  imageUrl: string;
}

function VideoDetailItem({ item, imageUrl }: VideoDetailItemProps) {
  const [viewMore, setViewMore] = useState(false);

  const viewDescription = () => {
    if (!viewMore) {
      const firstLine = item.description.split("\n")[0];
      return <span className="whitespace-nowrap block mb-2">{firstLine}</span>;
    } else {
      return (
        <span className="whitespace-pre-line block mb-2">
          {item.description}
        </span>
      );
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <img
        src={imageUrl}
        alt=""
        aria-labelledby="title"
        className="w-full h-auto min-w-[360px]"
      />
      <li
        id="title"
        className=" text-lg font-semibold mo:w-[70%] tb:w-full min-w-[360px]"
      >
        {item.title}
      </li>
      <li className="text-sm mo:w-[70%] tb:w-full min-w-[360px]">
        {item.channelTitle}
      </li>
      <li
        className={`bg-[#F2F2F2] text-base mo:w-[70%] tb:w-full min-w-[360px] p-6 rounded-md mt-1 cursor-pointer`}
        onClick={() => setViewMore(!viewMore)}
      >
        {viewDescription()}
        <span className="text-gray-500">
          {viewMore === false ? "더보기..." : "간략히"}
        </span>
      </li>
    </div>
  );
}

export default VideoDetailItem;
