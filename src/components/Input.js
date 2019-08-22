import React from 'react';

export default class Input extends React.Component {



    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getInput(this.props.input)
        // this.props.setScore()
    }

    render(){
        // console.log(this.state.input)
        // console.log('input', this.props.seconds)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="input" value={this.props.input} onChange={(event) => this.props.handleChange(event.target.value)}/>
                </form>
            </div>
        )
    }
}
