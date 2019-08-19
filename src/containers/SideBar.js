import React from 'react';
import Filters from '../components/Filters'

export default class SideBar extends React.Component {

    render(){

        return(
            <div>
                <Filters />
                <button>Start Game</button>    
            </div>
        )
    }
}