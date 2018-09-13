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
  setCategory;
  getMyVoteItemAsync;
}

class Root extends React.Component<RootProps, any> {
  async componentWillMount() {
    let { pathname } = window.location;
    let user = await this.props.getUserAsync();
    if (!user) {
      // TODO go login
    }
    let activityId = pathname.replace(/\//g, '');
    let { categorys } = await this.props.getActivityData(activityId);
    if (categorys && categorys.length > 0) {
      this.props.setCategory(categorys[0]);
    }
    this.props.getMyVoteItemAsync(activityId);
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

const mapDispatch2Props = ({
  activity: { getDataAsync },
  user: { getUserAsync },
  vote: { setCategory, getMyVoteItemAsync }
}) => ({
  getActivityData: getDataAsync,
  getUserAsync: getUserAsync,
  setCategory: setCategory,
  getMyVoteItemAsync: getMyVoteItemAsync
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(Root);
