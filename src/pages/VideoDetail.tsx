import React, { useEffect, useState } from "react";
import VideoComponets from "@components/VideoComponets";
import { useLocation } from "react-router-dom";
import axios from "axios";

function VideoDetail() {
  const location = useLocation();
  // console.log("location: ", location);
  const channelId = location.state.item.snippet.channelId;
  const [detailData, setDetailData] = useState<VideoDetailData>();

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(
          `/videos/searchByChannels/search-by-channel-id-${channelId}.json`,
        );
        // console.log(response.data);
        setDetailData(response.data);
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };

    fetchDetailData();
  }, [channelId]);

  console.log(detailData);

  return (
    <div>
      <h1 className="sr-only">현재 영상</h1>
      {/* <VideoComponets detail="상세설명" page="detail" /> */}
      {detailData?.items?.map((item) => (
        <div key={item.id.videoId}>
          <VideoComponets detail="생성날짜" page="detail" />
        </div>
      ))}
    </div>
  );
}

export default VideoDetail;
