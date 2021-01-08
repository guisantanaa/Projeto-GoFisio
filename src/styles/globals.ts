import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }


    body {
        background: #FCFCFC;
        color: #312e38;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    h1, h3, h4, h5, h6, strong {
        font-weight: 500;
        
    }

    h2 {
        font-family: 'Anton', sans-serif;
        
    }
    button {
        cursor: pointer;
    }

    
`;