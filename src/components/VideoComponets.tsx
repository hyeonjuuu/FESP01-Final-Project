import React, { useEffect, useState } from "react";
import getImage from "../utils/getImage";

interface VideoComponentsProps {
  detail: string;
  page: string;
}

function VideoComponets({ detail, page }: VideoComponentsProps) {
  const [size, setSize] = useState("sm");
  const [image, setImage] = useState<
    { url: string; width: number; height: number }[]
  >([]);

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
    <div className="mx-auto">
      {image.map((img, index) => (
        <img
          key={index}
          src={img.url}
          alt={`비디오 썸네일 ${index}`}
          className={`w-[${img.width}px] h-[${img.height}px] border-neutral-500 border-[0.5px]`}
        />
      ))}
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
