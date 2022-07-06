import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = () => {
    const { authed } = useAuth();

  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute