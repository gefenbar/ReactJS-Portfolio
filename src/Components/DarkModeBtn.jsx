import React, { useState, useEffect } from 'react';

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user's preference is saved in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode === 'true');
    } else {
      setIsDarkMode(false);
    }

    // Update the class of the body element
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);


  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    // Save the user's preference in localStorage
    localStorage.setItem('darkMode', newMode.toString());
    // Update the class of the body element
    document.body.className = newMode ? 'dark-mode' : 'light-mode';
    // document.getElementById('x').className = newMode ? 'dark-mode' : 'light-mode';

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
