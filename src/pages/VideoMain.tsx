import axios from "axios";
import { VideoItem } from "../interface";
import React, { useEffect, useState } from "react";
import VideoComponents from "@components/VideoComponets";
import formatDateDifference from "@api/formatDateDifference";

function VideoMain() {
  const [videoData, setVideoData] = useState<VideoItem[]>([]);
  const [dataVariable, setDataVariable] = useState<string[]>([]);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await axios.get("/videos/popular.json");
        const formattedDates = response.data.items.map((item: VideoItem) => {
          return formatDateDifference(item.snippet.publishedAt);
        });
        setDataVariable(formattedDates);
        setVideoData(response.data.items);
      } catch (error) {
        console.error(`❌ 에러가 발생하였습니다 : ${error}`);
      }
    };

    dataFetching();
  }, []);

  return (
    <div className="py-6 px-8">
      <h1 className="sr-only">유튜브 목록 페이지</h1>
      <div className="mo:flex mo:flex-col mo:items-center tb:grid tb:grid-flow-row  tb:grid-cols-2 pc:grid-cols-3 pc:grid lgpc:grid lgpc:grid-cols-4 gap-4 min-w-[360px]">
        {videoData?.map((item, index) => (
          <VideoComponents
            page="main"
            key={item.id}
            item={item}
            date={dataVariable[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoMain;
