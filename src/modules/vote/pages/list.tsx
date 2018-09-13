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
  goOpus() {
    this.props.history.push(`/vote/opus`);
  }
  public render() {
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
            <ActivityIntro />
            <CountDown time="6天 22:48:19">
              <button
                onClick={this.goOpus.bind(this)}
                className="Header__apply-btn"
                style={{
                  borderColor: 'rgb(57, 150, 246)',
                  color: 'rgb(57, 150, 246)'
                }}
              >
                报名
              </button>
            </CountDown>
            <Category categories={activity.categorys} />
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
              <Card />
              <Card />
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
