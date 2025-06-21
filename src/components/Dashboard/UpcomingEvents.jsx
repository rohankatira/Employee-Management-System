import React from 'react';

const EventsBox = () => {
  return (
    <div className="bg-white p-4 rounded shadow mt-3">
      <h6 className="fw-bold mb-3">Upcoming Events</h6>
      <div className="mb-2 d-flex align-items-start">
        <i className="fas fa-circle text-danger me-2 mt-1" style={{ fontSize: '8px' }}></i>
        <div>
          <strong>Design Review</strong><br />
          9:00 AM - 10:00 AM
        </div>
      </div>
      <div className="mb-2 d-flex align-items-start">
        <i className="fas fa-circle text-danger me-2 mt-1" style={{ fontSize: '8px' }}></i>
        <div>
          <strong>Weekly Sync</strong><br />
          11:00 AM - 11:30 AM
        </div>
      </div>
      <button className="btn btn-sm btn-warning w-100">View All</button>
    </div>
  );
};

export default UpcomingEvents;
