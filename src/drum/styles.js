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
        ${'' /* background-image: url("https://wonderfulengineering.com/wp-content/uploads/2014/06/galaxy-wallpapers-9.jpg"); */}
        background-image: url("https://wallpapertag.com/wallpaper/full/b/8/0/129399-most-popular-cosmic-background-1920x1200.jpg");
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