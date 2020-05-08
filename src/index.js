import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './LoginAuth';
import DashBoard from './DashBoard';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/dashBoard"  component={DashBoard} />
        </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
