import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {/*<Route path="about" component={About}/>*/}
        {/*<Route path="users" component={Users}>*/}
          {/*<Route path="/user/:userId" component={User}/>*/}
        {/*</Route>*/}
        {/*<Route path="*" component={NoMatch}/>*/}
      </Route>
    </Router>
), document.getElementById('app'));
