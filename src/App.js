import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Homepage from './containers/Homepage'
import SideBar from './containers/SideBar'
import GameBoard from './containers/GameBoard'

class App extends React.Component {

  render (){

    return(
      <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps)=> <Homepage  {...routerProps}/>}
           />
          <Route path="/sidebar" component={SideBar}/>
          <Route path="/game_board" component={GameBoard}/>
    </Switch>
    </BrowserRouter>
    )
  }
}


export default App;
