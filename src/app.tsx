import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import loadable from 'react-loadable';
// import classnames from 'classnames';
import LoadingComponent from './components/Loading';

let Vote = loadable({
  loader: () => import(/* webpackChunkName: "vote" */ './modules/vote/index'),
  loading: LoadingComponent
});

export interface AppProps {
  match;
  location;
  theme;
}

class App extends React.Component<AppProps, any> {
  componentDidMount() {}
  public render() {
    const { match, location, theme } = this.props;
    console.log(match.url);
    const isRoot = location.pathname === '/' ? true : false;
    if (isRoot) {
      return <Redirect to={'/vote/list'} />;
    }

    return (
      <div id="app">
        <Route path={`${match.url}vote`} component={Vote} />
        {/* <Route path={`${match.url}list`} component={List} /> */}
        {/* <Route path={`${match.url}vote`} component={Vote} /> */}
        {/* <Route path={`${match.url}user`} component={Account} /> */}
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {
    // theme: state.settings.theme
  };
};

const mapDispatch = ({ location: { changeLocation } }) => ({
  changeLocation: (location) => changeLocation(location)
});

export default connect(mapState2Props)(App);
