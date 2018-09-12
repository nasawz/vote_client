import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';

// import AppLayout from '../../components/Layout/AppLayout';

import LoadingComponent from '../../components/Loading';

let List = loadable({
  loader: () => import(/* webpackChunkName: "list" */ './pages/list'),
  loading: LoadingComponent
});

let Info = loadable({
  loader: () => import(/* webpackChunkName: "info" */ './pages/info'),
  loading: LoadingComponent
});

let Enroll = loadable({
  loader: () => import(/* webpackChunkName: "enroll" */ './pages/enroll'),
  loading: LoadingComponent
});
let Rank = loadable({
  loader: () => import(/* webpackChunkName: "rank" */ './pages/rank'),
  loading: LoadingComponent
});

export interface PageProps {
  match;
  changeLayout;
}

class Page extends React.Component<PageProps, any> {
  componentWillMount() {
    // this.props.changeLayout('1');
  }
  public render() {
    let { match } = this.props;
    return (
      <div>
        <Route path={`${match.url}/list`} component={List} />
        <Route path={`${match.url}/info`} component={Info} />
        <Route path={`${match.url}/enroll`} component={Enroll} />
        <Route path={`${match.url}/rank`} component={Rank} />
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {};
};

const mapDispatchToProps = ({ settings: {} }) => ({});

export default connect(
  mapState2Props,
  mapDispatchToProps
)(Page);
