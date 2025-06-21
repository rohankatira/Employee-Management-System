import React from 'react';
import Sidebar from '../components/Sidebar';

const EmployeePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9 col-lg-10 p-4">
          <h3 className="fw-bold mb-3">Employee Management</h3>
          {/* Add employee list or form here */}
          <div className="card p-3">
            <p>This is the Employee Page content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
