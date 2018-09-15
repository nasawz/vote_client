import * as React from 'react';

export interface MeProps {}

export default class Me extends React.Component<MeProps, any> {
  public render() {
    return (
      <div>
        <div className="MySignUp__wrap">
          <div className="checkState__check-wrap">
            <div className="checkState__state">报名正在审核中...</div>
            <div className="checkState__detail">
              <div className="checkState__detail-li">
                <div className="checkState__circle" />
                <div className="checkState__instruction">您的报名信息已提交, 请等待审核</div>
              </div>
            </div>
          </div>
          <div className="MySignUp__split">
            <div className="signUpInformation__info-wrap">
              <div className="signUpInformation__signup-info">报名信息</div>
              <div className="signUpInformation__detail">
                <div className="signUpInformation__info-pic">
                  <img src="" className="signUpInformation__pic" />
                  <span className="signUpInformation__pic-num">3</span>
                  <img src="/assets/images/pic.png" className="signUpInformation__icon" />
                </div>
                <div className="signUpInformation__information">
                  <p className="signUpInformation__name">名称: sfdasdf</p>
                  <p className="signUpInformation__introduction">详细介绍: sfdasdfasdfasd</p>
                  <p className="signUpInformation__introduction">性别: 男</p>
                  <p className="signUpInformation__introduction">年龄: sdfasdf</p>
                  <p className="signUpInformation__introduction">备注: asdfasdf</p>
                </div>
              </div>
            </div>
          </div>
          <div className="MySignUp__bottom-wrap">
            <div
              className="MySignUp__subcontent"
              style={{ backgroundColor: 'rgb(57, 150, 246)', color: 'rgb(255, 255, 255)' }}
            >
              返回投票
            </div>
          </div>
        </div>
      </div>
    );
  }
}
