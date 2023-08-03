import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { LayoutContainer } from "./style";

export function Layout() {
  return (
    <div>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </div>
  )
}