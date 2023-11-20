import React from "react";
import "./tailwind.css";
import VideoMain from "./layout/VideoMain";
import VideoDetail from "./layout/VideoDetail";
import Header from "./layout/Header";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <VideoMain />
      <VideoDetail />
    </div>
  );
}

export default App;
