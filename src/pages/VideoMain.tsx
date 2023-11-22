import React, { useEffect, useState } from "react";
import VideoComponets from "@components/VideoComponets";
import getImage from "@utils/getImage";
import axios from "axios";

function VideoMain() {
  const [size, setSize] = useState("pc");
  const [image, setImage] = useState<{ url: string }[]>([]);

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

  // 화면 크기에 따라 size 값을 변경하는 함수
  const updateSize = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setSize("mo");
    } else if (768 <= width && width < 1024) {
      setSize("tb");
    } else if (1024 <= width && width < 1280) {
      setSize("pc");
    } else {
      setSize("lgpc");
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
    <div className="py-6 px-8">
      <h1 className="sr-only">유튜브 목록 페이지</h1>

      <section className="flex flex-col mo:items-center mx-auto tb:grid tb:grid-flow-row  tb:grid-cols-2 pc:grid pc:grid-cols-3 lgpc:grid lgpc:grid-cols-4 gap-4 min-w-[360px]">
        {data?.items.map((item) => (
          <VideoComponets
            detail="both"
            page="main"
            size={size}
            image={image}
            item={item}
            key={item.id}
          />
        ))}
      </section>
    </div>
  );
}

export default VideoMain;
