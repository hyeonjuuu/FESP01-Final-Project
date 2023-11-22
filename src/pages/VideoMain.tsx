import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoComponets from "@components/VideoComponets";

function VideoMain() {
  const [data, setData] = useState<VideoData | null>(null);
  const [dataVariable, setDataVariable] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/videos/popular.json");
      const formattedDates = response.data.items.map((item: any) => {
        return formatDateDifference(item.snippet.publishedAt);
      });

      setData(response.data);
      setDataVariable(formattedDates);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function formatDateDifference(publishedAt: string): string {
    const currentDate = new Date();
    const publishedDate = new Date(publishedAt);

    const timeDifference = currentDate.getTime() - publishedDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

    if (daysDifference === 0) {
      return "오늘";
    } else if (daysDifference === 1) {
      return "어제";
    } else {
      return `${daysDifference}일 전`;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="py-6 px-8">
      <h1 className="sr-only">유튜브 목록 페이지</h1>
      <div className="sm:flex sm:flex-col sm:items-center mx-auto md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-w-[360px]">
        {data?.items.map((item, index) => (
          <VideoComponets
            key={index}
            item={item}
            // dataVariable={dataVariable[index]}
            detail="both"
            page="main"
          />
        ))}
      </div>
    </div>
  );
}

export default VideoMain;
