export interface VideoListResponse {
  kind: string;
  etag: string;
  items: VideoItem[];
}

export interface VideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: VideoSnippet;
}

export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: VideoThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

export interface VideoThumbnails {
  default: VideoThumbnail;
  medium: VideoThumbnail;
  high: VideoThumbnail;
  standard: VideoThumbnail;
  maxres: VideoThumbnail;
}

export interface VideoThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface VideoSearchResult {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: VideoSnippet;
}
