import React from 'react';
import Filters from '../components/Filters';

export default class SideBar extends React.Component {

    render(){
        return(
            <div>
                <Filters changeFilterTypeState={this.props.changeFilterTypeState}/>
            </div>
        )
    }
}
