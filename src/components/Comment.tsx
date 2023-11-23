import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Comment() {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };
  return (
    <div className="w-full">
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

        <div className="w-full flex-col gap-10">
          <div className="flex gap-4">
            <div className="flex gap-2 items-end">
              <p>작성자</p>
              <p className="text-sm">작성일</p>
            </div>
          </div>
          <div className="">
            To the person who is reading this comment, its okay, its alright to
            feel lonely sometimes, if you are going through tough times, keep
            pushing through, but never give up, i wish you great success in
            health, love and happiness!
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
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-slate-200">
              답글
            </div>
          </div>
          <div> ... </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
