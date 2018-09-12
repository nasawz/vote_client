import * as React from 'react';
// import Home from './container/home';
import { Route, HashRouter as Router } from 'react-router-dom';
import App from './app';
export interface RootProps {}

export default class Root extends React.Component<RootProps, any> {
  public render() {
    return (
      <Router>
        <Route path="/" component={App} />
      </Router>
    );
  }
}
