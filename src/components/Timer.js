import React from 'react';

export default class Timer extends React.Component {

    render(){

        return(
            <div>
                <h1 className="timer">{this.props.seconds}</h1>
            </div>
        )
    }
}
