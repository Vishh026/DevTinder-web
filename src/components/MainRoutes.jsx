import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../components/Feed";
import Login from "../components/Login";
import Layout from "../components/Layout"
import Profile from "./Profile";
import Body from "./Body";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
       <Route path= "/" element = {<Body />} />
        <Route path="/login" element={<Login />} />
      <Route path="/profile" element= {<Profile />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
