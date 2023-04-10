import React, { useState} from 'react';
import ThemeContext from './Context/Context';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  const themeValue = useState("light");
  return (
    <ThemeContext.Provider value={themeValue}>
      <div>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
