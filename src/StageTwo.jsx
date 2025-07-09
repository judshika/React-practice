import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function StageThree() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? 'pink' : 'red',
    color: theme === 'light' ? 'black' : 'black',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
  };

  return (
    <div style={style}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>
        Hey! Click Me!
      </button>
    </div>
  );
}

export default StageThree;
