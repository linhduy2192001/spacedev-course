import React from "react";
import { Navigate, Outlet } from "react-router";

export default function PrivateRouter({ user, redirect = "/" }) {
  if (!user) return <Navigate to={redirect} />;
  return <Outlet />;
}
