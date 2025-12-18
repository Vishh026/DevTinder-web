import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-800 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
