import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = () => {
  const [monthsToDisplay, setMonthsToDisplay] = useState(6);

  const data = [
    { month: 'Jan', year: 2023, data: 50 },
    { month: 'Feb', year: 2023, data: 30 },
    { month: 'Mar', year: 2023, data: 50 },
    { month: 'Apr', year: 2023, data: 30 },
    { month: 'May', year: 2023, data: 50 },
    { month: 'Jun', year: 2023, data: 30 },
    { month: 'Jul', year: 2023, data: 50 },
    { month: 'Aug', year: 2023, data: 30 },
    // ... (remaining months)
  ];

  const handleMonthsChange = (e) => {
    const selectedMonths = parseInt(e.target.value, 10);
    setMonthsToDisplay(selectedMonths);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <h4 className='ps-3'>Order Analytics</h4>
        </div>
        <div className="col-md-2">
          <Link to="/completeOrder"><button className="chart-btn btn-sm">Completed</button></Link>
        </div>
        <div className="col-md-2">
          <Link to="/cancelOrder"><button className="chart-btn btn-sm">Cancelled</button></Link>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <select
            id="monthsSelect"
            className="chart-btn  btn-sm w-50 me-4 form-select"
            value={monthsToDisplay}
            onChange={handleMonthsChange}
          >
            <option value={6}>Last 6 Months</option>
            <option value={9}>Last 9 Months</option>
            <option value={12}>Last 12 Months</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      {/* chart */}
      <div className="chart-container pt-2">
        <BarChart width={760} height={240} data={data.slice(-monthsToDisplay)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={(item) => `${item.month}-${item.year}`} />
          <YAxis ticks={[0, 20, 40, 60, 80, 100]} interval={0} />
          <Tooltip />
          <Legend />
          <Bar dataKey="data" fill="#4F99DD" />
        </BarChart>
      </div>
    </>
  );
};

export default Chart;
