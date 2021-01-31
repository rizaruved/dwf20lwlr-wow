import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import PageRoutes from "../src/routes/routes";

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <PageRoutes />
    </Router>
  </BrowserRouter>,
  document.getElementById('root')
);