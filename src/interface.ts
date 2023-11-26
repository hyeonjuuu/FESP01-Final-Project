export interface VideoListResponse {
  kind: string
  etag: string
  items: VideoItem[]
}

export interface VideoItem {
  kind: string
  etag: string
  id: string
  snippet: VideoSnippet
}

export interface AddCommentProps {
  videoId: string
}

export interface readCommentItem {
  anonymous_user_id: string
  created_at: string
  id: number
  text: string
  video_id: string
}

export interface VideoSnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: VideoThumbnails
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  defaultLanguage: string
  localized: {
    title: string
    description: string
  }
  defaultAudioLanguage: string
}

export interface VideoThumbnails {
  default: VideoThumbnail
  medium: VideoThumbnail
  high: VideoThumbnail
  standard: VideoThumbnail
  maxres: VideoThumbnail
}

export interface VideoThumbnail {
  url: string
  width: number
  height: number
}

export interface VideoSearchResult {
  kind: string
  etag: string
  id: {
    kind: string
    videoId: string
  }
  snippet: VideoSnippet
}
