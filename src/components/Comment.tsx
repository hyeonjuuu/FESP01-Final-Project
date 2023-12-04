import { useEffect, useState } from "react"
import { CommentProps } from "interface"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import formatDateDifference from "@api/formatDateDifference"
import { deleteComment, modifyComment } from "@api/commentApi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons"
import axios from "axios"

function Comment({ text, date, commentId, optionBtnCallback }: CommentProps) {
  const [count, setCount] = useState(0)
  const [modifyChecked, setModifyChecked] = useState(false)
  const [isBarsVisible, setIsBarsVisible] = useState(false)
  const [isButtonsVisible, setIsButtonsVisible] = useState(false)
  const [modifyCommentText, setModifyCommentText] = useState<string>("")
  const [profileImg, setProfileImg] = useState<string>("")

  const createdDate = formatDateDifference(date)

  const handleLike = () => {
    setCount(count + 1)
  }

  const handleBarsClick = () => {
    setIsButtonsVisible(!isButtonsVisible)
  }

  const handleEditClick = async () => {
    setModifyChecked((prevBtn) => !prevBtn)
    if (!modifyChecked) return
    else await modifyComment(commentId, modifyCommentText)
    optionBtnCallback()
    alert("댓글이 수정되었습니다! 🛠️")
  }

  const handleDeleteClick = async () => {
    await deleteComment(commentId)
    optionBtnCallback()
    alert("댓글이 삭제되었습니다!")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setModifyCommentText(e.target.value)
  }

  function generateRandomThreeDigitNumber() {
    // 100부터 999까지의 랜덤 정수 생성
    const randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100
    return randomNumber
  }

  const randomThreeDigitNumber = generateRandomThreeDigitNumber()

  useEffect(() => {
    const getProfileImg = async () => {
      try {
        const response = await axios.get(
          `https://picsum.photos/id/${randomThreeDigitNumber}/200/300`,
          // `https://picsum.photos/200/300`,
        )
        // console.log(response)

        setProfileImg(response.config.url!)
      } catch (error) {
        console.error(`❌ 에러가 발생하였습니다 : ${error}`)
        throw error
      }
    }

    getProfileImg()
  }, [])

  return (
    <div className="w-full">
      <div
        className="max-h-[142px] flex"
        onMouseEnter={() => setIsBarsVisible(true)}
        onMouseLeave={() => {
          isBarsVisible &&
            !isButtonsVisible &&
            (setIsBarsVisible(false), setIsButtonsVisible(false))
        }}
      >
        <div className="h-auto pr-4">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            {/* <img
              src={getProfileImg()}
              alt="프로필 사진"
              className="w-full h-full object-cover"
            ></img> */}
            {profileImg && (
              <img
                src={profileImg}
                alt="프로필 사진"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        <div className="w-full flex-col gap-10">
          <div className="flex justify-between">
            <div>
              <div className="flex gap-4">
                <div className="flex gap-2 items-end">
                  <p>{commentId}</p>
                  <p className="text-sm">{createdDate}</p>
                </div>
              </div>
              {modifyChecked ? (
                <textarea
                  className="w-full border-b-2 mb-2 focus:outline-none focus:border-b-slate-500 overflow-hidden resize-none"
                  defaultValue={text}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{text}</div>
              )}
              <div className="flex gap-5">
                <div className="flex items-center justify-center">
                  <div
                    onClick={handleLike}
                    className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-slate-200"
                  >
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div>
                  {count}
                </div>
                <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-slate-200">
                  <FontAwesomeIcon icon={faThumbsDown} />
                </div>
                <div className="w-[42px] h-[32px] flex items-center justify-center rounded-full hover:bg-slate-200">
                  답글
                </div>
              </div>
            </div>
            <div className="min-w-[30px] flex-col items-center justify-center">
              {isBarsVisible && (
                <div className="flex items-center justify-center">
                  <button className="" onClick={handleBarsClick}>
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                </div>
              )}

              {isBarsVisible && isButtonsVisible && (
                <div className="flex-col items-center justify-center py-2">
                  <div className="flex items-center justify-center pb-2">
                    <button onClick={handleEditClick} className="text-sm ">
                      {modifyChecked ? "수정완료" : "댓글수정"}
                    </button>
                  </div>

                  <div className="flex items-center justify-center">
                    <button onClick={handleDeleteClick} className="text-sm ">
                      삭제
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
