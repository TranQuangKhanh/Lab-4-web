import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) return <Outlet />;
  return <Navigate to="/" replace />;
}
