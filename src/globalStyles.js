import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
html, body {
    overflow: auto;
    height: 100vh;
    width: 100vw;
    background-color: #f3faff;
    color: #2b4893;
    font-family: 'Poppins', sans-serif;
}
`;

export default GlobalStyle;
