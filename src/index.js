import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PageRoute from "../src/routes/routes";

ReactDOM.render(
  <BrowserRouter>
    <PageRoute />
  </BrowserRouter>,
  document.getElementById('root')
);