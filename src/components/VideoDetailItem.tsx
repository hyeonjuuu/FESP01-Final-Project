import { VideoSnippet } from "interface";

export interface VideoDetailItemProps {
  item: VideoSnippet;
  imageUrl: string;
}

function VideoDetailItem({ item, imageUrl }: VideoDetailItemProps) {
  return (
    <>
      <img
        src={imageUrl}
        alt=""
        aria-labelledby="title"
        className="w-full h-auto mx-auto min-w-[360px]"
      />
      <li
        id="title"
        className="text-lg font-semibold mo:w-[70%] tb:w-full mx-auto min-w-[360px]"
      >
        영상 제목: {item.title}
      </li>
      <li className="text-sm mo:w-[70%] tb:w-full mx-auto min-w-[360px]">
        채널 이름: {item.channelTitle}
      </li>
      <li className="text-base mo:w-[70%] tb:w-full mx-auto min-w-[360px] text-ellipsis overflow-hidden truncate">
        상세 내용: {item.description}
      </li>
    </>
  );
}

export default VideoDetailItem;
