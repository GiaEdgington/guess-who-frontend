import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Homepage from './containers/Homepage'
import SideBar from './containers/SideBar'
import GameBoard from './containers/GameBoard'

class App extends React.Component {

  state ={
    allCards: [],
    filterType: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/people_cards')
    .then(response => response.json())
    .then(data => this.setState({allCards: data}))
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
          path="/sidebar" 
          render={(routerProps)=> <SideBar {...routerProps} changeFilterTypeState={this.changeFilterTypeState}/>} 
        />
        <Route 
          path="/game_board" 
          render={(routerProps)=> <GameBoard {...routerProps} allCards={this.state.allCards} filterType={this.state.filterType}/>}
        />
    </Switch>
    </BrowserRouter>
    )
  }
}


export default App;

  