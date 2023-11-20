import React from "react-router-dom";
import { Outlet } from "react-router-dom";

export const RootLayout = (): JSX.Element => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
