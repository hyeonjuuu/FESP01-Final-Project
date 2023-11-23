import { atom, selector } from "recoil"
import { videoAtom } from "./videoAtom"

export const searchBarValueAtom = atom({
  key: "searchBarValue",
  default: "",
})

export const filteredVideoDataSelector = selector({
  key: "filteredVideoData",
  get: ({ get }) => {
    const searchBarValue = get(searchBarValueAtom)
    const videoData = get(videoAtom)

    return videoData.filter((video) =>
      video.snippet.title.toLowerCase().includes(searchBarValue.toLowerCase()),
    )
  },
})
