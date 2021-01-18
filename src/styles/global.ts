import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    *::after,
    *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: #fff;
        -webkit-font-smoothing: antialiased; 
        box-sizing: border-box;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 800;
        font-style: normal;
    }


    a, button{
        cursor: pointer;
    }

`;

export default GlobalStyle;
