import React, { useEffect, useState } from "react";
import defaultImage from "../assets/480x270.svg";
import axios from "axios";
import { Link } from "react-router-dom";

interface VideoComponentsProps {
  detail: string;
  page: string;
}

function VideoComponets({ detail, page }: VideoComponentsProps) {
  const [data, setData] = useState<VideoData | null>(null);
  const currentTime = new Date();

  const fetchData = async () => {
    try {
      const response = await axios.get("/videos/popular.json");
      // console.log(response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const publishTime = data?.items.map((item) => {
    const publishDate = new Date(item.snippet.publishedAt);
    const monthsAgo =
      currentTime.getMonth() -
      publishDate.getMonth() +
      12 * (currentTime.getFullYear() - publishDate.getFullYear());

    return monthsAgo;
  });

  console.log(publishTime);

  return (
    <>
      {data?.items.map((item) => (
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
                <dd className="text-sm ">{item.snippet.publishedAt}</dd>
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
      ))}
    </>
  );
}

export default VideoComponets;
