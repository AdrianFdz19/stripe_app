// LayerWithHeader.tsx'

import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function LayerWithHeader() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}
