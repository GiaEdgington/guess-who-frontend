import React, { Component } from "react";
import Image from '../components/Image';

export default class ImageContainer extends Component {

  //imageSource = (name) => {
  //  return require(`../images/instructors/${name}.jpg`)
  //}

  //makeImageCard = () => {
  //  let filtered = this.props.allCards.filter(card => card.filter === 'instructor')
  //    return filtered.map(card => <Image key={`${card.answer} ${card.id}`}
  //                                       imageSource={this.imageSource(card.answer)}
  //                                     setAnswer={this.props.setAnswer}
  //                              />)
  //}

  render(){

    return(
      <div>
        <Image index={this.props.index} indexImg = {this.props.indexImg} />
        {/* {this.makeImageCard()} */}
      </div>
    )
  }
}
