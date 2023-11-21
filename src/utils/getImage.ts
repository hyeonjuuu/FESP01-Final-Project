import React from "react";
import getData from "./getData";

// interface Thumbnail {
//   url: string;
//   width: number;
//   height: number;
// }

// interface Snippet {
//   thumbnails: {
//     default: Thumbnail;
//     medium: Thumbnail;
//     high: Thumbnail;
//     standard: Thumbnail;
//   };
// }

// interface Item {
//   snippet: Snippet;
// }

// interface VideoData {
//   kind: string;
//   etag: string;
//   items: Item[];
//   nextPageToken: string;
//   pageInfo: {
//     totalResults: number;
//     resultsPerPage: number;
//   };
// }

async function getImage(size: string) {
  const data = (await getData()) as VideoData;
  const items = data.items;
  // console.log("data.items: ", data.items);
  return items.map((item) => {
    switch (size) {
      case "sm":
        return {
          url: item.snippet?.thumbnails.default.url,
          size: "sm",
        };
      case "md":
        return {
          url: item.snippet?.thumbnails.medium.url,
          size: "md",
        };
      case "lg":
        return {
          url: item.snippet?.thumbnails.high.url,
          size: "lg",
        };
      case "xl":
        return {
          url: item.snippet?.thumbnails.standard.url,
          size: "xl",
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
