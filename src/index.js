import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Landing from "../src/pages/Landing";
import Routes from "../src/routes/routes";

ReactDOM.render(
  <BrowserRouter>
    <Landing />
  </BrowserRouter>,
  document.getElementById('root')
);