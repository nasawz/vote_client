import * as React from 'react';
import Home from './container/home';

export interface RootProps {}

export default class Root extends React.Component<RootProps, any> {
  public render() {
    return <Home />;
  }
}
