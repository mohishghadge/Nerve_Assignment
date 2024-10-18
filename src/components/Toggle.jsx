import React from 'react'

const Toggle = ({selectedView,setSelectedView}) => {


  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  return (
    <>
    <div className="toggle-container">
          {['Bullish', 'Bearish', 'RangeBound', 'Volatile'].map((view) => (
            <button
              key={view}
              className={`toggle-btn ${selectedView === view ? 'active' : ''}`}
              onClick={() => handleViewChange(view)}
            >
              {view}
            </button>
          ))}
        </div>
    </>
  )
}

export default Toggle