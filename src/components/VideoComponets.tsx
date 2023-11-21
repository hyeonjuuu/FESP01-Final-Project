import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface VideoComponentsProps {
  detail: string;
  page: string;
}

function VideoComponets({ detail, page }: VideoComponentsProps) {
  const [data, setData] = useState<VideoData | null>(null);
  const [dataVariable, setDataVariable] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/videos/popular.json");
      // 매개변수 item의 타입을 무엇으로 해야할지 모르겠음.
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
    <>
      {data?.items.map((item, index) => (
        <div key={item.id} className="sm:w-[70%] md:w-full">
          <Link to={`/detail/${item.id}`} state={{ item: item }}>
            <img
              src={item.snippet.thumbnails.default.url}
              alt={item.snippet.title}
              className="w-[26.125rem] max-w-full h-[14.75rem] border-neutral-500 border-[0.5px]"
            />
          </Link>
          <div className="pt-2 h-full w-full">
            <dl className="flex flex-col h-full w-full">
              <dt className="text-lg font-semibold text-ellipsis overflow-hidden truncate">
                {item.snippet.title}
              </dt>
              <dd className={`text-sm ${page === "main" ? "order-first" : ""}`}>
                {item.snippet.channelTitle}
              </dd>
              {detail === "상세설명" ? (
                <dd className="text-base ">{item.snippet.description}</dd>
              ) : detail === "생성날짜" ? (
                <dd className="text-sm ">{dataVariable[index]}</dd>
              ) : (
                <>
                  <dd className="text-base w-[96%] text-ellipsis overflow-hidden truncate ">
                    {item.snippet.description}
                  </dd>
                  <dd className="text-sm">{dataVariable[index]}</dd>
                </>
              )}
            </dl>
          </div>
        </div>
      ))}
    </>
  );
}

export default VideoComponets;
