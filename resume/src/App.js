import React, { Component } from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { Drawer, NavBar, Icon } from 'antd-mobile';
import "./style/App.css";
import "./style/reset.css";
import Resume from './components/Resume';
import Job from './components/Job';
import Project from './components/Project';
import Photo from './components/Photo';
import BottomNav from './components/BottomNav';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
       open: false,
    }
    this.onOpenChange = this.onOpenChange.bind(this);
  }

  onOpenChange () {
    this.setState({ open: !this.state.open });
  }

  render() {
    const sidebar = (
      <div className="side" >
        <p className="first">江 山 看 不 尽</p>
        <p className="second">最 美 镜 中 人</p>
      </div>
    )

    return (
     <Router>
      	<div className="App">
          <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange} style={{background:"#282828"}} >这只是一个演习</NavBar>
          <div className="content">
            <Drawer
              className="my-drawer"
              style={{ minHeight: "100%" }}
              sidebar={sidebar}
              open={this.state.open}
              onOpenChange={this.onOpenChange}
            >
              <div style={{flex: 1}}>
	              <Switch>
	                <Route path="/resume" component={Resume} />
	                <Route path="/job" component={Job} />
	                <Route path="/project" component={Project} />
	                <Route path="/photo" component={Photo} />
	                <Redirect from='/' to='/resume'/>
	              </Switch>
              </div>
              
            </Drawer>
          </div>
          <BottomNav />
        </div>
     </Router>
    );
  }
}

export default App;
