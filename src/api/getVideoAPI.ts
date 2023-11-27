import axios from "axios"

const getVideoAPI = async () => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyDoW3HmMMQQrkgCaem0GV8phmPhm7n9I4o",
    )
    return response.data.items
  } catch (error) {
    console.error(`❌ 에러가 발생하였습니다 : ${error}`)
    throw error
  }
}

export default getVideoAPI
