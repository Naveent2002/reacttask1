import React, { useState } from 'react';

const CourseCompletionCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState(null);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const calculateCompletionDate = () => {
    if (startDate) {
      const startDateObject = new Date(startDate);
      const completionDateObject = new Date(startDateObject);
      completionDateObject.setDate(startDateObject.getDate() + 90);

      setCompletionDate(completionDateObject.toDateString());
    } else {
      setCompletionDate(null);
    }
  };

  return (
    <div>
      <h2>Course Completion Calculator</h2>

      <label htmlFor="startDate">Enter Course Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      />

      <button onClick={calculateCompletionDate}>Calculate Completion Date</button>

      {completionDate && (
        <p>
          Course completion date: {completionDate}
        </p>
      )}
    </div>
  );
};

export default CourseCompletionCalculator;
