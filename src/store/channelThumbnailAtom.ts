import { atom } from "recoil"

export const channelThumbnailAtom = (channelId: string) =>
  atom({
    key: `channelThumbnailStore_${channelId}`,
    default: undefined,
  })
