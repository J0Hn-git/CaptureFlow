export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards: VideoCardProps[] = [
  {
    id:"1",
    title:"CaptureFlow Message",
    thumbnail:"/assets/samples/thumbnail (1).png",
    createdAt:new Date("2025-05-22"),
    userImg:"/assets/images/jason.png",
    username:"Jason",
    views:10,
    visibility:"public",
    duration:156,
  },
  {
    id: "2",
    title: "How to use the Screen Recorder",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-06-01"),
    userImg: "/assets/images/alex.png",
    username: "Alex Kalt",
    views: 142,
    visibility: "public",
    duration: 320,
  },
  {
    id: "3",
    title: "New Feature Walkthrough: Folders",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-06-15"),
    userImg: "/assets/images/david.png",
    username: "David",
    views: 89,
    visibility: "public",
    duration: 45,
  },
  {
    id: "4",
    title: "Quick Sync with Design Team",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-06-18"),
    userImg: "/assets/images/emily.png",
    username: "Emily",
    views: 12,
    visibility: "public",
    duration: 612,
  },
  {
    id: "5",
    title: "CaptureFlow Landing Page Feedback",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-06-20"),
    userImg: "/assets/images/jessica.png",
    username: "Jessica",
    views: 56,
    visibility: "public",
    duration: 215,
  },
  {
    id: "6",
    title: "API Integration Tutorial",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-06-22"),
    userImg: "/assets/images/lisa.png",
    username: "Lisa",
    views: 230,
    visibility: "public",
    duration: 1240,
  },
  {
    id: "7",
    title: "Monday Morning Standup",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-06-23"),
    userImg: "/assets/images/michael.png",
    username: "Micheal",
    views: 5,
    visibility: "public",
    duration: 88,
  },
  {
    id: "8",
    title: "App Demo for Stakeholders",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-06-24"),
    userImg: "/assets/images/sarah.png",
    username: "Sarah",
    views: 115,
    visibility: "public",
    duration: 402,
  }
]