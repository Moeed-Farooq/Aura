import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Chart = () => {
  const [monthsToDisplay, setMonthsToDisplay] = useState(6);

  const data = [
    { month: 'Jan', year: 2023, data: 60 },
    { month: 'Feb', year: 2023, data: 90 },
    { month: 'Mar', year: 2023, data: 50 },
    { month: 'Apr', year: 2023, data: 80 },
    { month: 'May', year: 2023, data: 50 },
    { month: 'Jun', year: 2023, data: 95 },
    { month: 'Jul', year: 2023, data: 50 },
    { month: 'Aug', year: 2023, data: 80 },
    // ... (remaining months)
  ];

  const handleMonthsChange = (selectedMonths) => {
    setMonthsToDisplay(selectedMonths);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <h4 className='ps-3'>Order Analytics</h4>
        </div>
        <div className="col-md-2">
          <Link to="/completeOrder"><button className="chart-btn py-1 px-3">Completed</button></Link>
        </div>
        <div className="col-md-2">
          <Link to="/cancelOrder"><button className="chart-btn py-1 px-3">Cancelled</button></Link>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <div className="dropdown w-100 pe-3 d-flex justify-content-end ">
            <button className="chart-btn px-3  py-1 w-75 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {`Last ${monthsToDisplay} Months`}
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => handleMonthsChange(6)}>Last 6 Months</button></li>
              <li><button className="dropdown-item" onClick={() => handleMonthsChange(9)}>Last 9 Months</button></li>
              <li><button className="dropdown-item" onClick={() => handleMonthsChange(12)}>Last 12 Months</button></li>
              {/* Add more options as needed */}
            </ul>
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="chart-container pt-2">
        <ResponsiveContainer width="100%" className="pe-3" height={240}>
          <BarChart className=''
            data={data.slice(-monthsToDisplay)}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={(item) => `${item.month}-${item.year}`} />
            <YAxis ticks={[0, 20, 40, 60, 80, 100]} interval={0} />
            <Tooltip />
            <Legend />
            <Bar dataKey="data" radius={[10, 10, 0, 0]} barSize={20} fill="#6A50B2" />
            <Bar dataKey="data" radius={[10, 10, 0, 0]} barSize={20} fill="#4F99DD" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
