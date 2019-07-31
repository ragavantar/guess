import React, { Component } from 'react';

import Home from './Home';
import Prod from './prod';
import Status from './status';
import Gameover from './Gameover';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Status></Status> */}
        {/* <Home></Home> */}
        {/* <Prod></Prod> */}
        <Gameover></Gameover>
      </div>
    );
  }
}

export default App;
