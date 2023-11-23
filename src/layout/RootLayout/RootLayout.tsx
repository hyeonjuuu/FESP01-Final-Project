import { Outlet } from "react-router-dom";
import Header from "../Header";

export const RootLayout = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
