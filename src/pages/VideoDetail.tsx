import axios from "axios"
import { VideoItem } from "interface"
import Comment from "@components/Comment"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import AddComment from "@components/AddComment"
import RelatedVideo from "@components/RelatedVideo"
import VideoDetailItem from "@components/VideoDetailItem"
import formatDateDifference from "@api/formatDateDifference"

function VideoDetail() {
  const location = useLocation()
  // console.log("location.state:", location.state); // 추가된 디버깅 로그

  const locationRoute = location.state.item.snippet
  // const locationRoute = location.state?.item?.snippet || {};
  // if (!location.state) {
  //   // location.state가 null이면 에러가 발생하지 않도록 반환하거나 다른 처리를 수행
  //   return <div>Invalid state</div>;
  // }

  const [detailData, setDetailData] = useState<VideoItem[]>([])
  const [dataVariable, setDataVariable] = useState<string[]>([])

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(
          `/videos/searchByChannels/search-by-channel-id-${locationRoute.channelId}.json`,
        )
        const formattedDates = response.data.items.map((item: VideoItem) => {
          return formatDateDifference(item.snippet.publishedAt)
        })
        setDataVariable(formattedDates)
        setDetailData(response.data.items)
      } catch (error) {
        console.error("Error fetching detail data:", error)
      }
    }

    fetchDetailData()
  }, [locationRoute.channelId])

  return (
    <div className="py-6 px-8 dark:bg-[#202124] dark:text-white">
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
      <div className="min-w-[360px] pb-10">
        {detailData?.map((item, index) => (
          <RelatedVideo
            key={`${item.id}_${index}`}
            item={item}
            date={dataVariable[index]}
          />
        ))}
      </div>
      <AddComment />
      <Comment />
    </div>
  )
}

export default VideoDetail
