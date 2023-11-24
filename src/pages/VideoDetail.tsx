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
  const locationRoute = location.state.item.snippet
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
    <div className="py-6 px-8 dark:bg-[#202124] dark:text-white pc:grid pc:grid-cols-4 gap-3 ">
      <h2 className="sr-only">유튜브 상세 페이지</h2>

      {/* 왼쪽 윗칸 차지 */}
      <section className="w-full pb-10 bg-red-100 flex-shrink pc:col-span-3">
        <h3 className="sr-only">해당 영상</h3>
        <div className="min-w-[360px]">
          <ul key={location.state.item.id}>
            <VideoDetailItem
              item={locationRoute}
              imageUrl={locationRoute.thumbnails?.maxres?.url || ""}
            />
          </ul>
        </div>
        {/* 왼쪽 아래칸 차지 */}
        <div className=" min-w-[360px]">
          <AddComment />
          <Comment />
        </div>
      </section>

      {/* 오른쪽 세로로 두칸 차지 */}
      <div className="min-w-[360px] pb-10  bg-yellow-100 pc:col-span-1">
        <h3 className="sr-only">관련된 영상</h3>
        {detailData?.map((item, index) => (
          <RelatedVideo
            key={`${item.id}_${index}`}
            item={item}
            date={dataVariable[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default VideoDetail
