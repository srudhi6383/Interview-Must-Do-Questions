import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggleButton = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
        </button>
    );
};

export default ThemeToggleButton;
