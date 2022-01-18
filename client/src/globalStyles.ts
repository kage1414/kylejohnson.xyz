import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
    }
    *, *:before, *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Verdana';
    }
`;
