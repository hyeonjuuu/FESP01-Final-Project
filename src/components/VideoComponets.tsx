import { Link } from "react-router-dom"
import { VideoItem } from "../interface"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeLow, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import axios from "axios"

interface VideoComponentsProps {
  key: string
  item: VideoItem
  date: string
  page: string
}

function VideoComponents({ item, date, page }: VideoComponentsProps) {
  const [isSound, setIsSound] = useState(false)

  const handleSound = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsSound(!isSound)
    e.preventDefault()
  }

  // useEffect(() => {
  //   const channelDetail = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  //       )

  //       const channelThumbnail = response.data.items.map(
  //         () => item?.snippet?.thumbnails?.maxres.url,
  //       )
  //       console.log(response)

  //       // setTumbnail(channelThumbnail)
  //     } catch (error) {
  //       console.error("Error fetching detail data:", error)
  //     }
  //   }
  // }, [])

  return (
    <div className="relative">
      <Link to={`/videoDetail/${item.id}`} state={{ item: item }}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <img
            src={
              item.snippet.thumbnails.maxres?.url ||
              item.snippet.thumbnails.standard?.url
            }
            alt={item.snippet.title}
            className="mo:flex-shrink rounded-lg hover:rounded-none"
          />
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

        <div className="mt-2 mo:mb-3 tb:mb-0">
          <dl>
            {/* <img src={thumbnail} alt="" className="w-5 h-5" /> */}
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
