import React from 'react';

export default class Score extends React.Component {

    render(){
        //console.log('score component: ', this.props.seconds)
        //console.log(this.state.score)
        return(
            <div className="score">
                MY SCORE: {this.props.updateScore}
            </div>
        )
    }
}
