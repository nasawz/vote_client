import * as React from 'react';
import { connect } from 'react-redux';

export interface MeProps {
  primary_color;
  my_vote_item;
}

class Me extends React.Component<MeProps, any> {
  public render() {
    let { primary_color, my_vote_item } = this.props;
    return (
      <div>
        <div className="MySignUp__wrap">
          <div className="MySignUp__split">
            <div className="signUpInformation__info-wrap">
              <div className="signUpInformation__signup-info">报名信息</div>
              <div className="signUpInformation__detail">
                <div className="signUpInformation__info-pic">
                  <img src={my_vote_item.pic} className="signUpInformation__pic" />
                  <span className="signUpInformation__pic-num">3</span>
                  <img src="assets/images/pic.png" className="signUpInformation__icon" />
                </div>
                <div className="signUpInformation__information">
                  <p className="signUpInformation__name">名称: {my_vote_item.title}</p>
                  <p className="signUpInformation__introduction">分类: {my_vote_item.category}</p>
                  <p className="signUpInformation__introduction">详细介绍: {my_vote_item.desc}</p>
                  {/* <p className="signUpInformation__introduction">性别: 男</p>
                  <p className="signUpInformation__introduction">年龄: sdfasdf</p>
                  <p className="signUpInformation__introduction">备注: asdfasdf</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="MySignUp__bottom-wrap">
            <div
              className="MySignUp__subcontent"
              style={{ backgroundColor: 'red', color: 'rgb(255, 255, 255)' }}
            >
              删除作品
            </div>
            <div
              className="MySignUp__subcontent"
              style={{ backgroundColor: primary_color, color: 'rgb(255, 255, 255)' }}
            >
              返回投票
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {
    primary_color: state.activity.primary_color,
    my_vote_item: state.vote.my_vote_item
  };
};

export default connect(mapState2Props)(Me);
