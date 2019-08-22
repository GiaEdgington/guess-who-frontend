import React from 'react';
import Score from '../components/Score';
import Hint from '../components/Hint';
import ImageContainer from '../containers/ImageContainer';
import Timer from '../components/Timer';
import Input from '../components/Input';


export default class GameBoard extends React.Component {

    state = {
        answer: "Kevin",
        // remember to change this to an empty string
        // remember to pass the function back up to change this stupid shit
    }

    setAnswer = (name) => {
        console.log(name)
        // this function is undone
    }

    getInput = (userInput) => {
        if(userInput === this.state.answer.toLowerCase()){
            this.props.checkGameState()
        }
    }

    render(){
        //console.log(this.props)
        return(
            <div>
                <Score gameState={this.gameInSession} seconds={this.props.seconds}/>
                <Timer seconds={this.props.seconds}/>
                <Hint />
                <ImageContainer allCards={this.props.allCards} filterType={this.props.filterType} setAnswer={this.setAnswer} className={this.props.className} />
                <Input getInput={this.getInput} seconds={this.props.seconds}/>
                <button className="btnStart" style={{ fontSice:300}} onClick={(event) => {this.props.handleTimer(); this.props.handleImage()}}>START GAME</button>
            </div>
        )
    }
}
