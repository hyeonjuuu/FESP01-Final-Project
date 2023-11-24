import { useState } from "react"
import { deleteComment } from "@api/commentApi"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons"

function Comment() {
  const [count, setCount] = useState(0)
  const [isBarsVisible, setIsBarsVisible] = useState(false)
  const [isButtonsVisible, setIsButtonsVisible] = useState(false)

  const handleLike = () => {
    setCount(count + 1)
  }

  const handleBarsClick = () => {
    setIsButtonsVisible(!isButtonsVisible)
  }

  const handleEditClick = () => {
    console.log("Edit clicked!")
    // 여기에 수정 로직 추가
  }

  const handleDeleteClick = () => {
    console.log("Delete clicked!")
    deleteComment(19)
  }

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
            <img
              src="/smile.png"
              alt="프로필 사진"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>

        <div className="w-full flex-col gap-10">
          <div className="flex">
            <div>
              <div className="flex gap-4">
                <div className="flex gap-2 items-end">
                  <p>작성자</p>
                  <p className="text-sm">작성일</p>
                </div>
              </div>
              <div className="">
                To the person who is reading this comment, its okay, its alright
                to feel lonely sometimes, if you are going through tough times,
                keep pushing through, but never give up, i wish you great
                success in health, love and happiness!
              </div>
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
                      수정
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
