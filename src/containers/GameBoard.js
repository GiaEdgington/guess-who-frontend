import React from 'react';
import Score from '../components/Score';
import Hint from '../components/Hint';
import ImageContainer from '../containers/ImageContainer';
import Timer from '../components/Timer';
import Input from '../components/Input';


export default class GameBoard extends React.Component {

    state = {
        input: "",
        score: 0
        //answer: "Kevin"
        // remember to change this to an empty string
        // remember to pass the function back up to change this stupid shit
    }

    //setAnswer = (name) => {
        //console.log(name)
        // this function is undone
    //}
    handleChange = (input) => {
        // console.log(event.target.value)
        if (this.props.seconds !== 0) {
            this.setState({
                input: input
            })
        }
    }

    // this.setState(prevState => ({
    //     isToggleOn: !prevState.isToggleOn
    //   }));

    getInput = (userInput) => {
        if(userInput.toLowerCase() === this.props.answer.toLowerCase()){
            this.props.checkGameState()
            this.setState({
                score: this.state.score + 10
            });
        }
    }

    clearInputAfterSubmit = () => {
        this.setState({
            input: ""
        })
    }

    render(){
        // console.log(this.state.score)
        return(
            <div>
                <Score gameState={this.gameInSession} seconds={this.props.seconds} updateScore={this.state.score}/>
                <Timer seconds={this.props.seconds}/>
                <Hint />
                <ImageContainer allCards={this.props.allCards} filterType={this.props.filterType} setAnswer={this.setAnswer} index={this.props.index} indexImg = {this.props.indexImg}/>
                <Input getInput={this.getInput} seconds={this.props.seconds} input={this.state.input} handleChange={this.handleChange} clearInputAfterSubmit={this.clearInputAfterSubmit}/>
                <button className="btnStart" style={{ fontSice:300}} onClick={(event) => {this.props.handleTimer(); this.props.handleImage()}}>START GAME</button>
            </div>
        )
    }
}
