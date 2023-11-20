import React from "react";
import "./tailwind.css";
import VideoMain from "./layout/VideoMain";
import VideoDetail from './layout/VideoDetail';

function App() {
  return (
    <div>
      {/* <h1 className="text-red-400">안녕</h1> */}
      <VideoMain />
      <VideoDetail />
    </div>
  );
}

export default App;
