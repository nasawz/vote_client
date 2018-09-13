import * as React from 'react';
import { connect } from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import * as DocumentTitle from 'react-document-title';

import { IQueryItemsParams } from './models/vote';

import App from './app';
export interface RootProps {
  activity;
  user;
  getActivityData;
  getUserAsync;
  setCategory;
  getMyVoteItemAsync;
  // getVoteItemsAsync;
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
    // let queryParams: IQueryItemsParams = {
    //   activityId: activityId,
    //   limit: 10,
    //   skip: 0,
    //   order: {
    //     key: 'createAt',
    //     type: 'desc'
    //   },
    //   category: categorys[0]
    // };
    // this.props.getVoteItemsAsync(queryParams);
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
  vote: {
    setCategory,
    getMyVoteItemAsync
    // getVoteItemsAsync
  }
}) => ({
  getActivityData: getDataAsync,
  getUserAsync: getUserAsync,
  setCategory: setCategory,
  getMyVoteItemAsync: getMyVoteItemAsync
  // getVoteItemsAsync: getVoteItemsAsync
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(Root);
