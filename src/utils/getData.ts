import axios from "axios";
import React, { useEffect, useState } from "react";

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
