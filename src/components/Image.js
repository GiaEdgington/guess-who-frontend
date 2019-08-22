import React from 'react';
import KevinImage from '../images/instructors/Kevin.jpg';
import Layer0 from '../images/layers/layer0.jpg';
import Layer1 from '../images/layers/layer1.gif';
import Layer2 from '../images/layers/layer2.gif';
import Layer3 from '../images/layers/layer3.gif';
import Layer4 from '../images/layers/layer4.gif';
import Layer5 from '../images/layers/layer5.gif';

export default class Image extends React.Component {


  state = {
    currentLayer: Layer0,
    fullImage: KevinImage
  }

  handleChange = () =>
  {
    let alls = [Layer5,Layer4,Layer3,Layer2,Layer1,Layer0];
    for (let i=0; i < alls.length; i++) {
      this.handleLayer(alls[i]);
    //   sleep(1000);
    }
  }
  handleLayer = (stuff) =>
  {
    console.log(stuff)
  }




  // handleClass = setTimeout(() => {
  // this.setState({className: "noImage"})
  // }, 1000);

    render(){

        //let counter = this.state.counter;
        return(
            <div className='masked'>
              <img onClick = {this.handleChange} className="image"  src= { KevinImage} alt=""/>
            </div>
        )
    }
}

//setTimeout(function() { testdiv.style.display='none'; }, 3000);
{/*)// <img className={this.props.className} src = {Layer0} />*/}
