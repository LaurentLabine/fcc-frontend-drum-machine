import { createGlobalStyle } from "styled-components/macro"

export default createGlobalStyle `

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
        background-image: url("https://drive.google.com/uc?id=1CnuuuH5VpDmTGZL5J251k-FTWD-e5a6T");
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

    #onOffSwitch {
        color: magenta;
    }

    `