import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Homepage from './containers/Homepage'
import SideBar from './containers/SideBar'
import GameBoard from './containers/GameBoard'

class App extends React.Component {

  state ={
    allCards: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/people_cards')
    .then(response => response.json())
    .then(data => this.setState({allCards: data}))
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
          path="/sidebar" 
          render={(routerProps)=> <SideBar {...routerProps} />} 
        />
        <Route 
          path="/game_board" 
          render={(routerProps)=> <GameBoard {...routerProps} allCards={this.state.allCards}/>}
        />
    </Switch>
    </BrowserRouter>
    )
  }
}


export default App;

  