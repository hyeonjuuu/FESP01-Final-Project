import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import getImage from "@utils/getImage";

interface VideoComponentsProps {
  detail: string;
  page: string;
}

function VideoComponets({ detail, page }: VideoComponentsProps) {
  const [size, setSize] = useState("sm");
  const [image, setImage] = useState<
    { url: string; width: number; height: number }[]
  >([]);
  const [data, setData] = useState<VideoData | null>(null);
  const currentTime = new Date();

  const fetchData = async () => {
    try {
      const response = await axios.get("/videos/popular.json");
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

  // console.log(publishTime);

  // 화면 크기에 따라 size 값을 변경하는 함수
  const updateSize = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setSize("sm");
    } else if (768 <= width && width < 1024) {
      setSize("md");
    } else if (1024 <= width) {
      setSize("lg");
    } else {
      setSize("xl");
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 size 값을 업데이트
    updateSize();

    // 화면 크기가 변경될 때마다 size 값을 업데이트하는 이벤트 리스너 등록
    window.addEventListener("resize", updateSize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [size]);

  useEffect(() => {
    const fetchImage = async () => {
      const result = await getImage(size);
      setImage(result);
    };
    fetchImage();
  }, [size]);

  return (
    <>
      {data?.items.map((item) => (
        <div key={item.id} className="sm:w-[70%] md:w-full">
          <Link to={`/detail/${item.id}`} state={{ item: item }}>
            <img
              src={
                size === "sm"
                  ? item.snippet.thumbnails.default.url
                  : size === "md"
                    ? item.snippet.thumbnails.medium.url
                    : size === "lg"
                      ? item.snippet.thumbnails.high.url
                      : size === "xl"
                        ? item.snippet.thumbnails.standard.url
                        : item.snippet.thumbnails.default.url
              }
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
