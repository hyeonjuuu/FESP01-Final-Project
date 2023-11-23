import React from "react";
import { Link } from "react-router-dom";

function VideoComponets({
  detail,
  page,
  size,
  image,
  item,
}: VideoComponentsProps) {
  function getPassedDay() {
    const today = new Date();

    const publishDay = new Date(item.snippet.publishedAt);

    const passedSec = today.getTime() - publishDay.getTime();

    const passedDay = passedSec / 1000 / 60 / 60 / 24;

    if (passedDay < 7 && passedDay < 365) {
      return Math.floor(passedDay) + "일 전";
    } else if (passedDay >= 7 && passedDay < 30) {
      return Math.floor(passedDay / 7) + "주 전";
    } else if (passedDay >= 30 && passedDay < 365) {
      return Math.floor(passedDay / 30) + "개월 전";
    } else {
      return Math.floor(passedDay / 365) + "년 전";
    }
  }

  return (
    <div className="mo:flex mo:flex-col mo:items-center">
      <Link
        to={`/videoDetail/${item.id}`}
        state={{ item: item }}
        className="inline-block "
      >
        <img
          src={
            size === "mo"
              ? item.snippet.thumbnails.medium.url
              : size === "tb"
                ? item.snippet.thumbnails.high.url
                : size === "pc"
                  ? item.snippet.thumbnails.standard.url
                  : size === "lgpc"
                    ? item.snippet.thumbnails.maxres.url
                    : item.snippet.thumbnails.default.url
          }
          alt={item.snippet.title}
          className="max-w-full aspect-video h-[14.75rem]"
        ></img>
      </Link>
      <div className="pt-2 mo:flex-1 w-full ">
        <dl className=" flex flex-col w-full">
          <dt className="text-lg font-semibold text-ellipsis overflow-hidden truncate">
            {item.snippet.title}
          </dt>
          <dd className={`text-sm ${page === "main" ? "order-first" : ""}`}>
            {item.snippet.channelTitle}
          </dd>
          {detail === "상세설명" ? (
            <dd className="text-base ">{item.snippet.description}</dd>
          ) : detail === "생성날짜" ? (
            <dd className="text-sm ">{getPassedDay()}</dd>
          ) : (
            <>
              <dd className="text-base w-[96%] text-ellipsis overflow-hidden truncate ">
                {item.snippet.description}
              </dd>
              <dd className="text-sm">{getPassedDay()}</dd>
            </>
          )}
        </dl>
      </div>
    </div>
  );
}

export default VideoComponets;
