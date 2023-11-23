import React from "react";

function Comment() {
  return (
    <div className="w-full bg-yellow-200">
      <div className="max-h-[142px] flex">
        <div className="h-auto pr-4 bg-green-300">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src="/smile.png"
              alt="프로필 사진"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>

        <div className="bg-pink-200 w-full flex-col gap-10">
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
            <div>👍</div>
            <div>👇</div>
            <div>❤️</div>
            <div>답글</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
