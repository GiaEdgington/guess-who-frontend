import React from 'react';
import Layer1 from '../images/layers/layer1.gif'
import KevinImage from '../images/instructors/Kevin.jpg'

export default class Image extends React.Component {

    render(){

        return(
            <div className='masked'>
              <img className="image" src= { KevinImage } alt=""/>
              <img className="layer" src = {Layer1}/>
            </div>
        )
    }
}
