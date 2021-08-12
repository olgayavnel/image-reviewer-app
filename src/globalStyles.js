import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/** select all the elements on the page  */ 
*{
    margin: 0;
    padding: 0rem;
    box-sizing: border-box;
}
html, body {
    overflow: hidden;
    min-height: 100vh;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2b4893;
    font-size: clamp(1rem, 1.2vw, 2rem);
}
`;

export default GlobalStyle;
