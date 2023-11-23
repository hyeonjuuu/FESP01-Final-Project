import axios from "axios";
import { VideoItem } from "interface";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VideoDetailItem from "@components/VideoDetailItem";
import formatDateDifference from "@api/formatDateDifference";
import RelatedVideo from "@components/RelatedVideo";

function VideoDetail() {
  const location = useLocation();
  const locationRoute = location.state.item.snippet;
  const [detailData, setDetailData] = useState<VideoItem[]>([]);
  const [dataVariable, setDataVariable] = useState<string[]>([]);

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(
          `/videos/searchByChannels/search-by-channel-id-${locationRoute.channelId}.json`,
        );
        const formattedDates = response.data.items.map((item: VideoItem) => {
          return formatDateDifference(item.snippet.publishedAt);
        });
        setDataVariable(formattedDates);
        setDetailData(response.data.items);
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };

    fetchDetailData();
  }, [locationRoute.channelId]);

  return (
    <div className="py-6 px-8">
      <h2 className="sr-only">유튜브 상세 페이지</h2>
      <section className="w-full pb-10">
        <h3 className="sr-only">해당 영상</h3>
        <div className="min-w-[360px]">
          <ul key={location.state.item.id}>
            <VideoDetailItem
              item={locationRoute}
              imageUrl={locationRoute.thumbnails?.maxres?.url || ""}
            />
          </ul>
        </div>
      </section>

      <h3 className="sr-only">관련된 영상</h3>
      <div className="min-w-[360px]">
        {detailData?.map((item, index) => (
          <RelatedVideo key={item.id} item={item} date={dataVariable[index]} />
        ))}
      </div>
    </div>
  );
}

export default VideoDetail;
