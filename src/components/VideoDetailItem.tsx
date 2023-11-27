import { useState } from "react"
import { VideoSnippet } from "interface"

export interface VideoDetailItemProps {
  item: VideoSnippet
  imageUrl: string
}

function VideoDetailItem({ item, imageUrl }: VideoDetailItemProps) {
  const [viewMore, setViewMore] = useState(false)

  const viewDescription = () => {
    if (!viewMore) {
      const firstLine = item.description.split("\n")[0]
      return <span className=" block mb-2">{firstLine}</span>
    } else {
      return (
        <span className="whitespace-pre-line block mb-2">
          {item.description}
        </span>
      )
    }
  }

  return (
    <>
      <img
        src={imageUrl}
        alt=""
        aria-labelledby="title"
        className="w-full h-auto min-w-[360px] rounded-lg"
      />
      <li id="title" className="text-lg font-semibold  tb:w-full min-w-[360px]">
        {item.title}
      </li>
      <li className="text-sm  tb:w-full min-w-[360px]">{item.channelTitle}</li>
      <li
        className={`bg-[#F2F2F2] text-base  tb:w-full min-w-[360px] p-6 rounded-md mt-1 cursor-pointer`}
        onClick={() => setViewMore(!viewMore)}
      >
        {viewDescription()}
        <span className="text-gray-500">
          {viewMore === false ? "더보기..." : "간략히"}
        </span>
      </li>
    </>
  )
}

export default VideoDetailItem
