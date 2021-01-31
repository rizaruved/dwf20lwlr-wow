import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from "./routes/RoutesConfig";

ReactDOM.render(
  <BrowserRouter>
    <PageRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);