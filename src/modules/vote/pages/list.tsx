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
  public render() {
    let { category } = this.state;
    let { activity, children, history } = this.props;
    let opus_time: any = { starttime: '2018-09-07 21:15', endtime: '2018-09-14 21:15' };
    let vote_time: any = { starttime: '2018-09-07 21:15', endtime: '2018-09-14 21:15' };
    if (!activity) return <div />;
    return (
      <div className="App__pcWrap">
        <div className="List__whole">
          <div className="Header__panel">
            <Banner img={activity.kv} />
            <ActivityTitle title={activity.title} />
            <ActivityTime opus_time={opus_time} vote_time={vote_time} />
            <ActivityIntro desc={activity.desc} primary_color={activity.primary_color} />
            <CountDown
              date_end={activity.date_end}
              time="6天 22:48:19"
              primary_color={activity.primary_color}
            >
              <button
                onClick={this.goOpus.bind(this)}
                className="Header__apply-btn"
                style={{
                  borderColor: activity.primary_color,
                  color: activity.primary_color
                }}
              >
                报名
              </button>
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
    activity: state.activity
  };
};

export default connect(mapState2Props)(List);
