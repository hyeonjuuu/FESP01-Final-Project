import { atom } from "recoil"
import { readCommentItem } from "interface"

export const commetnAtom = atom<readCommentItem[]>({
  key: "commetnState",
  default: [],
})
