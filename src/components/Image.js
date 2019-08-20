import React from 'react';

export default class Image extends React.Component {

    render(){
        console.log(this.props)
        return(
            <div>
                <img src={this.props.image}/>
            </div>
        )
    }
}
