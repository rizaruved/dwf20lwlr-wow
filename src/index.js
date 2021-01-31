import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import PageRoute from "../src/routes/routes";

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <PageRoute />
    </Router>
  </BrowserRouter>,
  document.getElementById('root')
);