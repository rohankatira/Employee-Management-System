import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

// AUTH FUNCTIONS
export const login = (user = "manager") => {
  const authData = {
    isLoggedIn: true,
    user,
  };
  localStorage.setItem("auth", JSON.stringify(authData));
};

export const logout = () => {
  localStorage.removeItem("auth");
};

export const isAuthenticated = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth?.isLoggedIn === true;
};

export const getAuthUser = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth?.user || null;
};

// AUTH GUARD COMPONENT
export const AuthGuard = ({ children, role = null }) => {
  const user = getAuthUser();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (role && user !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// UNAUTHORIZED PAGE
export const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #0072ff, #00c6ff)",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        className="card text-center p-5 shadow-lg"
        style={{ maxWidth: "500px", borderRadius: "20px" }}
      >
        <h2 className="text-danger mb-3"> Access Denied</h2>
        <p className="mb-4">You do not have permission to view this page.</p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};
