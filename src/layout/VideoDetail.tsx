import React from "react";
import VideoComponets from "../components/VideoComponets";

function VideoDetail() {
  return (
    <div>
      <VideoComponets detail="상세설명" page="detail" />
      <VideoComponets detail="생성날짜" page="detail" />
    </div>
  );
}

export default VideoDetail;
