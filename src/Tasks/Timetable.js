import React, { useState } from 'react';
import './Tasks.css'

const Timetable = () => {
  const [time, setTime] = useState('');
  const [interval, setIntervalValue] = useState('');
  const [rows, setRows] = useState([]);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleIntervalChange = (event) => {
    setIntervalValue(event.target.value);
  };

  const generateTimetable = () => {
    if (!time || !interval) {
      alert("Please enter values for both time and interval.");
      return;
    }
    

    const intervalValue = parseInt(interval, 0);
    const timeValue = parseInt(time, 0);
    const numberOfRows = intervalValue / timeValue;

    if (numberOfRows <= 0 || !Number.isInteger(numberOfRows)) {
      alert("Invalid time or interval values. Please enter valid positive integers.");
      return;
    }
  

    const timetableRows = [];
    for (let i = 0; i < numberOfRows; i++) {
      const startTime = i * timeValue;
      const endTime = startTime + timeValue;
      timetableRows.push(
        <tr key={i}>
          <td>{`${startTime} - ${endTime}`}</td>
        </tr>
      );
    }

    setRows(timetableRows);
  };

  return (
    <div>
      <h2 className='heading'>Task 2</h2>
      <div>
        <table>
          <tr>
          <td>
          Time (In Minutes):
          <input type="number" placeholder='Enter Time' value={time} onChange={handleTimeChange} />
          </td>
          </tr>
          <tr>
           <td>
           Interval (In Minutes):
          <input type="number" placeholder='Enter Interval' value={interval} onChange={handleIntervalChange} />
           </td>
          </tr>
          <tr>
            <td>
            <button onClick={generateTimetable}>Generate Timetable</button>
            </td>
          </tr>
        </table>     
      </div>
      {rows.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Time Interval</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      )}
    </div>
  );
};

export default Timetable;
