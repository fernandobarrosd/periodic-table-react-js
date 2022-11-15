import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

    body, #root {
        width: 100%;
        height: 100vh;
        background-color: rgb(145, 177, 177);
    }

    td {
        border: 1px solid black;
        padding: 10px;
        text-align: center;
        font-weight: bold;
    }
`