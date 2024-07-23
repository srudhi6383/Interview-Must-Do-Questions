import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import './App.css'; 

const AppContent = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
            <ThemeToggleButton />
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
};

export default App;
