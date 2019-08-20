import React from 'react';
import Score from '../components/Score';
import Hint from '../components/Hint';
import ImageContainer from '../containers/ImageContainer';
import Timer from '../components/Timer';
import Input from '../components/Input';


export default class GameBoard extends React.Component {

    render(){
        console.log(this.props.filterType)
        return(
            <div>
                <Score />
                <Timer />
                <Hint />
                <ImageContainer allCards={this.props.allCards}/>
                <Input />
                hello there!
            </div>
        )
    }
}
