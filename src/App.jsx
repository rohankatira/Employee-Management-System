import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EmployeePage from "./pages/EmployeePage";
import NotFound from "./pages/NotFound";
import { AuthGuard, Unauthorized } from "./utils/authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route
        path="/"
        element={
          <AuthGuard role="manager">
            <Dashboard />
          </AuthGuard>
        }
      />
      <Route
        path="/employee"
        element={
          <AuthGuard role="employee">
            <EmployeePage />
          </AuthGuard>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
