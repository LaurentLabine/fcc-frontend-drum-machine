import React from "react";
import styled from 'styled-components';
import GlobalStyle from "./styles"
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { red, green, grey, purple, white } from '@material-ui/core/colors';
import Ripple from "./ripple"

class Drum extends React.Component {
    constructor(props) {
      super(props)

      this.handleClick = this.handleClick.bind(this);
      this.handleKeyPressed = this.handleKeyPressed.bind(this);
      this.volumeChanged = this.volumeChanged.bind(this);
      this.bankSwitch = this.bankSwitch.bind(this);
      this.onOffSwitch = this.onOffSwitch.bind(this);

      this.state = {
            displayMessage: '',
            power: false,
            bank2: false,
            volume: 100
            };
     }
  
     handleClick(e) {

      console.log(e.target.id)


      //If Not Powered On, Do Nothing
      if(!this.state.power)
      return

      var targetId = e.target.id.slice(3)
      console.log(targetId)
      this.fetchAndPlay(targetId)
    }

     handleKeyPressed(e) {

      var selection = e.key.toUpperCase()
     
      //If the key pressed has not any Entry isn't defined or If Not Powered On, Do Nothing
      if(!possibleKeys.includes(selection) || !this.state.power)
        return

      this.fetchAndPlay(selection)
     }

     fetchAndPlay(selection){
      console.log(selection);

      var element = document.getElementById(selection);
      element.volume = this.state.volume/100;
      var bank = bankOne

      if(this.state.bank2)
        bank = bankTwo

      this.setState({
                displayMessage:bank.find(obj => obj.keyTrigger === selection).id
              })

      setTimeout(function() { //Start the timer
                this.setState({displayMessage: ""}) //After 1 second, set render to true
            }.bind(this), 1000)
      element.play();
     }

     bankSwitch() {

      var prevMsg = this.state.displayMessage;

       this.setState({
         bank2: !this.state.bank2,
         displayMessage: this.state.bank2? "Bank 1" : "Bank 2"
       })

       setTimeout(function() { //Start the timer
          this.setState({displayMessage: prevMsg}) //After 1 second, set render to true
      }.bind(this), 1000)
     }

     onOffSwitch() {

      if(!this.state.power){
        setTimeout(function() { //Start the timer
          this.setState({displayMessage: ""}) //After 1 second, set render to true
      }.bind(this), 1000)
      }

        this.setState({
          power: !this.state.power,
          displayMessage: "Power On"
        })
     }

     volumeChanged(event, newValue) {
      
       this.setState({
         volume: newValue
       })
      
       console.log(newValue)
     }
  
     render() {
      
        var renderHtml = [];
        var bank = bankOne
        if(this.state.bank2)
          bank = bankTwo

        for(var i = 0; i< bank.length; i++)
        {
          renderHtml.push(
          <Pad key={bank[i].keyCode} onClick={this.handleClick} id={"div" + bank[i].keyTrigger} className="grid-item drum-pad" >
            {bank[i].keyTrigger}
            <audio id={bank[i].keyTrigger} className="clip" src={bank[i].url} />
            <Ripple duration="1850" color="#9932cc" id={"rpl" + bank[i].keyTrigger} />
          </Pad>);
        }
        var displayMsg = this.state.displayMessage

        if(!this.state.power)
          displayMsg = ""

       return (
        <React.Fragment>
        <GlobalStyle />
            <DrumMachine id="drum-machine" tabIndex="0" onKeyDown={this.handleKeyPressed}>
                <Display text={displayMsg} />
                <PadsContainer>{renderHtml}</PadsContainer> 
                <FormControl id="controls" component="fieldset">
                <FormGroup aria-label="position">
                <FormControlLabel value="top"  control={<OnOffSwitch onChange={this.onOffSwitch} />} label="Off/On" labelPlacement="top" />      
                <FormControlLabel value="top" control={<PurpleSwitch onChange={this.bankSwitch}/>} label="Bank 1/2" labelPlacement="top" />        
                <FormControlLabel value="top" control={<Slider value={this.state.volume} color="secondary" onChange={this.volumeChanged} aria-labelledby="continuous-slider" />} label="Volume" labelPlacement="top" /> 
                </FormGroup>
                </FormControl>
            </DrumMachine>
      </React.Fragment>
        )
       }
     }

     const Display = ({text}) => {
      return(
        <div style={DisplayStyle} id="display">
            {text}
        </div>
      )
  }

const PadsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 80%;
  ${'' /* background-color: #2196F3; */}
  padding: 10px;
  gap: 10px;
`

const OnOffSwitch = withStyles({
  switchBase: {
    color: red[300],
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const PurpleSwitch = withStyles({
  switchBase: {
    color: grey[0],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const DrumMachine = styled.div`
  position:relative;
  padding: 25px;
  width: 40rem;
  height: 22rem;
  border-radius: 5px;
  border: 2px solid white;
  text-align: center;
  background-Image: url("https://wallpapertag.com/wallpaper/full/e/8/b/129414-download-free-cosmic-background-2991x1977-desktop.jpg");
  background-size: 100%;
 background-position: center;
`

const Pad = styled.div`
  overflow: hidden;
  position: relative;
  background-color: White;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`

  const DisplayStyle = {
      display: "flex",
      color: "#e48400",
      width: "200px",
      height: "5rem",
      fontSize: "32px",
      margin: "auto auto 12px auto",
      backgroundColor: "black",
      fontFamily: 'Electrolize',
      justifyContent: "center",
      alignItems: "center"
  }

  const possibleKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]

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