import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./style/App.css";
import "./style/reset.css";
import Home from './components/Home';

class App extends Component {
  render() {
    return (
     <Router>
      <div className="App">
      	<p className="title">My Resume</p>
      	<div className="content">

      	</div>
      	<div className="bottom">

      	</div>
        <Route exact path="/" component={Home} />
      </div>
     </Router>
    );
  }
}

export default App;
