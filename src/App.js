import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

//Components
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import Stocks from './components/stocks/Stocks';
import Properties from './components/properties/Properties';

function App() {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row w-100">
          <div className="col-3 main-sidebar">
            <Sidebar />
          </div>
          <div className="col main-content">
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
