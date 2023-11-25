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
  const [limitTitle, setLimitTitle] = useState(false)

  useEffect(() => {
    if (titleRef.current) {
      const lineHeight = parseInt(
        getComputedStyle(titleRef.current).lineHeight,
        10,
      )
      const maxLines = 1
      const maxHeight = lineHeight * maxLines

      setLimitTitle(titleRef.current.offsetHeight > maxHeight)
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

          <div className="pl-2 mo:w-[70%] tb:w-full ">
            <dl className="flex flex-col  h-[94px] max-h-[94px]">
              <dt
                className={`text-sm  pc:w-[230px] ${
                  limitTitle
                    ? "pc:line-clamp-2 lgpc:line-clamp-2 text-ellipsis overflow-clip"
                    : "pc:whitespace-pre-wrap lgpc:whitespace-pre-wrap max-h-[60px]"
                }`}
                ref={titleRef}
              >
                {item.snippet.title}
              </dt>
              <dd className="text-xs mt-[4px] text-gray-500">
                {item.snippet.channelTitle}
              </dd>
              <dd className="text-xs text-gray-500">{date}</dd>
            </dl>
          </div>
        </div>
      </Link>
    </>
  )
}

export default RelatedVideo
