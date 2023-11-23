import { VideoItem } from "interface";
import React from "react";
import { Link } from "react-router-dom";

interface RelatedVideoProps {
  key: string;
  item: VideoItem;
  date: string;
}

function RelatedVideo({ key, item, date }: RelatedVideoProps) {
  // console.log("key: ", key); //undefined

  return (
    <>
      <Link to={`/videoDetail/${item.id}`} state={{ item: item }}>
        <div className="flex">
          <div className="min-w-[168px] h-[94px]">
            <img
              src={item.snippet.thumbnails.high.url}
              alt={item.snippet.title}
              className="w-full h-full border-neutral-500 border-[0.5px] object-cover"
            ></img>
          </div>

          <div className="pt-2 mo:w-[70%] tb:w-full min-w-[360px]">
            <dl className="flex flex-col">
              <dt className="text-lg font-semibold text-ellipsis overflow-hidden truncate w-full">
                {item.snippet.title}
              </dt>
              <dd className="text-sm">{item.snippet.channelTitle}</dd>
              <dd className="text-sm">{date}</dd>
            </dl>
          </div>
        </div>
      </Link>
    </>
  );
}

export default RelatedVideo;
