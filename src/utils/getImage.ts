import React from "react";
import getData from "./getData";

async function getImage(size: string) {
  const data = (await getData()) as VideoData;
  const items = data.items;

  return items.map((item) => {
    switch (size) {
      case "mo":
        return {
          url: item.snippet?.thumbnails.default.url,
          size: "mo",
        };
      case "tb":
        return {
          url: item.snippet?.thumbnails.medium.url,
          size: "tb",
        };
      case "pc":
        return {
          url: item.snippet?.thumbnails.high.url,
          size: "pc",
        };
      case "lgpc":
        return {
          url: item.snippet?.thumbnails.standard.url,
          size: "lgpc",
        };
      default:
        return {
          url: item.snippet.thumbnails.default.url,
          size: "default",
        };
    }
  });
}

export default getImage;
