import React from "react";
import VideoComponets from "../components/VideoComponets";

function VideoMain() {
  return (
    <div className="py-6 px-8">
      <div className=" sm:gird-cols-1 mx-auto grid grid-flow-row  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <VideoComponets detail="both" page="main" />
      </div>
    </div>
  );
}

export default VideoMain;
