import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import Homepage from './containers/Homepage';
import GameContainer from './containers/GameContainer';

class App extends React.Component {

  state ={
    allCards: [],
    filterType: "",
    dataInstructors: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/people_cards')
    .then(response => response.json())
    .then(data => this.setState({allCards: data, dataInstructors: data.filter((instructor) => instructor.filter == "instructor")}))
  }

  changeFilterTypeState = (e) => {
    this.setState({
      filterType: e.target.id
    })
  }

  render (){
    return(
      <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps)=> <Homepage  {...routerProps}/>}
        />
        <Route
          path="/game_board"
          render={(routerProps)=> <GameContainer {...routerProps}
            changeFilterTypeState={this.changeFilterTypeState}
            allCards={this.state.allCards}
            instructors={this.state.dataInstructors}/>
          }
        />
    </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
