import axios from "axios"
import Comment from "@components/Comment"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import AddComment from "@components/AddComment"
import { filterComment } from "@api/commentApi"
import { CommentType, VideoItem } from "interface"
import RelatedVideo from "@components/RelatedVideo"
import VideoDetailItem from "@components/VideoDetailItem"
import formatDateDifference from "@api/formatDateDifference"

function VideoDetail() {
  const location = useLocation()
  const locationRoute = location.state.item.snippet
  const videoId = location.state.item.id
  const [, setWindowWidth] = useState(window.outerWidth)
  const [scrollFetching, setScrollFetching] = useState(false)
  const [detailData, setDetailData] = useState<VideoItem[]>([])
  const [dataVariable, setDataVariable] = useState<string[]>([])
  const [commentData, setCommentData] = useState<CommentType[]>([])

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${locationRoute.channelId}&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
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

  useEffect(() => {
    const promiseData = filterComment(location.state.item.id, 0, 2)
    promiseData
      .then((comments) => {
        setCommentData(comments || [])
      })
      .catch((error) => {
        console.error("에러 발생: ", error)
      })
  }, [])

  // 반응형
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const fetchMoreData = async () => {
    try {
      setScrollFetching(true)

      const startRange = commentData.length
      const endRange = startRange + 2 // 예시로 2개씩 불러오도록 설정

      const moreDataComments = await filterComment(
        location.state.item.id,
        startRange,
        endRange,
      )

      if (moreDataComments) {
        setCommentData((prevData) => [...(prevData || []), ...moreDataComments])
      }
    } catch (error) {
      console.error(`❌ 에러가 발생하였습니다 : ${error}`)
    } finally {
      setScrollFetching(false)
    }
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight

    if (scrollTop + clientHeight >= scrollHeight && !scrollFetching) {
      fetchMoreData()
      console.log("gookd work")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const renderCommentsSection = () => (
    <div className="min-w-[360px] lgpc:mt-3 pc:mt-3">
      <AddComment
        videoId={location.state.item.id}
        setCommentData={setCommentData}
      />
      {commentData.map((item, index) => (
        <Comment
          key={`${item.anonymous_user_id}_${index}`}
          commentId={item.anonymous_user_id}
          date={item.created_at}
          text={item.text}
          setCommentData={setCommentData}
          videoId={location.state.item.id}
        />
      ))}
    </div>
  )

  const renderRelatedSection = () => (
    <div className="min-w-[360px]  tb:mt-3 mo:mt-3  pc:col-span-1">
      <h3 className="sr-only">관련된 영상</h3>
      {detailData?.map((item, index) => (
        <RelatedVideo
          key={`${item.id}_${index}`}
          item={item}
          date={dataVariable[index]}
        />
      ))}
    </div>
  )

  return (
    <div className="py-6 px-4 dark:bg-[#202124] dark:text-white pc:grid pc:grid-cols-4 gap-3 lgpc:grid lgpc:grid-cols-4">
      <h2 className="sr-only">유튜브 상세 페이지</h2>

      {/* 왼쪽 윗칸 차지 */}
      <section className="w-full pb-10 flex-shrink pc:col-span-3 lgpc:col-span-3 auto-rows-fr ">
        <h3 className="sr-only">해당 영상</h3>
        <div className="min-w-[360px]">
          <section key={location.state.item.id}>
            <VideoDetailItem
              item={locationRoute}
              imageUrl={locationRoute.thumbnails?.maxres?.url || ""}
              videoId={videoId}
            />
          </section>
        </div>

        {/* 왼쪽 아래칸 차지 */}
        {window.innerWidth > 1024
          ? renderCommentsSection()
          : renderRelatedSection()}
      </section>
      {/* 오른쪽 세로로 두칸 차지 */}
      {window.innerWidth > 1024
        ? renderRelatedSection()
        : renderCommentsSection()}
    </div>
  )
}

export default VideoDetail
