import React from 'react';

export default class Image extends React.Component {

    render(){

        return(
            <div className='masked'>
                <img src={this.props.imageSource}/>
            </div>
        )
    }
}
