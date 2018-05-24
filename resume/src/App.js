import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Drawer, NavBar, Icon } from 'antd-mobile';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./style/App.css";
import "./style/reset.css";
import Home from './components/Home';
import BottomNav from './components/BottomNav';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
       open: true,
    }
    this.onOpenChange = this.onOpenChange.bind(this);
  }

  onOpenChange () {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
     <Router>
      	<div className="App">
          <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange} style={{background:"#282828"}} >My Resume</NavBar>
          <div className="content">
            <div className="mark" style={{display: this.state.open ? "block" : "none"}} onClick={this.onOpenChange}></div>\
            <div className="side" style={{left: this.state.open ? 0 : "-10rem"}}>
              <p className="first">江山看不尽</p>
              <p className="second">最美镜中人</p>
            </div>
            <Route exact path="/" component={Home} />
          </div>
          <BottomNav />
        </div>
     </Router>
    );
  }
}

export default App;
