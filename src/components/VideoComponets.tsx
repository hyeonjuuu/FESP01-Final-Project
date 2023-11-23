import { VideoItem } from "interface";
import React from "react";
import { Link } from "react-router-dom";

interface VideoComponentsProps {
  key: string;
  item: VideoItem;
  date: string;
  page: string;
}

function VideoComponets({ item, date, page }: VideoComponentsProps) {
  return (
    <div className="tb:flex tb:flex-col tb:justify-center tb:items-center w-[90%]">
      <Link
        to={`/videoDetail/${item.id}`}
        state={{ item: item }}
        className="inline-block "
      >
        <img
          src={
            item.snippet.thumbnails.maxres?.url ||
            item.snippet.thumbnails.high.url
          }
          alt={item.snippet.title}
          className="max-w-full aspect-video h-[14.75rem]"
        />
        <div className="pt-2  w-full bg-red-100 ">
          <dl className=" flex flex-col w-full">
            <dt className="text-lg font-semibold text-ellipsis overflow-hidden truncate">
              {item.snippet.title}
            </dt>
            <dd className={`text-sm ${page === "main" ? "order-first" : ""}`}>
              {item.snippet.channelTitle}
            </dd>
            <dd className="text-base w-[96%] text-ellipsis overflow-hidden truncate">
              {item.snippet.description}
            </dd>
            <dd className="text-sm">{date}</dd>
          </dl>
        </div>
      </Link>
    </div>
  );
}

export default VideoComponets;
