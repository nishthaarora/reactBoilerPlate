import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main.jsx';
import Info from './components/info.jsx';
import SomethingElse from './components/SomethingElse.jsx';

const App = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
      <div>
        <Route path="/" component={Main}></Route>
        <Route path="/info" component={Info}></Route>
        <Route path="/somethingElse" component={SomethingElse}></Route>
      </div>
  </BrowserRouter>,
  App
);