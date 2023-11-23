import React, { useState } from "react";
import Button from "./Button";

function AddComment() {
  const [text, setText] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Button이 클릭되었습니다.");
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
          <input
            type="text"
            placeholder="댓글 추가..."
            className="w-full border-b-2 mb-2"
            value={text}
            onChange={handleInputChange}
          />
          <div className="flex gap-3 justify-end">
            <Button text={"취소"} type={"button"} onClick={handleCancel} />
            <Button
              text={"등록"}
              type={"submit"}
              onClick={handleCommentSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddComment;
