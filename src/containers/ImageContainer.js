import React, { Component } from "react";
import Image from '../components/Image';

export default class Homepage extends Component {

    // makeInstructorCards = () => {
    //     let allCards = this.props.allCards
    //     return allCards.filter(card => {
    //         card.filter === "instructor" 
    //         return <Image image={card.image}/>
    //     })
    // }

  render(){
    return(
      <div>
        {/* {this.makeInstructorCards()} */}
      </div>
    )
  }
}
