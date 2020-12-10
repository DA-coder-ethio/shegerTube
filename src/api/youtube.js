import axios from "axios";

const KEY = "AIzaSyBiwBf7n91rVmr__Up4IM1TagbQSsNZNgA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 20,
    key: KEY,
  },
});
