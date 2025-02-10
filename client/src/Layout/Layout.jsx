

import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar/Topbar";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Topbar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;