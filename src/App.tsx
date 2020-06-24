import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme from './theme/lightTheme';
import darkTheme from './theme/darkTheme';

import GlobalStyles from './theme/globalStyles';

import Card from './components/Card/index';
import CardSidebar from './components/CardSidebar/index';

function App() {
  const [ darkMode, setDarkMode ] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <button onClick={() => setDarkMode(!darkMode)}>Change theme</button>
      <div className="app">
        <div className="cards">
          <Card image="https://cdn.playlists.net/images/playlists/image/medium/a5be6174c4294fbffd56111f8ca2d8d1.jpg" title="Rock" infos="150K Total Songs" />
        </div>
        <div className="sidebar">
          <CardSidebar image="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515368_10599.jpg" title="Red Hot Chili Peppers" infos="150K Total Songs" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
