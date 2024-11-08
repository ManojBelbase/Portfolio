import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Projects } from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import AddBlog from "./Components/Blogs/AddBlog";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/create" element={<AddBlog />} />
      </Route>
    </Routes>
  );
}

export default App;
