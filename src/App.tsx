import React from "react";
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
          <Route path="detail/:id" element={<GetDetailData />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
