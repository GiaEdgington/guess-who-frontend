import React from 'react';
import SideBar from './SideBar';
import GameBoard from './GameBoard'

export default class GameContainer extends React.Component {

   state = {
       seconds: 0
   }

   intervalHandle;

   tick = () => {
     let secondsRemaining = this.state.seconds
     let newState = secondsRemaining - 1
       this.setState({
           seconds: newState
       })

       if (this.state.seconds === 0) {  //this.seconds? anyway, however you get the state value. same with the above seconds-- line
           clearInterval(this.intervalHandle)
       }
   }

   handleTimer = () => {
     if (this.state.seconds === 0) {
        this.setState({ seconds: 45 })
        this.intervalHandle = setInterval(this.tick, 1000);
     }
   }


   render() {
       console.log(this.state.seconds)
       return (
           <React.Fragment>
              <SideBar changeFilterTypeState= { this.props.changeFilterTypeState } />
              <GameBoard allCards={ this.props.allCards } handleTimer = { this.handleTimer } seconds = { this.state.seconds } />
           </React.Fragment>
       )}
}
