import React from 'react';
//import { Link } from 'react-router-dom';

export default class Filters extends React.Component {

    handleClick = (e) =>{
        this.props.changeFilterTypeState(e)

    }

    render(){
        return(
            <div>
                <ul className="filters">
                  <li id="instructor" onClick={this.handleClick}>Instructors</li>
                  <li id="mod1" onClick={this.handleClick}>Mod 1</li>
                  <li id="mod2" onClick={this.handleClick}>Mod 2</li>
                  <li id="mod3" onClick={this.handleClick}>Mod 3</li>
                  <li id="mod4" onClick={this.handleClick}>Mod 4</li>
                </ul>
            </div>
        )
    }
}
