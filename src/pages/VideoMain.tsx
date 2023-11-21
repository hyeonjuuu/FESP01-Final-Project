import React from "react";
import VideoComponets from "@components/VideoComponets";

function VideoMain() {
  return (
    <div className="py-6 px-8">
      <h1 className="sr-only">유튜브 목록 페이지</h1>
      {/* <div className="sm:grid-cols-1 mx-auto grid grid-flow-row  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-w-[360px] "> */}
      <div className="sm:flex sm:flex-col sm:items-center  mx-auto md:grid md:grid-flow-row  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-w-[360px]">
        <VideoComponets detail="both" page="main" />
      </div>
    </div>
  );
}

export default VideoMain;
