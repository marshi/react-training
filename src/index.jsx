import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Clock() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(Date());
    }, 1000);
    return () => {
      clearInterval(timerId)
    }
  });

  return (
    <span>{date}</span>
  )
}

function Clocks() {
  return (
    <div>
      <Clock/><br/>
      <Clock/><br/>
      <Clock/>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Clocks/>,
  document.getElementById('root')
);
