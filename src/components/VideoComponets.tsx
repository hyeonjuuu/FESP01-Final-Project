import React from "react";
import { Link } from "react-router-dom";

interface VideoComponentsProps {
  detail: string;
  page: string;
  item?: Item;
}

function VideoComponets({ detail, page, item }: VideoComponentsProps) {
  if (item) {
    return (
      <>
        <div key={item.id} className="sm:w-[70%] md:w-full">
          <Link to={`/detail/${item.id}`} state={{ item: item }}>
            <img
              src={item.snippet.thumbnails.default.url}
              alt={item.snippet.title}
              className=" w-[26.125rem] max-w-full h-[14.75rem]  border-neutral-500 border-[0.5px]"
            ></img>
          </Link>
          <div className="pt-2 h-full w-full">
            <dl className=" flex flex-col h-full w-full">
              <dt className="text-lg font-semibold text-ellipsis overflow-hidden truncate">
                {item.snippet.title}
              </dt>
              <dd className={`text-sm ${page === "main" ? "order-first" : ""}`}>
                {item.snippet.channelTitle}
              </dd>
              {detail === "상세설명" ? (
                <dd className="text-base ">{item.snippet.description}</dd>
              ) : detail === "생성날짜" ? (
                <dd className="text-sm ">{Number(item.snippet.publishedAt)}</dd>
              ) : (
                <>
                  <dd className="text-base w-[96%] text-ellipsis overflow-hidden truncate ">
                    {item.snippet.description}
                  </dd>
                  <dd className="text-sm">{item.snippet.publishedAt}</dd>
                </>
              )}
            </dl>
          </div>
        </div>
      </>
    );
  }
}

export default VideoComponets;
