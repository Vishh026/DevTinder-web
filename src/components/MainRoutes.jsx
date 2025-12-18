import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../components/Feed";
import Login from "../components/Login";
import Layout from "../components/Layout"
import Profile from "./Profile";
import Body from "./Body";
import Connection from "./Connection";
import Request from "./Request";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
       <Route path= "/" element = {<Body />} />
        <Route path="/login" element={<Login />} />
      <Route path="/profile" element= {<Profile />} />
      <Route path="/connections" element= {<Connection />} />
      <Route path="/requests" element= {<Request />} />


      </Route>
    </Routes>
  );
};

export default MainRoutes;
