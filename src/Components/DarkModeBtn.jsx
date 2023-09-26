import React, { useState, useEffect } from 'react';

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user's preference is saved in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode === 'true');
    } else {
      // You can set a default mode here if needed
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    // Save the user's preference in localStorage
    localStorage.setItem('darkMode', newMode.toString());
  };

  return (
    <button className={`dark-mode-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={toggleDarkMode}>
      <div className="light-bulb">
        <img src="bulb.png" alt={isDarkMode ? 'Dark Mode' : 'Light Mode'} className={isDarkMode ? 'lit' : 'unlit'} />
      </div>
      <div className="dark-mode-text">{isDarkMode ? 'Dark' : 'Light'}</div>
    </button>
  );
}
