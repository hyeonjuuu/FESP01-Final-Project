import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoComponets from "@components/VideoComponets";

function VideoDetail() {
  const [data, setData] = useState<VideoData | null>(null);
  const [dataVariable, setDataVariable] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/videos/popular.json");
      console.log(response);

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
    <div>
      {/* <VideoComponets detail="상세설명" page="detail" item=실제 item 데이터 dataVariable=실제 dataVariable 데이터 /> */}
      {Array.isArray(data?.items) &&
        data?.items.map((item: any) => (
          <VideoComponets
            key={item.id}
            detail="생성날짜"
            page="detail"
            item={item}
            dataVariable={dataVariable}
          />
        ))}
    </div>
  );
}

export default VideoDetail;
