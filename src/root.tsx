import * as React from 'react';
import { connect } from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import * as DocumentTitle from 'react-document-title';

import App from './app';
export interface RootProps {
  title;
  getActivityData;
}

class Root extends React.Component<RootProps, any> {
  componentWillMount() {
    let { pathname } = window.location;
    let activityId = pathname.replace(/\//g, '');
    this.props.getActivityData(activityId);
  }
  public render() {
    let { title } = this.props;
    return (
      <DocumentTitle title={title}>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </DocumentTitle>
    );
  }
}

const mapState2Props = (state) => {
  return {
    title: state.activity.title
  };
};

const mapDispatch2Props = ({ activity: { getDataAsync } }) => ({
  getActivityData: getDataAsync
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(Root);
