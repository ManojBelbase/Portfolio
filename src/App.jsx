import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Projects } from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import AddBlog from "./Components/Blogs/AddBlog";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ProtectedRoute from "./auth/ProtectedRoute";
import { ProtectBlog } from "./auth/ProtectBlog";
import BlogDetailsContainer from "./Components/Blogs/SingleBlogContainer";
import UpdateBlog from "./Components/Blogs/UpdateBlog";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetailsContainer />} />
        <Route path="/blog/update/:id" element={<UpdateBlog />} />
        <Route
          path="/blog/create"
          element={
            <ProtectBlog>
              <AddBlog />
            </ProtectBlog>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute>
              <Signup />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
