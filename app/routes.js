import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';

const createRoutes = () => {(
      <Route path="/" component={App}>
      </Route>
  );};

export default createRoutes;

