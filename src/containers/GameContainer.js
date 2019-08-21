import React from 'react';
import SideBar from './SideBar';
import GameBoard from './GameBoard'

export default class GameContainer extends React.Component {

   state = {
       seconds: 0,
       gameInSession: true
   }

   intervalHandle;

   tick = () => {
    if (this.state.gameInSession){
     let secondsRemaining = this.state.seconds
     let newState = secondsRemaining - 1
       this.setState({
           seconds: newState
       })

       if (this.state.seconds === 0) {  //this.seconds? anyway, however you get the state value. same with the above seconds-- line
           clearInterval(this.intervalHandle)
       }
    }
   }

   handleTimer = () => {
     if (this.state.seconds === 0) {
        this.setState({ seconds: 30 })
        this.intervalHandle = setInterval(this.tick, 1000);
     }
   }

   checkGameState = () => {
       this.setState({gameInSession: false})
   }

   render() {
       console.log(this.state.gameInSession)
       return (
           <React.Fragment>
              <SideBar changeFilterTypeState= { this.props.changeFilterTypeState } />
              <GameBoard 
                allCards={ this.props.allCards } 
                handleTimer = { this.handleTimer } 
                seconds = { this.state.seconds } 
                checkGameState={this.checkGameState}
                gameState={this.gameInSession}
              />
           </React.Fragment>
       )}
}
