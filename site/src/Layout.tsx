import "./Layout.css";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="layout-container">
        <Link to="">Home</Link>
        <Link to="/page-1">Page 1</Link>
        <Link to="/page-2">Page 2</Link>
      </nav>
      <Outlet />
    </>
  );
}
