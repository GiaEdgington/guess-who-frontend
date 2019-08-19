import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Homepage from './containers/Homepage'
import SideBar from './containers/SideBar'
import GameBoard from './containers/GameBoard'

class App extends React.Component {
  
  render (){

    return(
      <div className="App">
        <Homepage />
        <SideBar />
        <GameBoard />
      </div>
    )
  }
}

// ReactDOM.render((
//   <Router>
//     <React.Fragment>
//       <Route exact path="/test" render={GameBoard} />
//     </React.Fragment>
//   </Router>),
//   document.getElementById('root')
// );

export default App;
