import React, { useState, useEffect } from 'react';

const Clock = ({ name, offset, onRemove }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getTimeInZone = () => {
    const utc = time.getTime() + time.getTimezoneOffset() * 60000;
    const localTime = new Date(utc + offset * 3600000);
    return localTime.toLocaleTimeString();
  };

  return (
    <div className='clock'>
      <div className='clock-name'>{name}</div>
      <p>{getTimeInZone()}</p>
      <button  className="button" onClick={onRemove}>Х</button>
    </div>
  );
};

export default Clock