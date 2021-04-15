import React from 'react';
import styled from 'styled-components';
import GlobalStyle from "./styles"

const PadsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 70%;
  background-color: #2196F3;
  padding: 10px;
  gap: 10px;
`

const DrumMachine = styled.div`
  display: block;
  margin:auto;
  padding: 25px;
  width: 50rem;
  height: 22rem;
  justify-content: center;
  align-content: center;
  background-color: blue;
  border-radius: 25px;
  border: 2px solid #73AD21;
  text-align: center;
`

const Drumpad = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
`

class Drum extends React.Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyPressed = this.handleKeyPressed.bind(this);
      this.state = {
            displayMessage: 'POWER ON',
            power: false,
            bank2: false,
            volume: 100
            };
     }
  
     handleClick(e) {
        var element = document.getElementById(e.target.id.slice(3));
        this.setState({
                  displayMessage: bankOne.find(obj => obj.keyTrigger === e.target.id.slice(3)).id
                })      
        element.play();
    }

     handleKeyPressed(e) {
         var element = document.getElementById(e.key.toUpperCase());
         this.setState({
                  displayMessage: bankOne.find(obj => obj.keyTrigger === e.key.toUpperCase()).id
                })
         element.play();
     }
  
     render() {
        var renderHtml = [];
          for(var i = 0; i< bankOne.length; i++)
          {
            renderHtml.push(
            <Drumpad key={bankOne[i].keyCode} onClick={this.handleClick} id={"div" + bankOne[i].keyTrigger} className="grid-item drum-pad" >
            {bankOne[i].keyTrigger}
                <audio id={bankOne[i].keyTrigger} className="clip" src={bankOne[i].url} />
            </Drumpad>);
         }

       return (
        <React.Fragment>
        <GlobalStyle />
            <DrumMachine id="drum-machine" tabIndex="0" onKeyDown={this.handleKeyPressed}>
                <Display text={this.state.displayMessage} />
                <PadsGrid>{renderHtml}</PadsGrid> 
                <div id="controls">
                  <OnOffSwitch />
                  <BankSwitch /> 
                </div>
            </DrumMachine>
      </React.Fragment>
        )
       }
     }

     const DisplayStyle = {
         display: "block",
         width: "100%",
         color: "white",
         border: "2px solid #73AD21"
     }

     const Display = ({text}) => {
         return(
            <div style={DisplayStyle} id="display">
                <h1>{text}</h1>
            </div>
         )
     }

     const OnOffSwitchStyle = {
        display: "flex",
        position: "relative",
        left: "600px"
        //  bottom: "240px",
        //  border: "2px solid #73AD21",
        //  width: "100px"
     }

     const bankSwitchStyle = {
      display: "flex",
        position: "relative",
        left: "600px"
        //  position: "relative",
        //  left: "710px",
        //  bottom: "332px",
        //  border: "2px solid #73AD21",
        //  width: "100px"
     }

     const OnOffSwitch = ({}) => {
         return(
           <div style={OnOffSwitchStyle} >
           <p>On/Off</p>
                <label className="switch" for="OnOffSwitch">ON/OFF
                    <input id="OnOffSwitch"type="checkbox" />
                    <span class="slider"></span>
                </label>
            </div>
         )
     }

     const BankSwitch = ({}) => {
         return(
          <div style={bankSwitchStyle} >
          <p>Bank 1/2</p>
                <label className="switch" for="bankSwitch">
                    <input id="bankSwitch" type="checkbox" />
                    <span class="slider"></span>
                </label>
          </div>
         )
     }


     const VolumeSlider = ({}) => {
         return(
            <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
            </div>
//info here : https://www.w3schools.com/howto/howto_js_rangeslider.asp
         )
     }

     const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
//   const bankTwo = [
//     {
//       keyCode: 81,
//       keyTrigger: 'Q',
//       id: 'Chord-1',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
//     },
//     {
//       keyCode: 87,
//       keyTrigger: 'W',
//       id: 'Chord-2',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
//     },
//     {
//       keyCode: 69,
//       keyTrigger: 'E',
//       id: 'Chord-3',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
//     },
//     {
//       keyCode: 65,
//       keyTrigger: 'A',
//       id: 'Shaker',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
//     },
//     {
//       keyCode: 83,
//       keyTrigger: 'S',
//       id: 'Open-HH',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
//     },
//     {
//       keyCode: 68,
//       keyTrigger: 'D',
//       id: 'Closed-HH',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
//     },
//     {
//       keyCode: 90,
//       keyTrigger: 'Z',
//       id: 'Punchy-Kick',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
//     },
//     {
//       keyCode: 88,
//       keyTrigger: 'X',
//       id: 'Side-Stick',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
//     },
//     {
//       keyCode: 67,
//       keyTrigger: 'C',
//       id: 'Snare',
//       url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
//     }
//   ];


  export default Drum;