import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function GetDetailData() {
  const location = useLocation();
  // console.log("location: ", location);
  const channelId = location.state.item.snippet.channelId;
  const [detailData, setDetailData] = useState<VideoDetailData>();

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(
          `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
        );
        // console.log(response.data);
        setDetailData(response.data);
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };

    fetchDetailData();
  }, [channelId]);

  return (
    <div>
      <p>해당 영상</p>
      <ul key={location.state.item.id}>
        <img
          src={location.state.item.snippet.thumbnails.default.url}
          alt=""
          width={location.state.item.snippet.thumbnails.default.width}
          height={location.state.item.snippet.thumbnails.default.height}
          aria-labelledby="title"
        ></img>
        <li id="title">영상 제목: {location.state.item.snippet.title}</li>
        <li>채널 이름: {location.state.item.snippet.channelTitle}</li>
        <li>상세 설명: {location.state.item.snippet.description}</li>
      </ul>

      <p>관련된 영상</p>
      {detailData?.items.map((item) => (
        <div key={item.id.videoId}>
          <img
            src={item.snippet.thumbnails.default.url}
            alt=""
            width={item.snippet.thumbnails.default.width}
            height={item.snippet.thumbnails.default.height}
            aria-labelledby={`title-${item.id.videoId}`}
          />
          <ul>
            <li id={`title-${item.id.videoId}`}>
              영상 제목: {item.snippet.title}
            </li>
            <li>채널 이름: {item.snippet.channelTitle}</li>
            <li>생성 날짜: {item.snippet.publishedAt}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GetDetailData;
