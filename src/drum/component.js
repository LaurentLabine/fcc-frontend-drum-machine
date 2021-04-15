import React from 'react';
import styled from 'styled-components';
import GlobalStyle from "./styles"
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class Drum extends React.Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyPressed = this.handleKeyPressed.bind(this);
      this.volumeChanged = this.volumeChanged.bind(this);
      this.bankSwitch = this.bankSwitch.bind(this);
      this.onOffSwitch = this.onOffSwitch.bind(this);
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

     bankSwitch(e) {
       console.log("bankswitch used")
     }

     onOffSwitch(e) {
       console.log("OnOff Switch used")
     }

     volumeChanged(event, newValue) {
       this.setState({
         volume: newValue
       })
       console.log(newValue)
     }
  
     render() {
        var renderHtml = [];
          for(var i = 0; i< bankOne.length; i++)
          {
            renderHtml.push(
            <Pad key={bankOne[i].keyCode} onClick={this.handleClick} id={"div" + bankOne[i].keyTrigger} className="grid-item drum-pad" >
            {bankOne[i].keyTrigger}
                <audio id={bankOne[i].keyTrigger} className="clip" src={bankOne[i].url} />
            </Pad>);
         }

       return (
        <React.Fragment>
        <GlobalStyle />
            <DrumMachine id="drum-machine" tabIndex="0" onKeyDown={this.handleKeyPressed}>
                <Display text={this.state.displayMessage} />
                <PadsContainer>{renderHtml}</PadsContainer> 
                <ControlsContainer id="controls">
                <FormControl component="fieldset">
                <FormGroup aria-label="position" column>
                <FormControlLabel value="top" control={<Switch color="primary" />} label="Top" labelPlacement="top" />      
                <FormControlLabel value="top" control={<Switch color="primary" />} label="Top" labelPlacement="top" />        
                <Slider value={this.state.volume} onChange={this.volumeChanged} aria-labelledby="continuous-slider" />
                </FormGroup>
                </FormControl>
                </ControlsContainer>
            </DrumMachine>
      </React.Fragment>
        )
       }
     }

     const Display = ({text}) => {
      return(
        <div style={DisplayStyle} id="display">
            <h1>{text}</h1>
        </div>
      )
  }

const PadsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 70%;
  background-color: #2196F3;
  padding: 10px;
  gap: 10px;
`

const DrumMachine = styled.div`
  position:relative;
  padding: 25px;
  width: 50rem;
  height: 22rem;
  background-color: blue;
  border-radius: 25px;
  border: 2px solid #73AD21;
  text-align: center;
`

const Pad = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  cursor: pointer;
  border-radius: 20px;
`

const ControlsContainer = styled.div`
  position: absolute;
  width: 170px;
  bottom: 20px;
  right: 16px;
  height: 230px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 20px;
`

  const DisplayStyle = {
      display: "block",
      width: "100%",
      color: "white",
      border: "2px solid #73AD21"
  }

  const OnOffSwitchStyle = {
    // position: "relative",
    // left: "600px"
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
  
  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];


  export default Drum;