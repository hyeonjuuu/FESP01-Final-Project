import React from "react";
import { Link } from "react-router-dom";

function RelatedVideo({
  // detail,
  // page,
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
    <>
      <Link to={`/videoDetail/${item.id}`} state={{ item: item }}>
        <div className="bg-red-100 flex w-full">
          <div className="min-w-[168px] h-[94px] bg-yellow-300">
            <img
              src={
                size === "mo"
                  ? item.snippet.thumbnails.default.url
                  : size === "tb"
                    ? item.snippet.thumbnails.medium.url
                    : size === "pc"
                      ? item.snippet.thumbnails.high.url
                      : size === "lgpc"
                        ? item.snippet.thumbnails.standard.url
                        : item.snippet.thumbnails.default.url
              }
              alt={item.snippet.title}
              className="w-full h-full border-neutral-500 border-[0.5px]"
            ></img>
          </div>

          <div className="pt-2 h-full flex-grow bg-yellow-300">
            <dl className=" flex flex-col">
              <dt className="text-lg font-semibold text-ellipsis overflow-hidden truncate">
                {item.snippet.title}
              </dt>
              <dd className="text-ellipsis overflow-hidden truncate text-sm">
                {item.snippet.channelTitle}
              </dd>

              <dd className="text-ellipsis overflow-hidden truncate text-sm ">
                {getPassedDay()}
              </dd>
            </dl>
          </div>
        </div>
      </Link>
    </>
  );
}

export default RelatedVideo;
