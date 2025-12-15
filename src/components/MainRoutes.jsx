import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../components/Feed";
import Login from "../components/Login";
import Layout from "../components/Layout"

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Feed />} />
      </Route>
      <Route path= "/login" element = {<Login />} />
    </Routes>
  );
};

export default MainRoutes;
