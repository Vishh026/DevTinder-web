import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Layout from "../components/Layout";
import Profile from "./Profile";
import AppHome from "./AppHome";
import Connection from "./Connection";
import Request from "./Request";

const MainRoutes = () => {
  return (
    <Routes>
      {/* public Routes */}
      <Route path="/login" element={<Login />} />

      {/* protected Routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<AppHome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connections" element={<Connection />} />
        <Route path="/requests" element={<Request />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
