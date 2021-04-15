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
        background-image: url("https://wonderfulengineering.com/wp-content/uploads/2014/06/galaxy-wallpapers-9.jpg");
    }

    #controls {
        color: white;
        position: relative;
        bottom: 200px;
        right: 4%;
        display: float;
        float: right;
    }

    #onOffSwitch {
        color: magenta;
    }

    `