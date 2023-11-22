import React, { useEffect, useState } from "react";
import VideoComponets from "@components/VideoComponets";
import { useLocation } from "react-router-dom";
import axios from "axios";
import getImage from "@utils/getImage";

function VideoDetail() {
  const location = useLocation();
  // console.log("location: ", location);
  const channelId = location.state.item.snippet.channelId;
  const [detailData, setDetailData] = useState<VideoDetailData>();

  const [size, setSize] = useState("sm");
  const [image, setImage] = useState<{ url: string }[]>([]);

  // 화면 크기에 따라 size 값을 변경하는 함수
  const updateSize = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setSize("mo");
    } else if (768 <= width && width < 1024) {
      setSize("tb");
    } else if (1024 <= width) {
      setSize("pc");
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

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(
          `/videos/searchByChannels/search-by-channel-id-${channelId}.json`,
        );
        // console.log("response.data: ", response.data);
        setDetailData(response.data);
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };

    fetchDetailData();
  }, [channelId]);

  return (
    <div className="py-6 px-8">
      <h2 className="sr-only">유튜브 상세 페이지</h2>
      <section className="w-full">
        <h3 className="sr-only">해당 영상</h3>
        <div className="  min-w-[360px]">
          <ul key={location.state.item.id}>
            <img
              className="w-full h-auto mx-auto min-w-[360px]"
              src={
                size === "mo"
                  ? location.state.item.snippet.thumbnails.default.url
                  : size === "tb"
                    ? location.state.item.snippet.thumbnails.medium.url
                    : size === "pc"
                      ? location.state.item.snippet.thumbnails.high.url
                      : size === "lgpc"
                        ? location.state.item.snippet.thumbnails.standard.url
                        : location.state.item.snippet.thumbnails.default.url
              }
              alt=""
              aria-labelledby="title"
            ></img>
            <li
              id="title"
              className="text-lg font-semibold mo:w-[70%] tb:w-full mx-auto min-w-[360px]"
            >
              {location.state.item.snippet.title}
            </li>
            <li className="text-sm mo:w-[70%] tb:w-full mx-auto min-w-[360px]">
              {location.state.item.snippet.channelTitle}
            </li>
            <li className="text-base mo:w-[70%] tb:w-full mx-auto min-w-[360px] text-ellipsis overflow-hidden truncate">
              {location.state.item.snippet.description}
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>관련된 영상</h3>
        <div className="mo:flex mo:flex-col mo:items-center   tb:grid tb:grid-flow-row  tb:grid-cols-2 pc:grid-cols-3 pc:grid lgpc:grid lgpc:grid-cols-3 gap-4 min-w-[360px]">
          {detailData?.items
            .slice(1)
            .map((item) => (
              <VideoComponets
                detail="생성날짜"
                page="detail"
                size={size}
                image={image}
                item={item}
                key={item.id.videoId}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default VideoDetail;
