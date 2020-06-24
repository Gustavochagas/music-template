import { createGlobalStyle } from 'styled-components';

interface Props {
  theme: any
}

const GlobalStyles = createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
    transition: all .2s ease-in-out;
    background-color: ${props => props.theme.colors.background}
  }
  .app {
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 180px));
    grid-gap: 50px;
    padding: 40px 40px 0 0;
    flex: 1;
  }
  .sidebar {
    padding: 40px 0;
    min-width: 300px;
  }
`;

export default GlobalStyles;
