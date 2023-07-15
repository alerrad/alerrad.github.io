import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Blog from "./Blog";
import Blogs from "./Blogs";


export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blogs/>} />
      <Route path="/blog/:slug" element={<Blog/>} />
    </Routes>
  );
}
