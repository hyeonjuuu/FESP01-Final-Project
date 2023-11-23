import React from "react";
import Button from "./Button";

function AddComment() {
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
          />
          <div className="flex gap-3 justify-end pr-2">
            <Button text={"취소"} type={"button"} />
            <Button text={"등록"} type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddComment;
