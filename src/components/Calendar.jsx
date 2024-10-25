import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(0); // 0 for October, 1 for November

  const daysInMonth = (month) => new Date(2024, month + 1, 0).getDate();

  const handleDayClick = (day, month) => {
    if (selectedDates.length === 1) {
      setSelectedDates([...selectedDates, { day, month }]);
    } else {
      setSelectedDates([{ day, month }]);
    }
  };

  const renderMonth = (month, monthName) => {
    const days = Array.from({ length: daysInMonth(month) }, (_, index) => index + 1);
    return (
      <div className="calendar-month">
        <h3>{monthName} 2024</h3>
        <div className="calendar-grid">
          {days.map((day) => (
            <div
              key={day}
              className={`calendar-day ${selectedDates.some(date => date.day === day && date.month === month) ? 'selected' : ''}`}
              onClick={() => handleDayClick(day, month)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleMonthChange = (direction) => {
    if (direction === 'prev') setCurrentMonth((prev) => Math.max(prev - 1, 0));
    if (direction === 'next') setCurrentMonth((prev) => Math.min(prev + 1, 1));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>5 nights in Ballito</h2>
        <p>Oct 28, 2024 - Nov 2, 2024</p>
      </div>
      <div className="calendar-controls">
        <button onClick={() => handleMonthChange('prev')}>{'<'}</button>
        {renderMonth(currentMonth, currentMonth === 0 ? 'October' : 'November')}
        <button onClick={() => handleMonthChange('next')}>{'>'}</button>
      </div>
      <button className="clear-dates" onClick={() => setSelectedDates([])}>Clear dates</button>
    </div>
  );
};

export default Calendar;
