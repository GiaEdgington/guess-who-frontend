import React from 'react';

export default class Input extends React.Component {

    state = {
        input: "",

    }

    handleChange = (event) => {
        // console.log(event.target.value)
        if (this.props.seconds !== 0) {
            this.setState({
                input: event.target.value
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getInput(this.state.input)
        // this.props.setScore()
    }

    render(){
        // console.log(this.state.input)
        // console.log('input', this.props.seconds)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="input" value={this.state.input} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}
