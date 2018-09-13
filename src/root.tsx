import * as React from 'react';
import { connect } from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import * as DocumentTitle from 'react-document-title';

import App from './app';
export interface RootProps {
  activity;
  user;
  getActivityData;
  getUserAsync;
}

class Root extends React.Component<RootProps, any> {
  componentWillMount() {
    let { pathname } = window.location;
    let activityId = pathname.replace(/\//g, '');
    this.props.getActivityData(activityId);
    this.props.getUserAsync();
  }
  public render() {
    let { activity, user } = this.props;
    if (!user.objectId || !activity.objectId) {
      return <div />;
    }
    return (
      <DocumentTitle title={activity.title}>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </DocumentTitle>
    );
  }
}

const mapState2Props = (state) => {
  return {
    activity: state.activity,
    user: state.user
  };
};

const mapDispatch2Props = ({ activity: { getDataAsync }, user: { getUserAsync } }) => ({
  getActivityData: getDataAsync,
  getUserAsync: getUserAsync
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(Root);
