import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileCard from '../components/ProfileCard';
import Calendar from '../components/Calendar';
import UpcomingEvents from '../components/UpcomingEvents';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 p-0">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4">
          <h3 className="fw-bold mb-3">Employee Dashboard</h3>
          <div className="row">
            <div className="col-lg-8">
              <ProfileCard />
            </div>
            <div className="col-lg-4">
              <Calendar />
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
