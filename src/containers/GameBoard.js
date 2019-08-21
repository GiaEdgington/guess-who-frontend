import React from 'react';
import Score from '../components/Score';
import Hint from '../components/Hint';
import ImageContainer from '../containers/ImageContainer';
import Timer from '../components/Timer';
import Input from '../components/Input';


export default class GameBoard extends React.Component {

    render(){
        //console.log(this.props)
        return(
            <div>
                <Score />
                <Timer seconds={this.props.seconds}/>
                <Hint />
                <ImageContainer allCards={this.props.allCards} filterType={this.props.filterType} className={this.props.className} />
                <Input />
                <button className="btnStart" style={{ fontSice:300}} onClick={(event) => {this.props.handleTimer(); this.props.handleImage()}}>START GAME</button>
            </div>
        )
    }
}
