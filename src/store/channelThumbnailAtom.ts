import { atom } from "recoil"

export const channelThumbnailAtom = (channelId: string) => {
  const key = `channelThumbnailStore_${channelId}`
  return atom({
    key,
    default: "", // 빈 문자열로 변경
  })
}
