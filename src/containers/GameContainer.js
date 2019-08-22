import React from 'react';
import SideBar from './SideBar';
import GameBoard from './GameBoard'

export default class GameContainer extends React.Component {

   state = {
       seconds: 0,
       className: "layer",
       gameInSession: true,
       index: 0,
       indexImg: -1,
       answer: ""
   }

   intervalHandle;
   interval = 0;

   //[KevinImage, GrahamImage, TonyImage, NickyImage, GracieImage, RyanImage, AyanaImage, EricImage, AnnieImage]
   //answers = ["Kevin", "Graham", "Tony", "Nicky", "Gracie", "Ryan", "Ayana", "Eric", "Annie"]

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
       else {
          let newindex = this.state.index;

          if ((secondsRemaining + this.interval) == 30 ) {
            this.interval = this.interval + 1; //Change increment to increase/decrease reveal time
            newindex = newindex + 1;
          }

          this.setState({
              index: newindex
          })
       }
    }
   }

   handleTimer = () => {
     this.setState({ indexImg: this.state.indexImg + 1 })
     let answer = this.props.instructors.map((instructor) => instructor.answer)[this.state.indexImg + 1 ];
     this.setState({ answer: answer })

     if (this.state.seconds === 0) {
        this.setState({ seconds: 30 })
        this.setState({ index: 0 })
        this.interval = 0;
        this.intervalHandle = setInterval(this.tick, 1000);
     }
   }

   checkGameState = () => {
       //this.setState({gameInSession: false});
       this.setState({ index: 0 })
       this.handleTimer();
   }

   noDisplayImg = () => {
     //this.setState({ className: "noImage"})
   }

   handleImage = () => {
     //setTimeout(this.noDisplayImg, 1500)
   }

   render() {
       //console.log(this.state.gameInSession)
       //console.log(this.answers)
       return (
           <React.Fragment>
              <SideBar changeFilterTypeState= { this.props.changeFilterTypeState } />
              <GameBoard
                allCards = { this.props.allCards }
                handleTimer = { this.handleTimer }
                handleImage = {this.handleImage}
                seconds = { this.state.seconds }
                checkGameState = {this.checkGameState}
                gameState = {this.gameInSession}
                index = {this.state.index}
                indexImg = {this.state.indexImg}
                instructors={this.props.instructors}
                answer={this.state.answer}
                hintIndex={this.state.indexImg}
              />
           </React.Fragment>
       )}
}

//this.state.dataInstructors.map((instructor) => instructor.answer)
