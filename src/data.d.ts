interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  channelTitle: string;
  localized: {
    title: string;
    description: string;
  };
}

interface Item {
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
}

interface VideoData {
  kind: string;
  etag: string;
  items: Item[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

interface VideoDetailData {
  items: Array<{
    id: { videoId: string };
    snippet: Snippet;
  }>;
}

interface VideoComponentsProps {
  detail: string;
  page: string;
  // size: string;
  item: Item;
}
