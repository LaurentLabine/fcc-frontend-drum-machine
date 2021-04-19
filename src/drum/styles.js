import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
    #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-family: "Roboto";
    }

    html {
        margin: 0;
        padding:0;
    }

    body {
        background-image: url("https://user-images.githubusercontent.com/20836468/115224640-67059d00-a10d-11eb-8a10-9d799e4fc93d.jpg");
        background-size: 100%;
        background-position: center;
    }

    #controls {
        color: white;
        position: relative;
        bottom: 240px;
        display: float;
        float: right;
    }
    `;
