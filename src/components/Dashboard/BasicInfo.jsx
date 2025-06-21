import React from 'react';

const BasicInfo = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5>Basic Information</h5>
        <div className="row">
          <div className="col-md-4"><strong>Hire Date:</strong> August 28, 2013</div>
          <div className="col-md-4"><strong>Worked for:</strong> 7 years, 1 month</div>
          <div className="col-md-4"><strong>Employee ID:</strong> 3166</div>
        </div>
        <div className="row mt-2">
          <div className="col-md-4"><strong>SSN:</strong> XXX-XX-3166</div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
