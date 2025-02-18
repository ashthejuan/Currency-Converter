import React from 'react';
import Header from './components/Header';
import CurrencyConverter from './components/Conversion';
import './styles.css';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return(
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className='main-content'>
        <CurrencyConverter isDarkMode={isDarkMode}/>
      </main>
      <Footer />
    </div>
  )
}

export default App;