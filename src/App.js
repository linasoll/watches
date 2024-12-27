import React, { useState, useEffect } from 'react';
import './App.css';
import Clock from './components/Clock';

const App = () => {
  const [clocks, setClocks] = useState([]);
  const [name, setName] = useState('');
  const [offset, setOffset] = useState('');

  const addClock = () => {
    if (name && offset) {
      setClocks([...clocks, { name, offset: parseInt(offset) }]);
      setName('');
      setOffset('');
    }
  };

  const removeClock = (index) => {
    const newClocks = clocks.filter((_, i) => i !== index);
    setClocks(newClocks);
  };

  return (
    <div className='widget'>
      <div className='form'>
        <input
        className='input'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Название"
        />
        <input
          className='input'
          type="number"
          value={offset}
          onChange={(e) => setOffset(e.target.value)}
          placeholder="Временная зона"
        />
        <button  className ="button" onClick={addClock}>Добавить</button>
      </div>
      <div className='clock-list'>
        {clocks.map((clock, index) => (
          <Clock
            key={index}
            name={clock.name}
            offset={clock.offset}
            onRemove={() => removeClock(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;