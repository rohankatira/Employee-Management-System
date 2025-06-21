import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-white p-4 rounded shadow mb-3">
      <div className="d-flex">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" className="rounded-circle me-3" width="80" />
        <div>
          <h5>Helen Voizhicki <span className="badge bg-success ms-2">Active</span></h5>
          <p className="mb-1">Head of HR Department</p>
          <small>Email: helenvchicki@gmail.com<br />Phone: +1 (279) 255 98 43</small>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
