import React from 'react';
import { Switch, HashRouter} from 'react-router-dom';

import Routes from 'components/Routes'

import './style.scss'

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Routes/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
