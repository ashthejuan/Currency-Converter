import React from "react";

const Header = ({toggleTheme, isDarkMode}) => {
    return (
        <header className={`header ${isDarkMode ? "dark" : "light"}`}>
            <h1>Currency Converter</h1>
            {/* <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>         */}
            <label className="theme-switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                <span className="slider"></span>
            </label>
        </header>
    );
};

export default Header;  