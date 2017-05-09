import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main.jsx';

const App = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Main}></Route>
  </BrowserRouter>,
  App
);