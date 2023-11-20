import React, { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "./layout/RootLayout/RootLayout";
import GetData from "./pages/GetData";
import GetDetailData from "./pages/GetDetailData";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<GetData />} />
      <Route path="detail/:id" element={<GetDetailData />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
