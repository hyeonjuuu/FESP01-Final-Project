import React, { useEffect, useRef, useState } from "react"
import Button from "./Button"
import { focusContentEditableTextToEnd } from "@utils/focusContentEditableTextToend"

function AddComment() {
  const [isState, setIsState] = useState(false)
  const [content, setContent] = useState<string>("댓글 추가...")
  const contentRef = useRef<HTMLDivElement>(null)

  const handleInputFocus = () => {
    setIsState(true)
    setContent("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setContent(e.target.innerText)
    focusContentEditableTextToEnd(contentRef.current!)
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsState(false)
    setContent("댓글 추가...")
  }

  const handleCommentSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("댓글 등록:", content)
    setContent("")
  }

  return (
    <div className="w-full pb-2">
      <div className="h-auto flex">
        <div className="h-auto pr-4">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src="/smile.png"
              alt="프로필 사진"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>

        <form className=" w-full flex-col gap-10">
          <div
            className={`w-full border-b-2 mb-2 focus:outline-none focus:border-b-slate-500 ${
              content ? "h-auto" : "h-[30px]"
            }`}
            ref={contentRef}
            contentEditable="true"
            onFocus={handleInputFocus}
            onInput={handleInputChange}
          >
            {content}
          </div>

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
                  content
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700"
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
