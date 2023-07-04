import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Blog from "./Blog";
import Blogs from "./Blogs";


export default function Pages() {
  return (
    <Routes>
      <Route path="/zhansen" element={<Home/>} />
      <Route path="/zhansen/blog" element={<Blogs/>} />
      <Route path="/zhansen/blog/:id" element={<Blog/>} />
    </Routes>
  );
}
