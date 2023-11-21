import VideoComponets from "@components/VideoComponets";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function VideoMain() {
  const [data, setData] = useState<VideoData | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/videos/popular.json");
      // console.log(response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="py-6 px-8">
      <h1 className="sr-only">유튜브 목록 페이지</h1>

      <div className="sm:flex sm:flex-col sm:items-center  mx-auto md:grid md:grid-flow-row  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-w-[360px]">
        {data?.items?.map((item) => (
          <div key={item.id}>
            <VideoComponets detail="both" page="main" item={item} />
          </div>
        )) || []}
      </div>
    </div>
  );
}

export default VideoMain;
