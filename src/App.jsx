import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

// Lazy load components for better performance
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Projects = lazy(() => import("./Pages/Projects").then(module => ({ default: module.Projects })));
const Blogs = lazy(() => import("./Pages/Blogs"));
const Contact = lazy(() => import("./Pages/Contact"));
const NotFound = lazy(() => import("./Pages/NotFound"));

const AddBlog = lazy(() => import("./Components/Blogs/AddBlog"));
const Login = lazy(() => import("./auth/Login"));
const Signup = lazy(() => import("./auth/Signup"));
const ProtectedRoute = lazy(() => import("./auth/ProtectedRoute"));
const ProtectBlog = lazy(() => import("./auth/ProtectBlog"));
const BlogDetailsContainer = lazy(() => import("./Components/Blogs/SingleBlogContainer"));
const UpdateBlog = lazy(() => import("./Components/Blogs/UpdateBlog"));
const PageLoader = lazy(() => import("./Components/Loader/PageLoader"));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
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
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
