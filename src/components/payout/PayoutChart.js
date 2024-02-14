
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PayoutChart = () => {
  const [monthsToDisplay, setMonthsToDisplay] = useState(6);

  const data = [
    { month: 'Jan', year: 2023, data: 5000 },
    { month: 'Feb', year: 2023, data: 3000 },
    { month: 'Mar', year: 2023, data: 5000 },
    { month: 'Apr', year: 2023, data: 3000 },
    { month: 'May', year: 2023, data: 5000 },
    { month: 'Jun', year: 2023, data: 3000 },
    { month: 'Jul', year: 2023, data: 5000 },
    { month: 'Aug', year: 2023, data: 3000 },
    // ... (remaining months)
  ];

  const handleMonthsChange = (e) => {
    const selectedMonths = parseInt(e.target.value, 10);
    setMonthsToDisplay(selectedMonths);
  };

  const formatYAxisTick = (tick) => {
    if (tick === 0) return 0;
    return `${tick / 1000}k`;
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <h4 className='ms-4'>Earnings</h4>
        </div>
       
        <div className="col-md-6 d-flex justify-content-end">
          <select
            id="monthsSelect"
            className="chart-btn btn-sm w-50 me-4 form-select"
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
        <BarChart width={900} height={240} data={data.slice(-monthsToDisplay)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={(item) => `${item.month}-${item.year}`} />
          <YAxis tickFormatter={formatYAxisTick} ticks={[0, 2000, 4000, 6000, 8000, 10000]} interval={0} />
          <Tooltip />
          <Legend />
          <Bar dataKey="data" fill="#4F99DD" />
        </BarChart>
      </div>
    </>
  );
};

export default PayoutChart;
