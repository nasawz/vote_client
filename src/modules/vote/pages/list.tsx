import * as React from 'react';
import { connect } from 'react-redux';
import { ListView, ActivityIndicator } from 'antd-mobile';
import Card from '../../../components/Card';
import Banner from '../../../components/Banner';
import ActivityTitle from '../../../components/ActivityTitle';
import ActivityTime from '../../../components/ActivityTime';
import ActivityIntro from '../../../components/ActivityIntro';
import CountDown from '../../../components/CountDown';
import RankBtn from '../../../components/RankBtn';
import Category from '../../../components/Category';
import Alert from '../../../components/Alert';
import * as _ from 'lodash';
export interface ListProps {
  activity: any;
  user;
  my_vote_item;
  history?;
  vote_items;
  getVoteItems;
  clearVoteItems;
  addVote;
  curr_category;
  setCategory;
  setVoteItemsPageNum;
  setVoteItemsYOffset;
  replaceVoteItems;
  pageNum;
  yOffset;
}

class List extends React.Component<ListProps, any> {
  flag: any;
  constructor(props) {
    super(props);
    let { activity } = this.props;
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      activityId: activity.objectId,
      limit: 10,
      order: {
        key: 'createAt',
        type: 'desc'
      },
      dataSource,
      isLoading: true,
      show: false,
      voteResult: '',
      failMessage: ''
    };
  }
  goOpus() {
    this.props.history.push(`/vote/opus`);
  }
  goMe() {
    this.props.history.push(`/vote/me`);
  }
  goInfo(data) {
    this.props.history.push(`/vote/info/${data.objectId}`);
  }
  //投票
  async sendVote(id, cb) {
    let { activityId } = this.state;
    let { addVote } = this.props;
    try {
      let result = await addVote({ activityId, id });
      this.setState({
        voteResult: 'succ'
      });
      cb(true);
    } catch (error) {
      this.setState({
        voteResult: 'fail',
        failMessage: error.message
      });
      cb(false);
    }
    this.showAlert();
  }

  showAlert() {
    this.setState({
      show: true
    });
  }
  hideAlert() {
    this.setState({
      show: false
    });
  }
  clickHandler(category) {
    this.props.setCategory(category);
    this.props.setVoteItemsPageNum(0);
    this.setState(
      {
        isLoading: true
      },
      () => {
        this.replaceVoteItems();
        // let { clearVoteItems } = this.props;
        // clearVoteItems();
        // this.getVoteItems();
      }
    );
  }
  fmt() {}
  replaceVoteItems() {
    let { activityId, limit, order } = this.state;
    let { replaceVoteItems, curr_category, pageNum } = this.props;
    let skip = pageNum * limit;
    replaceVoteItems({ activityId, category: curr_category, skip, limit, order });
  }
  getVoteItems() {
    let { activityId, limit, order } = this.state;
    let { getVoteItems, curr_category, pageNum } = this.props;
    let skip = pageNum * limit;
    getVoteItems({ activityId, category: curr_category, skip, limit, order });
  }
  componentDidMount() {
    let { vote_items, yOffset } = this.props;
    if (vote_items.length == 0) {
      this.getVoteItems();
    } else {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(vote_items),
        isLoading: false
      });
      setTimeout(() => {
        let listView: any = this.refs['item_list'];
        listView.scrollTo(0, yOffset);
      }, 100);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.vote_items !== this.props.vote_items) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.vote_items),
        isLoading: false
      });
    }
  }
  componentWillUnmount() {
    let { setVoteItemsYOffset } = this.props;
    setVoteItemsYOffset(window.pageYOffset);
  }
  renderJoinBtn() {
    let { join_rule, join_end, join_start, primary_color } = this.props.activity;
    let { type } = this.props.user;
    let { my_vote_item } = this.props;

    if (join_rule == 2) {
      // 企业用户才可参与
      if (type != '2') {
        return '';
      }
    }
    let isEnd = false;
    if (new Date() > join_end) {
      isEnd = true;
    }
    if (new Date() < join_start) {
      return (
        <button
          className="Header__apply-btn Header__no-click"
          style={{
            borderColor: 'rgb(251, 201, 77)',
            color: 'rgb(251, 201, 77)'
          }}
        >
          报名未开始
        </button>
      );
    }
    let hasJoin = my_vote_item != null ? true : false;
    if (hasJoin) {
      return (
        <button
          onClick={this.goMe.bind(this)}
          className="Header__apply-btn"
          style={{
            borderColor: primary_color,
            color: primary_color
          }}
        >
          我的报名
        </button>
      );
    }
    if (isEnd) {
      return '';
    }
    return (
      <button
        onClick={this.goOpus.bind(this)}
        className="Header__apply-btn"
        style={{
          borderColor: primary_color,
          color: primary_color
        }}
      >
        报名
      </button>
    );
  }
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    let { pageNum } = this.props;
    this.props.setVoteItemsPageNum(pageNum + 1);
    this.setState(
      {
        isLoading: true
      },
      () => {
        this.getVoteItems();
      }
    );
  };
  renderListView() {
    let { isLoading } = this.state;
    let { activity, curr_category } = this.props;
    let category = curr_category;
    const row = (rowData, sectionID, rowID) => {
      return (
        <Card
          key={rowID}
          primary_color={activity.primary_color}
          sendVote={this.sendVote.bind(this)}
          index={rowID}
          opus={rowData}
          goInfo={this.goInfo.bind(this)}
        />
      );
    };
    return (
      <ListView
        ref="item_list"
        key={category}
        dataSource={this.state.dataSource}
        renderFooter={() => (
          <div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? (
              <div className="loading-data">
                <ActivityIndicator text="加载中..." />
              </div>
            ) : (
              '没有更多了'
            )}
          </div>
        )}
        renderRow={row}
        className="am-list"
        pageSize={this.state.limit}
        useBodyScroll
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
  public render() {
    let { show, voteResult, failMessage } = this.state;
    let { activity, children, history, curr_category } = this.props;
    let category = curr_category;
    let { date_start, date_end, join_start, join_end } = activity;
    if (!activity) return <div />;
    let img = '/assets/images/join_succ.png';
    let remind = '投票成功';
    if (voteResult === 'fail') {
      img = '/assets/images/vote_fail.png';
      remind = failMessage;
    }
    return (
      <div className="List__whole">
        <div className="Header__panel">
          <Banner img={activity.kv} />
          <ActivityTitle title={activity.title} />
          <ActivityTime
            date_start={date_start}
            date_end={date_end}
            join_start={join_start}
            join_end={join_end}
          />
          <ActivityIntro desc={activity.desc} primary_color={activity.primary_color} />
          <CountDown
            join_start={activity.join_start}
            date_end={activity.date_end}
            primary_color={activity.primary_color}
          >
            {this.renderJoinBtn()}
          </CountDown>
          <Category
            activeKey={category ? category : activity.categorys[0]}
            categories={activity.categorys}
            primary_color={activity.primary_color}
            clickHandler={this.clickHandler.bind(this)}
          />
          <RankBtn
            hander_rank_btn={() => {
              history.push(`/vote/rank`);
            }}
          />
        </div>
        <div>{this.renderListView()}</div>
        <Alert show={show} img={img} remind={remind} doClose={this.hideAlert.bind(this)} />
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {
    activity: state.activity,
    user: state.user,
    my_vote_item: state.vote.my_vote_item,
    vote_items: state.vote.vote_items,
    curr_category: state.vote.curr_category,
    pageNum: state.vote.vote_items_pageNum,
    yOffset: state.vote.vote_items_YOffset
  };
};

const mapDispatch2Props = ({
  vote: {
    getVoteItemsAsync,
    getVoteItemsAndReplaceAsync,
    clearVoteItems,
    addVoteAsync,
    setCategory,
    setVoteItemsPageNum,
    setVoteItemsYOffset
  }
}) => ({
  getVoteItems: getVoteItemsAsync,
  replaceVoteItems: getVoteItemsAndReplaceAsync,
  clearVoteItems: clearVoteItems,
  setCategory: setCategory,
  addVote: addVoteAsync,
  setVoteItemsPageNum: setVoteItemsPageNum,
  setVoteItemsYOffset: setVoteItemsYOffset
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(List);
