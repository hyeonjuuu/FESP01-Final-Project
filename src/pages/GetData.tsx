import React, { useEffect, useState } from "react";
import axios from "axios";

interface VideoData {
  kind: string;
  etag: string;
  items: {
    etag: string;
    id: string;
    kind: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  }[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

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
          <img
            src={item.snippet.thumbnails.default.url}
            width={item.snippet.thumbnails.default.width}
            height={item.snippet.thumbnails.default.height}
          ></img>
          <li>채널이름: {item.snippet.channelId}</li>
          <li>제목: {item.snippet.title}</li>
          <li>상세설명: {item.snippet.description}</li>
          <li>생성날짜: {item.snippet.publishedAt}</li>
        </ul>
      ))}
    </div>
  );
}

export default GetData;
