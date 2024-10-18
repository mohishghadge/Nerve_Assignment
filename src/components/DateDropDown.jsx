import React, { useState } from 'react'

const DateDropDown = ({selectedDate,setSelectedDate,dateArray}) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="dropdown-container">
          <div className="selected-date" onClick={toggleDropdown}>
            {selectedDate}
            <span className="arrow-icon">{dropdownOpen ? '▲' : '▼'}</span>
          </div>
  
          {dropdownOpen && (
            <div className="dropdown-list">
              {dateArray.map((date) => (
                <div key={date} className="dropdown-item" onClick={() => handleDateChange(date)}>
                  {date}
                </div>
              ))}
            </div>
          )}
        </div>
    </>
  )
}

export default DateDropDown