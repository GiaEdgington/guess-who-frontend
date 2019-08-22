import React from 'react';

export default class Hint extends React.Component {

  hints = () => {
    return this.props.instructors.map(instructor => instructor.hint)

  }

    render(){
      console.log(this.hints())
        return(
            <div >
                <h2 className="hint">HINT</h2>
                <div className="about">
                  <p>{this.hints()[this.props.hintIndex]}</p>
                </div>
            </div>
        )
    }
}
