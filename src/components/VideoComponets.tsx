import React from "react";
import defaultImage from "../assets/480x270.svg";

interface VideoComponentsProps {
  detail: string;
  page: string;
}

function VideoComponets({ detail, page }: VideoComponentsProps) {
  return (
    <div className="mx-auto">
      <img
        src={defaultImage}
        alt="비디오 썸네일"
        className="w-[26.125rem] h-[14.75rem]  border-neutral-500 border-[0.5px]"
      />
      <div className="pt-2">
        <dl className=" flex flex-col">
          <dt className="text-lg font-semibold">제목</dt>
          <dd className={`text-sm ${page === "main" ? "order-first" : ""}`}>
            채널 이름
          </dd>
          {detail === "상세설명" ? (
            <dd className="text-base">상세 설명</dd>
          ) : detail === "생성날짜" ? (
            <dd className="text-sm">생성 날짜</dd>
          ) : (
            <>
              <dd className="text-base">상세 설명</dd>
              <dd className="text-sm">생성 날짜</dd>
            </>
          )}
        </dl>
      </div>
    </div>
  );
}

export default VideoComponets;
