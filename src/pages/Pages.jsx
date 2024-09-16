import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Blog from "./Blog";
import Blogs from "./Blogs";
import NotFound from "./NotFound";


export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blogs/>} />
      <Route path="/blog/:slug" element={<Blog/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}
