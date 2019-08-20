import React from 'react';
import { Link } from 'react-router-dom';

export default class Filters extends React.Component {

    render(){
        return(
            <div>
                <ul className="filters">
                  <li>Instructors</li>
                  <li>Mod 1</li>
                  <li>Mod 2</li>
                  <li>Mod 3</li>
                  <li>Mod 4</li>
                  <Link to="/game_board"><button>Start Game</button> </Link>
                </ul>
            </div>
        )
    }
}
