import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Home } from './Home'; 
import { TodoManage } from './TodoManage'; 
import { Details } from './Details'; 
import style from './style.css';


class IndexApp extends Component {
  render() {
    return (
      <div>
        <h1 className='app-page-title'>Price Monitor</h1>
        <Router>
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/create-todo'} component={TodoManage}/>
            <Route exact path={'/create-todo/:id'} component={Details}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default IndexApp;
