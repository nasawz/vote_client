import * as React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'antd-mobile';
import Card from '../../../components/Card';
import Banner from '../../../components/Banner';
import ActivityTitle from '../../../components/ActivityTitle';
import ActivityTime from '../../../components/ActivityTime';
import ActivityIntro from '../../../components/ActivityIntro';
import CountDown from '../../../components/CountDown';
import RankBtn from '../../../components/RankBtn';
import Category from '../../../components/Category';
import Alert from '../../../components/Alert';
import * as _ from 'lodash'
export interface ListProps {
  activity: any;
  user;
  my_vote_item;
  history?;
  vote_items
  getVoteItems
  clearVoteItems
  addVote
}

class List extends React.Component<ListProps, any> {
  flag: any
  constructor(props) {
    super(props);
    let { activity } = this.props
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      activityId: activity.objectId,
      category: activity.categorys[0],
      pageNum: 0,
      limit: 4,
      order: {
        key: 'createAt',
        type: 'desc'
      },
      dataSource,
      isLoading: true,
      show: false,
      voteResult: ''
    };
  }
  goOpus() {
    this.props.history.push(`/vote/opus`);
  }
  goMe() {
    this.props.history.push(`/vote/me`);
  }
  //投票
  sendVote(id) {
    let { activityId } = this.state
    let { addVote } = this.props
    addVote({ activityId, id })
      .then(() => {
        this.setState({ show: true, voteResult: 'succ' });
        this.showAlert()
      })
      .catch((err) => {
        this.setState({ show: true, voteResult: 'fail' });
        this.showAlert()
      })
  }
  showAlert() {
    this.setState({
      show: true
    })
  }
  hideAlert() {
    this.setState({
      show: false
    })
  }
  clickHandler(category) {
    this.setState({
      category,
      pageNum: 0
    }, () => {
      this.getVoteItems()
    });
  }
  fmt() { }
  getVoteItems() {
    let { activityId, category, pageNum, limit, order } = this.state
    let { getVoteItems, clearVoteItems } = this.props
    let skip = pageNum * limit
    clearVoteItems()
    getVoteItems({ activityId, category, skip, limit, order })
  }
  componentDidMount() {
    this.getVoteItems()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.vote_items !== this.props.vote_items) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.vote_items),
        isLoading: false
      });
    }
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
    console.log('reach end', event);
    this.setState({
      isLoading: true,
      pageNum: this.state.pageNum + 1
    }, () => {
      this.getVoteItems()
    });
  }
  renderListView() {
    let { vote_items, activity } = this.props
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = 0;
    let vote_items_fix = _.orderBy(vote_items, ['score'], ['desc'])
    const row = (rowData, sectionID, rowID) => {
      // return vote_items_fix.map((item, index) => {

      // })
      return (
        <Card
          key={rowID}
          primary_color={activity.primary_color}
          sendVote={this.sendVote.bind(this)}
          index={rowID}
          opus={rowData}
        />
      );
    };
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        className="am-list"
        pageSize={this.state.limit}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    )
  }
  public render() {
    let { category, show, voteResult } = this.state;
    let { activity, children, history } = this.props;
    let { date_start, date_end, join_start, join_end } = activity;
    if (!activity) return <div />;
    let img = "assets/images/join_succ.png"
    let remind = '投票成功'
    if (voteResult === 'fail') {
      img = "assets/images/vote_fail.png"
      remind = '投票失败'
    }
    return (
      <div className="App__pcWrap">
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

          <div>
            {this.renderListView()}
          </div>
        </div>
        <Alert show={show} img={img} remind={remind} doClose={this.hideAlert.bind(this)} />
        {children}
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {
    activity: state.activity,
    user: state.user,
    my_vote_item: state.vote.my_vote_item,
    vote_items: state.vote.vote_items
  };
};

const mapDispatch2Props = ({ vote: { getVoteItemsAsync, clearVoteItems, addVoteAsync } }) => ({
  getVoteItems: getVoteItemsAsync,
  clearVoteItems: clearVoteItems,
  addVote: addVoteAsync
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(List);
