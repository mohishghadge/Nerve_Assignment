
import React from 'react'

const StrategyCard = ({strategyArray,selectedDate,selectedView}) => {


  const countStrategies = (strategies) => {
    let strategyCount = {};
    
    strategies.forEach((strategy) => {
     
      if (strategyCount[strategy]) {
        strategyCount[strategy] += 1;
      } else {
        strategyCount[strategy] = 1;
      }
    });
    return strategyCount; 
  }

  
    const selectedStrategy = strategyArray.find((strategy) => strategy.View === selectedView); 
    const strategiesForDate = selectedStrategy ? selectedStrategy.Value[selectedDate] || [] : []; 
  return (
    <>
    <div className="strategy-cards">
          {strategiesForDate.length > 0 ? (
            
            Object.entries(countStrategies(strategiesForDate)).map(([key, value], index) => (
              <div key={index} className="strategy-card">
                <p>{key}</p>
                <p>⚪ {value} {value > 1 ? 'Strategies' : 'Strategy'}</p>
              </div>
            ))
          ) : (
            <div>No strategies available for {selectedDate}</div>
          )}
        </div>
    </>
  )
}

export default StrategyCard