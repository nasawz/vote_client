import * as React from 'react';
import { connect } from 'react-redux';
export interface ListProps {}
import Card from '../../../components/Card';
import Banner from '../../../components/Banner';
import ActivityTitle from '../../../components/ActivityTitle';
import ActivityTime from '../../../components/ActivityTime';
import ActivityIntro from '../../../components/ActivityIntro';
import CountDown from '../../../components/CountDown';
import RankBtn from '../../../components/RankBtn';
import Category from '../../../components/Category';

class List extends React.Component<ListProps, any> {
  public render() {
    let { children } = this.props;
    let opus_time: any = { starttime: '2018-09-07 21:15', endtime: '2018-09-14 21:15' };
    let vote_time: any = { starttime: '2018-09-07 21:15', endtime: '2018-09-14 21:15' };
    return (
      <div className="App__pcWrap">
        <div className="List__whole">
          <div className="Header__panel">
            <Banner img="http://pic.616pic.com/bg_w1180/00/24/63/0p2bIHGzTW.jpg!/fw/1120" />
            <ActivityTitle title="投票活动" />
            <ActivityTime opus_time={opus_time} vote_time={vote_time} />
            <ActivityIntro />
            <CountDown time="6天 22:48:19">
              <button
                className="Header__apply-btn"
                style={{
                  borderColor: 'rgb(57, 150, 246)',
                  color: 'rgb(57, 150, 246)'
                }}
              >
                报名
              </button>
            </CountDown>
            <Category categories={[]} />
            <RankBtn
              hander_rank_btn={() => {
                console.log('去榜单');
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
  return {};
};

export default connect(mapState2Props)(List);
