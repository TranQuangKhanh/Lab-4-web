import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import Layout from "./components/Layout";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import PostDetail from "./pages/PostDetail";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

export default function App() {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={theme}>
      <AuthProvider>
        <div>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/home" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="users/:userId" element={<UserProfile />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="post/:postId" element={<PostDetail />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </ThemeContext.Provider>
  );
}
