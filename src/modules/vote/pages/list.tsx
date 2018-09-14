import * as React from 'react';
import { connect } from 'react-redux';
import Card from '../../../components/Card';
import Banner from '../../../components/Banner';
import ActivityTitle from '../../../components/ActivityTitle';
import ActivityTime from '../../../components/ActivityTime';
import ActivityIntro from '../../../components/ActivityIntro';
import CountDown from '../../../components/CountDown';
import RankBtn from '../../../components/RankBtn';
import Category from '../../../components/Category';
export interface ListProps {
  activity: any;
  user;
  my_vote_item;
  history?;
}

class List extends React.Component<ListProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ''
    };
  }
  goOpus() {
    this.props.history.push(`/vote/opus`);
  }
  goMe() {
    this.props.history.push(`/vote/me`);
  }
  //投票
  vote(id) {
    console.log('id', id);
  }
  clickHandler(category) {
    this.setState(
      {
        category
      },
      () => {
        // 获取列表数据
      }
    );
  }
  fmt() {}
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
  public render() {
    let { category } = this.state;
    let { activity, children, history } = this.props;
    let { date_start, date_end, join_start, join_end } = activity;

    if (!activity) return <div />;
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
            <div
              className="List__double-flow-wrap"
              style={{
                height: '583.4px',
                position: 'relative'
              }}
            >
              <Card
                sendVote={this.vote}
                opus={{
                  id: 1,
                  name: 'aaa',
                  desc: 'aaaaaaaa',
                  rank: 1,
                  count: 15
                }}
              />
              <Card
                sendVote={this.vote}
                opus={{
                  id: 2,
                  name: 'bbbb',
                  desc: 'bbbbbbbb',
                  rank: 2,
                  count: 8
                }}
              />
            </div>
          </div>
        </div>

        {children}
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {
    activity: state.activity,
    user: state.user,
    my_vote_item: state.vote.my_vote_item
  };
};

export default connect(mapState2Props)(List);
