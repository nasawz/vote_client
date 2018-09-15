import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import classnames from 'classnames';

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

let Opus = loadable({
  loader: () => import(/* webpackChunkName: "opus" */ './pages/opus'),
  loading: LoadingComponent
});
let Rank = loadable({
  loader: () => import(/* webpackChunkName: "rank" */ './pages/rank'),
  loading: LoadingComponent
});
let Me = loadable({
  loader: () => import(/* webpackChunkName: "me" */ './pages/me'),
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
  isMobile() {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
  public render() {
    let { match } = this.props;
    let isMobile = this.isMobile();
    let cls = {
      App__pcWrap: !isMobile,
      'App__mobile-wrap': isMobile
    };
    return (
      <div className={classnames(cls)}>
        <Route path={`${match.url}/list`} component={List} />
        <Route path={`${match.url}/info/:id`} component={Info} />
        <Route path={`${match.url}/opus`} component={Opus} />
        <Route path={`${match.url}/rank`} component={Rank} />
        <Route path={`${match.url}/me`} component={Me} />
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
