import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function GetDetailData() {
  const location = useLocation();
  // console.log("location: ", location);
  const channelId = location.state.channelId;
  const [detailData, setDetailData] = useState<VideoDetailData>();

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(
          `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
        );
        console.log(response.data);
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

      <p>관련된 영상</p>
      {detailData?.items.map((item) => (
        <div key={item.id.videoId}>
          <img
            src={item.snippet.thumbnails.default.url}
            alt=""
            width={item.snippet.thumbnails.default.width}
            height={item.snippet.thumbnails.default.height}
            aria-labelledby="title"
          />
          <ul>
            <li>채널이름: {item.snippet.channelTitle}</li>
            <li id="title">제목: {item.snippet.title}</li>
            <li>상세설명: {item.snippet.description}</li>
            <li>생성날짜: {item.snippet.publishedAt}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GetDetailData;
