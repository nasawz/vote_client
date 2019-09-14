import * as React from 'react';
import { connect } from 'react-redux';
declare let window: any;
export interface InfoProps {
  primary_color;
  location;
  match;
  getVoteItem;
  activityId;
  vote_item;
  title;
  history;
  show_info_back;
  date_end;
  addVote;
  activity;
  clearVoteItem;
  user;
}

class Info extends React.Component<InfoProps, any> {
  timer;
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      showVoteRemindModal: false,
      voteRes: '',
      failMessage: ''
    };
  }
  openPic() {
    if (window.wx) {
      let { vote_item } = this.props;
      window.wx.previewImage({
        current: vote_item.pic,
        urls: [vote_item.pic]
      });
    }
  }
  getLeftTime(date_end) {
    let t = date_end - Date.now();
    if (t > 0) {
      let day = Math.floor(t / (24 * 3600 * 1000));
      let leave1 = t % (24 * 3600 * 1000);
      let hours = Math.floor(leave1 / (3600 * 1000));
      let leave2 = leave1 % (3600 * 1000);
      let minutes = Math.floor(leave2 / (60 * 1000));
      let leave3 = leave2 % (60 * 1000);
      let seconds = Math.round(leave3 / 1000);
      return `${day}天 ${hours}:${minutes}:${seconds}`;
    } else {
      clearInterval(this.timer);
      return '活动已结束';
    }
  }
  async componentWillMount() {
    let { id } = this.props.match.params;
    let { activityId, activity, user } = this.props;
    let vote_item = await this.props.getVoteItem({ activityId, id });
    window._wxData = {
      wxtitle: `快来为《${vote_item.title}》投票吧！`,
      wxlink: `${activity.domain}/vote/${activityId}/#/vote/info/${id}/-p_${user.objectId}-/`,
      wxdesc: activity.share_desc,
      wximgUrl: `${vote_item.pic}-700`
    };
    window.changeWx();
  }
  componentDidMount() {
    let { date_end } = this.props;

    this.timer = setInterval(() => {
      this.setState({ time: this.getLeftTime(date_end) });
    }, 1000);
  }
  componentWillUnmount() {
    let { clearVoteItem } = this.props;
    clearVoteItem();
  }
  goHome() {
    this.props.history.push('/vote/list');
  }
  async doAddVote() {
    let { addVote, activityId, vote_item } = this.props;
    try {
      let result = await addVote({ activityId, id: vote_item.objectId });
      this.setState({
        voteRes: 'succ'
      });
    } catch (error) {
      this.setState({
        voteRes: 'fail',
        failMessage: error.message
      });
    }
    this.openVoteRemindModal();
  }
  openVoteRemindModal() {
    this.setState({ showVoteRemindModal: true });
  }
  closeModal() {
    let { loading } = this.state;
    if (!loading) {
      this.setState({ showVoteRemindModal: false });
    }
  }
  renderCountDown() {
    let { primary_color } = this.props;
    let { time } = this.state;
    return (
      <li className="Detail__tr">
        <span>
          <span
            className="k-i-time-o Detail__time-pic"
            style={{
              color: primary_color
            }}
          />
        </span>
        <span className="Detail__label-name">距离结束</span>
        <span className="Detail__count-down"> {time}</span>
        {/* <button
          className="Detail__vote-btn"
          style={{
            borderColor: primary_color,
            color: primary_color
          }}
          onClick={this.doAddVote.bind(this)}
        >
          投我一票
        </button> */}
      </li>
    );
  }
  public render() {
    let { primary_color, vote_item, title, show_info_back } = this.props;
    let { showVoteRemindModal, voteRes, failMessage } = this.state;
    if (!vote_item) {
      return <div />;
    }
    return (
      <div>
        <div className="Detail__detail-wrap">
          <ul className="Detail__panel">
            <img
              src={`${vote_item.pic}-720`}
              className="Detail__avatar"
              onClick={this.openPic.bind(this)}
            />
            {/* <div className="Detail__img-swipe">
              <div className="mint-swipe">
                <div className="mint-swipe-items-wrap">
                  <div className="mint-swipe-item is-active">
                    
                  </div>
                </div>
                <div className="mint-swipe-indicators">
                  <div className="mint-swipe-indicator is-active" />
                </div>
              </div>
            </div> */}
            <li className="Detail__tr2">
              <span className="Detail__title">{vote_item.title}</span>
            </li>
            <li className="Detail__tr">
              <span className="Detail__desc">{vote_item.desc}</span>
            </li>
            {this.renderCountDown()}
            <li className="Detail__tr">
              <div className="Detail__un-present-rank">
                <div className="Detail__vote-num">编号： {vote_item.num} </div>
              </div>
            </li>
            <li className="Detail__tr">
              <div className="Detail__un-present-rank">
                <div className="Detail__vote-num">已投 {vote_item.score} 票</div>
                <div className="Detail__rank">
                  当前为第
                  {vote_item.rank}名
                </div>
              </div>
            </li>
          </ul>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img style={{ width: '100px' }} src="assets/images/logo.png" />
          </div>
          <ul className="Detail__activity-info" style={{ display: show_info_back ? '' : 'none' }}>
            <img
              src=""
              style={{
                width: '100%'
              }}
            />
            <li className="Detail__act-li">
              <span className="Detail__act-name">{title}</span>
              <span
                className="Detail__touch"
                style={{
                  color: primary_color
                }}
                onClick={this.goHome.bind(this)}
              >
                回首页
              </span>
            </li>
          </ul>
        </div>
        <div style={{ display: showVoteRemindModal ? '' : 'none' }}>
          <div className="Alert__backdrop" />
          <div className="Alert__remind-wrap">
            <div className="Alert__content-wrap">
              <div className="Alert__close-alert" onClick={this.closeModal.bind(this)}>
                <i className="k-i-close-o" />
              </div>
              <div className="Alert__success-pic">
                <img
                  src={
                    voteRes == 'succ'
                      ? '/assets/images/vote_succ.png'
                      : '/assets/images/vote_fail.png'
                  }
                  className="Alert__success-image"
                />
              </div>
              <div className="Alert__remind-text">
                <pre className="Alert__remind">{voteRes == 'succ' ? '投票成功' : failMessage}</pre>
              </div>
              <button
                className="Alert__back"
                style={{
                  backgroundColor: primary_color,
                  color: 'rgb(255, 255, 255)'
                }}
                onClick={this.closeModal.bind(this)}
              >
                确认
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {
    date_end: state.activity.date_end,
    title: state.activity.title,
    activityId: state.activity.objectId,
    activity: state.activity,
    show_info_back: state.activity.show_info_back,
    vote_item: state.vote.vote_item,
    primary_color: state.activity.primary_color,
    user: state.user
  };
};

const mapDispatch2Props = ({ vote: { getVoteItemAsync, clearVoteItem, addVoteAsync } }) => ({
  getVoteItem: getVoteItemAsync,
  clearVoteItem: clearVoteItem,
  addVote: addVoteAsync
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(Info);
