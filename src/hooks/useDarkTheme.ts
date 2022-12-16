import React from 'react';

const useDarkTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const [isDarkTheme, setIsDarkTheme]  = React.useState<boolean>(currentTheme === 'dark');
    
    const handleChaneTheme = () => {
        setIsDarkTheme(prev => !prev);
        localStorage.setItem('theme', isDarkTheme ? 'light': 'dark');
    }

    return {
        isDarkTheme,
        handleChaneTheme
    }
};
export default useDarkTheme;