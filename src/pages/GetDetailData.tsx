import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function GetDetailData() {
  const { id } = useParams<{ id: string }>();
  const [detailData, setDetailData] = useState<VideoDetailData | null>(null);

  const fetchDetailData = async () => {
    try {
      const response = await axios.get(
        `/videos/searchByChannels/search-by-channel-id-${id}.json`
      );
      console.log(response.data);
      setDetailData(response.data);
    } catch (error) {
      console.error("Error fetching detail data:", error);
    }
  };

  useEffect(() => {
    fetchDetailData();
  }, [id]);

  return (
    <div>
      <h2>영상 상세 페이지</h2>
      {detailData && (
        <>
          <img
            src={detailData.snippet.thumbnails.default.url}
            alt=""
            width={detailData.snippet.thumbnails.default.width}
            height={detailData.snippet.thumbnails.default.height}
            aria-labelledby="title"
          />
          <ul>
            <li>채널이름: {detailData.snippet.channelId}</li>
            <li id="title">제목: {detailData.snippet.title}</li>
            <li>상세설명: {detailData.snippet.description}</li>
            <li>생성날짜: {detailData.snippet.publishedAt}</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default GetDetailData;
