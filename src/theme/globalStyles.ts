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
    background-color: ${props => props.theme.colors.background}
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    grid-gap: 40px;
    padding: 40px
  }
`;

export default GlobalStyles;
