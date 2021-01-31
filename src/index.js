import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PageRoute from "./routes/RoutesConfig";

ReactDOM.render(
  <BrowserRouter>
    <PageRoute />
  </BrowserRouter>,
  document.getElementById('root')
);