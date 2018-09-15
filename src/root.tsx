import * as React from 'react';
import { connect } from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import * as DocumentTitle from 'react-document-title';

import { IQueryItemsParams } from './models/vote';
import { getJsConfig } from './api';
import App from './app';

declare let window: any;

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
    let activity = await this.props.getActivityData(activityId);
    let { categorys } = activity;
    if (categorys && categorys.length > 0) {
      this.props.setCategory(categorys[0]);
    }
    this.props.getMyVoteItemAsync(activityId);

    window._wxData = {
      wxtitle: activity.title,
      wxlink: '',
      wxdesc: `${activity.title}正在进行中，快来投票吧`,
      wximgUrl: `${activity.kv}-75`
    };
    let result = await getJsConfig(activityId, window.location.href.split('#')[0]);
    let config = result.data;
    this.configShare(config);
  }
  configShare(config) {
    window.wx.config({
      debug: false,
      appId: config['appId'],
      timestamp: config['timestamp'],
      nonceStr: config['nonceStr'],
      signature: config['signature'],
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'onVoicePlayEnd',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'translateVoice',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
    });

    window.wx.ready(function() {
      window.signature = true;
      window.changeWx();
    });

    window.wx.error(function(err) {
      window.signature = false;
    });
  }
  componentDidMount() {}
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

window.changeWx = () => {
  window.wx.onMenuShareAppMessage({
    title: window._wxData.wxtitle,
    desc: window._wxData.wxdesc,
    link: window._wxData.wxlink,
    imgUrl: window._wxData.wximgUrl,
    trigger: function() {},
    success: function() {
      if (window.shareSuccess) {
        window.shareSuccess();
      }
    },
    cancel: function() {},
    fail: function() {}
  });

  window.wx.onMenuShareTimeline({
    title: window._wxData.wxtitle + '，' + window._wxData.wxdesc,
    link: window._wxData.wxlink,
    imgUrl: window._wxData.wximgUrl,
    trigger: function() {},
    success: function() {
      if (window.shareSuccess) {
        window.shareSuccess();
      }
    },
    cancel: function() {},
    fail: function() {}
  });
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
