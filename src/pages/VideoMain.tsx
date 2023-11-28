import { CommentType, VideoItem } from "../interface"
import { useEffect, useState } from "react"
import { videoAtom } from "@store/videoAtom"
import getVideoData from "@api/getVideoData"
import { useRecoilState, useRecoilValue } from "recoil"
import VideoComponents from "@components/VideoComponets"
import formatDateDifference from "@api/formatDateDifference"
import { searchBarValueAtom } from "@store/searchBarValueAtom"
// import getVideoAPI from "@api/getVideoAPI"

function VideoMain() {
  const searchBarValue = useRecoilValue(searchBarValueAtom)
  const [scrollFetching, setScrollFetching] = useState(false)
  const [videoData, setVideoData] = useRecoilState<VideoItem[]>(videoAtom)
  const [dataVariable, setDataVariable] = useState<string[]>([])

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await getVideoData()
        const formattedDates = response.map((item: VideoItem) => {
          return formatDateDifference(item.snippet.publishedAt)
        })

        setVideoData(response)
        setDataVariable(formattedDates)
      } catch (error) {
        console.error(`❌ 에러가 발생하였습니다 : ${error}`)
      }
    }

    dataFetching()
  }, [setVideoData])

  const fetchMoreData = async () => {
    try {
      setScrollFetching(true)
      const moreData = await getVideoData()
      setVideoData((prevData) => [...prevData, ...moreData])

      const formattedDates = moreData.map((item: VideoItem) => {
        return formatDateDifference(item.snippet.publishedAt)
      })
      setDataVariable((prevDates) => [...prevDates, ...formattedDates])
    } catch (error) {
      console.error(`❌ 에러가 발생하였습니다 : ${error}`)
    } finally {
      setScrollFetching(false)
    }
  }

  const filteredData = videoData.filter((video) =>
    video.snippet.title.toLowerCase().includes(searchBarValue.toLowerCase()),
  )

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight

    if (scrollTop + clientHeight >= scrollHeight && !scrollFetching) {
      fetchMoreData()
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="py-6 px-8 dark:bg-[#202124] dark:text-white">
      <h1 className="sr-only">유튜브 목록 페이지</h1>

      <section className="flex flex-col mx-auto tb:grid tb:grid-flow-row tb:grid-cols-2 pc:grid pc:grid-cols-3 lgpc:grid lgpc:grid-cols-4 gap-4 min-w-[360px]">
        {filteredData?.map((item, index) => (
          <VideoComponents
            page="main"
            key={`${item.id}_${index}`}
            item={item}
            date={dataVariable[index]}
          />
        ))}
      </section>
    </div>
  )
}

export default VideoMain
