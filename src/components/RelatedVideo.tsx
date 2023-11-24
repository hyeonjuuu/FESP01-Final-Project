import { VideoItem } from "interface"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

interface RelatedVideoProps {
  key: string
  item: VideoItem
  date: string
}

function RelatedVideo({ item, date }: RelatedVideoProps) {
  const titleRef = useRef<HTMLDivElement>(null)
  const [isTitleClamped, setIsTitleClamped] = useState(false)

  useEffect(() => {
    if (titleRef.current) {
      // 클램프된 높이를 계산
      const lineHeight = parseInt(
        getComputedStyle(titleRef.current).lineHeight,
        10,
      )
      const maxLines = 2 // 최대 두 줄로 설정
      const maxHeight = lineHeight * maxLines

      // 제목의 높이가 최대 높이를 초과하면 클램프
      setIsTitleClamped(titleRef.current.offsetHeight > maxHeight)
    }
  }, [item.snippet.title])

  return (
    <>
      <Link to={`/videoDetail/${item.id}`} state={{ item: item }}>
        <div className="flex pb-2">
          <div className="min-w-[168px] h-[94px]">
            <img
              src={item.snippet.thumbnails.high.url}
              alt={item.snippet.title}
              className="w-full h-full border-neutral-500 border-[0.5px] object-cover rounded-lg"
            ></img>
          </div>

          <div className="pl-2 mo:w-[70%] tb:w-full bg-yellow-300">
            <dl className="flex flex-col bg-blue-100 h-[94px] max-h-[94px]">
              <dt
                className={`text-sm bg-orange-400 w-[230px] ${
                  isTitleClamped ? "line-clamp-2" : "whitespace-pre-wrap"
                }`}
                ref={titleRef}
              >
                {item.snippet.title}
              </dt>
              <dd className="text-sm">{item.snippet.channelTitle}</dd>
              <dd className="text-sm">{date}</dd>
            </dl>
          </div>
        </div>
      </Link>
    </>
  )
}

export default RelatedVideo
