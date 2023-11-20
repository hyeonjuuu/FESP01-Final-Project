import React from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../header";

export const RootLayout = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
