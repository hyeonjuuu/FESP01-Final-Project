import React, { useState } from "react";
import Button from "./Button";

function AddComment() {
  const [state, setState] = useState(false);
  const [text, setText] = useState<string>("");

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
  };

  const handleCommentSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("댓글 등록:", text);
    setText("");
  };

  return (
    <div className="w-full pb-2">
      <div className="max-h-[142px] flex">
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
          {/* <textarea
            placeholder="댓글 추가..."
            className={`w-full border-b-2 mb-2 focus:outline-none focus:border-b-slate-500 ${
              text ? "h-auto" : "h-[30px]"
            }`}
            value={text}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
          /> */}
          <div
            contentEditable="true"
            placeholder="댓글 추가..."
            className={`w-full border-b-2 mb-2 focus:outline-none focus:border-b-slate-500 ${
              text ? "h-auto" : "h-[30px]"
            }`}
            onFocus={handleInputFocus}
            onInput={handleInputChange}
          ></div>

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
