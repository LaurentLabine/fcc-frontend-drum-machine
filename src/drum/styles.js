import styled from "styled-components"
import { createGlobalStyle } from "styled-components/macro"

export default createGlobalStyle `

    #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    }

    html {
        margin: 0;
        padding:0;
    }

    body {
        background-image: url("https://wonderfulengineering.com/wp-content/uploads/2014/06/galaxy-wallpapers-9.jpg");
    }

    
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    #controls {
        display: flex;
        background-color: red;
        position:relative;
        left: 600px;
        width: 400px;
        bottom: 200px;
        height: 200px;
    }
    `