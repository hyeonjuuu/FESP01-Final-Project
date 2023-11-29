import { Link } from "react-router-dom"
import { VideoItem } from "../interface"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeLow, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import axios from "axios"
import { RecoilEnv, useRecoilState } from "recoil"
import { channelThumbnailAtom } from "@store/channelThumbnailAtom"

// recoil Key 오류 방지
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

interface VideoComponentsProps {
  key: string
  item: VideoItem
  date: string
  page: string
}

function VideoComponents({ item, date, page }: VideoComponentsProps) {
  const [isSound, setIsSound] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const channelId = item.snippet.channelId
  const [channelThumbnail, setChannelThumbnail] = useRecoilState(
    channelThumbnailAtom(channelId),
  )

  const handleSound = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsSound(!isSound)
    e.preventDefault()
  }

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  useEffect(() => {
    const channelDetail = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )

        const channelThumbnailUrl = response.data.items.map(
          (item: any) => item?.snippet?.thumbnails?.high.url,
        )[0]

        setChannelThumbnail(channelThumbnailUrl)
      } catch (error) {
        console.error("Error fetching detail data:", error)
      }
    }

    channelDetail()
  }, [channelId, setChannelThumbnail])

  return (
    <div className="relative">
      <Link to={`/videoDetail/${item.id}`} state={{ item: item }}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          {/* <YoutubeVideo videoId={item.id} /> */}
          {isHovering === true ? (
            <iframe
              id="ytplayer"
              // type="text/html"
              src={`https://www.youtube.com/embed/${item.id}?autoplay=1`}
              frameBorder="0"
              allowFullScreen
              allow="autoplay"
              className="aspect-video w-full"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            ></iframe>
          ) : (
            <img
              src={
                item.snippet.thumbnails.maxres?.url ||
                item.snippet.thumbnails.standard?.url
              }
              alt={item.snippet.title}
              className="mo:flex-shrink rounded-lg hover:rounded-none tb:aspect-video tb:object-cover pc:aspect-video pc:object-cover lgpc:aspect-video lgpc:object-cover"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          )}

          <div className="absolute top-1 right-1 group" onClick={handleSound}>
            {isSound ? (
              <button className="p-2">
                <FontAwesomeIcon
                  icon={faVolumeLow}
                  className="text-white"
                  title="음소거 해제"
                />
              </button>
            ) : (
              <button className="p-2">
                <FontAwesomeIcon
                  icon={faVolumeXmark}
                  className="text-white"
                  title="음소거"
                />
              </button>
            )}
          </div>
        </motion.div>

        <div className="mt-2 mo:mb-3 tb:mb-0 flex gap-2 mo:mt-4 ">
          <img
            src={channelThumbnail}
            alt=""
            className="w-[10%] h-[10%] rounded-full"
          />
          <dl className=" grow-0 w-[90%]">
            <dt className="text-lg font-semibold text-ellipsis overflow-hidden truncate">
              {item.snippet.title}
            </dt>
            <dd className={`text-sm ${page === "main" ? "order-first" : ""}`}>
              {item.snippet.channelTitle}
            </dd>
            <dd className="text-base w-[96%] text-ellipsis overflow-hidden truncate">
              {item.snippet.description}
            </dd>
            <dd className="text-sm">{date}</dd>
          </dl>
        </div>
      </Link>
    </div>
  )
}

export default VideoComponents
