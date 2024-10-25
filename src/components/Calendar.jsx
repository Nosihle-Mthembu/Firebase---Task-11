import React, { useState } from 'react';


const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Generate days array for a given month and year
  const generateDays = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDayOfWeek = new Date(year, month, 1).getDay();
    const daysArray = Array.from({ length: startDayOfWeek }, () => null)
      .concat(Array.from({ length: daysInMonth }, (_, index) => index + 1));
    return daysArray;
  };

  const handleDayClick = (day) => {
    if (!startDate || endDate) {
      setStartDate(day);
      setEndDate(null);
    } else if (!endDate) {
      if (day > startDate) {
        setEndDate(day);
      } else {
        setStartDate(day);
      }
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const renderMonth = (month, year) => (
    <div className="calendar-month">
      <div className="month-header">
        <span>{new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
      </div>
      <div className="calendar-grid">
        <div className="week-days">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
            <div key={d} className="day-name">{d}</div>
          ))}
        </div>
        <div className="month-days">
          {generateDays(year, month).map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${day && (day === startDate || day === endDate) ? 'selected' : ''}`}
              onClick={() => day && handleDayClick(day)}
            >
              {day || ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>5 nights in Ballito</h2>
        <p>{startDate && endDate ? `${startDate} - ${endDate}` : 'Select dates'}</p>
      </div>

      <div className="calendar-months">
        <button className="arrow-button" onClick={handlePreviousMonth}>{"<"}</button>
        {renderMonth(currentMonth, currentYear)}
        {renderMonth((currentMonth + 1) % 12, currentYear + (currentMonth === 11 ? 1 : 0))}
        <button className="arrow-button" onClick={handleNextMonth}>{">"}</button>
      </div>

      <button className="clear-dates" onClick={() => { setStartDate(null); setEndDate(null); }}>
        Clear dates
      </button>
    </div>
  );
};

export default Calendar;
