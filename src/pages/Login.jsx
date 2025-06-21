import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/authentication";
import '../assets/style.css'

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("manager");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      login(userType);
      navigate("/");
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-5 shadow-lg"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "20px" }}
      >
        <h4 className="text-center mb-4 fw-bold">Employee Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Login as</label>
            <select
              className="form-select"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
