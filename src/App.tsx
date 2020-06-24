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
      <div className="cards">
        <Card image="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515368_10599.jpg" title="Red Hot Chili Peppers" infos="150K Total Songs" />
        <Card image="https://yt3.ggpht.com/a/AATXAJzk6it5mIXYJslwwP32oEDI_IIrxq370p1P0w=s900-c-k-c0xffffffff-no-rj-mo" title="Twenty One Pilots" infos="100K Total Songs" />
      </div>
      <CardSidebar image="https://yt3.ggpht.com/a/AATXAJzk6it5mIXYJslwwP32oEDI_IIrxq370p1P0w=s900-c-k-c0xffffffff-no-rj-mo" title="Red Hot Chili Peppers" infos="150K Total Songs" />
    </ThemeProvider>
  );
}

export default App;
