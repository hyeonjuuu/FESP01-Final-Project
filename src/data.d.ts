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
      channelTitle: string;
    };
  }[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

interface VideoDetailData {
  items: Array<{
    id: { videoId: string };
    snippet: {
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
      title: string;
      description: string;
      publishedAt: string;
    };
  }>;
}
