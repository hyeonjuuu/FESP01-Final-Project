import axios from "axios";

async function getData() {
  try {
    const response = await axios.get("/videos/popular.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default getData;
