import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme from './theme/lightTheme';
import darkTheme from './theme/darkTheme';

import GlobalStyles from './theme/globalStyles';

import Button from './components/button';

function App() {
  const [ darkMode, setDarkMode ] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <header className="App-header">
        <Button onClick={() => setDarkMode(!darkMode)}>Hello</Button>
      </header>
    </ThemeProvider>
  );
}

export default App;
