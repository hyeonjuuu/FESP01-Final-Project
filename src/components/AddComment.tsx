import React, { useRef, useState } from "react";
import Button from "./Button";

function AddComment() {
  const [state, setState] = useState(false);
  const [text, setText] = useState<string>("");
  const divRef = useRef<HTMLDivElement>(null);

  const handleInputFocus = () => {
    setState(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setText(e.target.innerText);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setState(false);
    setText("");
    // if (divRef.current) {
    // divRef.current.innerText = "";
    // }
  };

  const handleCommentSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("댓글 등록:", text);
    setText("");
    // if (divRef.current) {
    // divRef.current.innerText = "";
    // }
  };

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
            ref={divRef}
            contentEditable="true"
            placeholder="댓글 추가..."
            className={`w-full border-b-2 mb-2 focus:outline-none focus:border-b-slate-500 ${
              text ? "h-auto" : "h-[30px]"
            } placeholder-${text ? "hidden" : "visible"}`}
            onFocus={handleInputFocus}
            onInput={handleInputChange}
          >
            {text ? text : "댓글 추가..."}
          </div>

          {state && (
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
  );
}

export default AddComment;
