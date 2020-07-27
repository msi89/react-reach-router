import React from "react";
import { Router } from "@reach/router";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import ServicesPage from "../pages/services";
import LoginPage from "../pages/login";
import PostsPage from "../pages/posts/index";
import PostDetailPage from "../pages/posts/detail";
import NotFoundPage from "../pages/404";
import { Route, ProtectedRoute, NestedRoute } from "./routes";

const defaultRouter = () => {
  return (
    <Router>
      {/* <HomePage path="/" />
      <AboutPage path="/about" />
      <ContactPage path="/contact" />
      <ServicesPage path="/services"></ServicesPage>
      <LoginPage path="/login" />
      <PostsPage path="/posts" />
      <PostsPage path="/posts/:postId" />
      <NotFoundPage default /> */}
      <Route path="/" element={HomePage} />
      <ProtectedRoute path="/about" element={AboutPage} />
      <Route path="/services" element={ServicesPage} />
      <ProtectedRoute path="/contact" element={ContactPage} />
      <NestedRoute path="/posts">
        <ProtectedRoute element={PostsPage} path="/" />
        <ProtectedRoute element={PostDetailPage} path=":postId" />
      </NestedRoute>
      <Route path="/login" element={LoginPage} />
      <Route default element={NotFoundPage} />
    </Router>
  );
};

export default defaultRouter;
