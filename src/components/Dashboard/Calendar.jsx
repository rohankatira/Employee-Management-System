import React from 'react';

const Calendar = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h6 className="fw-bold mb-3">July 2020</h6>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="bg-light">26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td className="bg-primary text-white">1</td></tr>
          <tr><td className="bg-light">2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td className="bg-light">8</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
