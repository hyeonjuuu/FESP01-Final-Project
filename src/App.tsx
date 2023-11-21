import "./tailwind.css";
import React from "react";
// import GetData from "@pages/GetData";
import NotFound from "@pages/NotFound";
import VideoMain from "@pages/VideoMain";
import VideoDetail from "@pages/VideoDetail";
import GetDetailData from "@pages/GetDetailData";
import { RootLayout } from "@layout/RootLayout/RootLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* <Route index element={<GetData />} /> */}
          <Route path="videoDetail" element={<VideoDetail />} />
          <Route index element={<VideoMain />} />
          <Route path="detail/:id" element={<GetDetailData />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
