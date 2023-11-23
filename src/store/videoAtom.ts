import { atom } from "recoil"
import { VideoItem } from "interface"

export const videoAtom = atom<VideoItem[]>({
  key: "videoState",
  default: [],
})
