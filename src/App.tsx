import React from "react";
import "./tailwind.css";
import VideoMain from "./pages/VideoMain";
import VideoDetail from "./pages/VideoDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout/RootLayout";
import GetData from "./pages/GetData";
import GetDetailData from "./pages/GetDetailData";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<GetData />} />
          <Route path="videoDetail" element={<VideoDetail />} />
          <Route path="videoMain" element={<VideoMain />} />
          <Route path="detail/:id" element={<GetDetailData />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
