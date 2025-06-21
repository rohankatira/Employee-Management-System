
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-dark text-white vh-100 p-3">
      <div className="text-center mb-4">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" className="rounded-circle mb-2" width="80" />
        <h6>Helen Voizhicki</h6>
      </div>
      <nav className="nav flex-column">
        <NavLink className="nav-link text-white" to="/profile"><i className="fas fa-user me-2" /> Profile</NavLink>
        <NavLink className="nav-link text-white" to="/job"><i className="fas fa-briefcase me-2" /> Job</NavLink>
        <NavLink className="nav-link text-white" to="/salary"><i className="fas fa-money-bill me-2" /> Salary</NavLink>
        <NavLink className="nav-link text-white" to="/documents"><i className="fas fa-file-alt me-2" /> Documents</NavLink>
        <NavLink className="nav-link text-white" to="/tasks"><i className="fas fa-tasks me-2" /> Tasks</NavLink>
        <NavLink className="nav-link text-white" to="/chat"><i className="fas fa-comments me-2" /> Chat</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
