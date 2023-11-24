import React, { useEffect, useRef, useState } from "react"
import Button from "./Button"

function AddComment() {
  const [isState, setIsState] = useState(false)
  const [text, setText] = useState<string>("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInputFocus = () => {
    setIsState(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsState(false)
    setText("")
  }

  const handleCommentSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("댓글 등록:", text)
    setText("")
  }

  // useEffect를 사용하여 텍스트가 변경될 때마다 높이를 조절합니다.
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "30px"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [text])

  return (
    <div className="w-full pb-2">
      <div className="h-auto flex">
        <div className="min-h-[102px] pr-4">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src="/smile.png"
              alt="프로필 사진"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>

        <form className=" w-full flex-col gap-10">
          <textarea
            ref={textareaRef}
            placeholder="댓글 추가..."
            className="w-full border-b-2 mb-2 focus:outline-none focus:border-b-slate-500 overflow-hidden resize-none"
            value={text}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
          />

          {isState && (
            <div className="flex gap-3 justify-end">
              <Button
                text={"취소"}
                type={"button"}
                onClick={handleCancel}
                activeClass="hover:bg-slate-200"
              />
              <Button
                text={"등록"}
                type={"submit"}
                onClick={handleCommentSubmit}
                color={
                  text ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
                }
              />
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default AddComment