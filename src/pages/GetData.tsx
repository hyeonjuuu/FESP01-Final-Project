import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GetData() {
  const [data, setData] = useState<VideoData | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/videos/popular.json");
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>영상 목록</h1>
      {data?.items.map((item) => (
        <ul key={item.id}>
          {/* 채널id : {item.snippet.channelId} */}
          <Link
            to={`/detail/${item.id}`}
            state={{ channelId: item.snippet.channelId }}
          >
            <img
              src={item.snippet.thumbnails.default.url}
              alt=""
              width={item.snippet.thumbnails.default.width}
              height={item.snippet.thumbnails.default.height}
              aria-labelledby="title"
            ></img>
          </Link>
          <li>채널이름: {item.snippet.channelTitle}</li>
          <li id="title">제목: {item.snippet.title}</li>
          <li>상세설명: {item.snippet.description}</li>
          <li>생성날짜: {item.snippet.publishedAt}</li>
        </ul>
      ))}
    </div>
  );
}

export default GetData;
