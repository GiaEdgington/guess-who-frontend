import React from 'react';
import KevinImage from '../images/instructors/Kevin.jpg';
import EricImage from '../images/instructors/Eric.jpg';
import GrahamImage from '../images/instructors/Graham.jpg';
import NickyImage from '../images/instructors/Nicky.jpg';
import GracieImage from '../images/instructors/Gracie.jpg';
import TonyImage from '../images/instructors/Tony.jpg';
import AnnieImage from '../images/instructors/Annie.jpg';
import RyanImage from '../images/instructors/Ryan.jpg';
import AyanaImage from '../images/instructors/Ayana.jpg';
import Layer0 from '../images/layers/layer0.jpg';
import Layer1 from '../images/layers/layer1.gif';
import Layer2 from '../images/layers/layer2.gif';
import Layer3 from '../images/layers/layer3.gif';
import Layer4 from '../images/layers/layer4.gif';
import Layer5 from '../images/layers/layer5.gif';
import Layer6 from '../images/layers/layer6.gif';
import Layer7 from '../images/layers/layer7.gif';
import Layer8 from '../images/layers/layer8.gif';
import Layer9 from '../images/layers/layer9.gif';

export default class Image extends React.Component {

  layers = [Layer0, Layer1, Layer2, Layer3,Layer4, Layer5, Layer6, Layer7, Layer8, Layer9 ];
  images = [KevinImage, GracieImage, NickyImage, GrahamImage, EricImage, TonyImage, RyanImage, AyanaImage, AnnieImage]

  render(){

    return(
        <div>
          <img className="image" src = {this.images[this.props.indexImg]} />
          <img className="layer" src = {this.layers[this.props.index]} />
        </div>
    )
  }

}
