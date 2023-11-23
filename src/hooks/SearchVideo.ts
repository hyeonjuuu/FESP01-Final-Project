import { VideoItem } from "interface"
import { videoAtom } from "@store/videoAtom"
import { useRecoilState, useRecoilValue } from "recoil"
import { searchBarValueAtom } from "@store/searchBarValueAtom"

const searchBarValue = useRecoilValue(searchBarValueAtom)
const [videoData, setVideoData] = useRecoilState<VideoItem[]>(videoAtom)

const handleSearch = () => {
  const filteredData = videoData.filter((video) =>
    video.snippet.title.toLowerCase().includes(searchBarValue.toLowerCase()),
  )
  setVideoData(filteredData)
}

export default handleSearch
