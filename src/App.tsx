import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

//Components
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Stocks from './components/Stocks';
import Properties from './components/Properties';

function App() {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row w-100">
          <div className="col-2 d-table">
            <Sidebar />
          </div>
          <div className="col">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/stocks" component={Stocks} />
              <Route path="/properties" component={Properties} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
