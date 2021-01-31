import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import Routes from "../src/routes/routes";

ReactDOM.render(
  <BrowserRouter>
    <Router></Router>
  </BrowserRouter>,
  document.getElementById('root')
);