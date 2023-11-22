import axios from "axios";
import { VideoItem } from "interface";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VideoDetailItem from "@components/VideoDetailItem";
import VideoComponents from "@components/VideoComponets";
import formatDateDifference from "@api/formatDateDifference";
import axios from "axios";
import getImage from "@utils/getImage";
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
      <section className="w-full">
        <h3 className="sr-only">해당 영상</h3>
        <div className="min-w-[360px]">
          <ul key={location.state.item.id}>
            <VideoDetailItem
              item={locationRoute}
              imageUrl={locationRoute.thumbnails.maxres.url}
            />
          </ul>
        </div>
      </section>

      <section>
        <h3>관련된 영상</h3>
        <div className="min-w-[360px]">
          {/* <div className="mo:flex mo:flex-col mo:items-center   tb:grid tb:grid-flow-row  tb:grid-cols-2 pc:grid-cols-3 pc:grid lgpc:grid lgpc:grid-cols-3 gap-4 min-w-[360px]"> */}
          {detailData?.items
            .slice(1)
            .map((item) => (
              <RelatedVideo
                size={size}
                image={image}
                item={item}
                key={item.id.videoId}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default VideoDetail;
