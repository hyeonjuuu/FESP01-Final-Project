import YouTube from "react-youtube"
// import axios from "axios"

interface YoutubeVideoProps {
  videoId: string
}

function YoutubeVideo({ videoId }: YoutubeVideoProps) {
  // const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null)

  const onPlayerReady = (event: any) => {
    event.target.pauseVideo()
  }

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div>
      {/* {thumbnailUrl && (
        <img
          alt="Video Thumbnail"
          style={{ width: "100%" }}
        />
      )} */}
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    </div>
  )
}

export default YoutubeVideo
